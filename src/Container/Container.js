import { connect } from 'react-redux'
import App from '../App';
import { showSidebar } from '../Action/action';

const mapStateToProps = state => {
    return {
        
    } 
} 
const mapDispatchToProps = (dispatch) => {
    return {
        //showSidebar: () => dispatch(showSidebar())        
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(App)
