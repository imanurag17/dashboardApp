import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux/es/exports';
import { SidebarData } from '../mock';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { showSidebar } from '../Action/action';

class Header extends Component {
    constructor(props){
        super(props)
    }
    state = { 
        sidebar: true,
     } 
    
    showSidebar = ()=>{this.setState({...this.state, sidebar: !this.state.sidebar})}
    render() { 
        return (
            <>
            <div className='navbar'>
                <Link to='#' className='menu_bars'>
                <FaIcons.FaBars onClick={this.props.showSidebar}/>
                </Link>
            </div>
            <nav className={this.props.sidebar ? 'nav_menu active' : 'nav_menu'}>
                <ul className='nav_menu_items' onClick={this.props.showSidebar}>
                    <li className='navbar_toggle'>
                        <Link to='' className='menu_bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                        {SidebarData.map((item, index)=>{
                            return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icons}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            )
                        })}

                </ul>
            </nav>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showSidebar: () => dispatch(showSidebar()) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
//export default Header