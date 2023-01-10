import React, { Component } from 'react';
import Header from './header';
import Email from './email';
import { details } from '../mock';
import { Route, Routes, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {textAreatext, addProject, deleteProject, announcementText, addAnnouncement,deleteAnnc} from '../Action/action'

class Dashboard extends Component {
    state = {
        //announcementText: '',
        announcement: [],
        announcementId: 1
    }
    textAreaChange = (e) => {
        this.props.textAreatext(e.target.value)
    }
    handleAnnouncement = (e) => {
        this.props.announcementText(e.target.value)
    }

    render() {
        return (
            <>
                <div className='main_div'>
                    <div className='section_div'>
                        <div className='section_head'>
                            <span>Projects</span>
                            <div>

                                <textarea name="" id="" cols="60" rows="3" value={this.props.projectText} onChange={this.textAreaChange}></textarea>
                                <button className='saveBtn' onClick={this.props.addProject}>Add</button>
                            </div>
                        </div>
                        <div className='grid_container'>
                            {
                                this.props.project.map((data) => {
                                    return (
                                        <div className='grid_item'>
                                            <div>
                                            <h2>Project: {data.id}</h2>
                                            <p>{data.description}</p>
                                            </div>
                                            <button onClick={this.props.deleteProject.bind(this,data.id)} className='delete'>Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='section_div'>
                        <div className='section_head'>
                            <span>Announcement</span>
                            <div>

                                <textarea name="" id="" cols="60" rows="3" value={this.props.anncText} onChange={this.handleAnnouncement}></textarea>
                                <button className='saveBtn' onClick={this.props.addAnnouncement}>Add</button>
                            </div>
                        </div>
                        <div className='grid_container'>
                            {
                                this.props.announcement.map((data) => {
                                    return (
                                        <div className='grid_item'>
                                            <div>
                                            <h2>Announcement: {data.id}</h2>
                                            <p>{data.description}</p>
                                            </div>
                                            <button onClick={this.props.deleteAnnc.bind(this,data.id)} className='delete'>Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='pointof_contact'>
                        <div className='section_head'>
                            <span>Point of Contact</span>
                        </div>
                        <div>
                            {details.map((data) => {
                                return (
                                    <>
                                        <p className='para'>DM: <>{data.dm_name}</>(<a href='#'>{data.dm_mail}</a>)</p>
                                        <p className='para'>PM: <>{data.pm_name}</>(<a href='#'>{data.pm_mail}</a>)</p>
                                        <p className='para'>Lead: <>{data.lead_name}</>(<a href='#'>{data.lead_mail}</a>)</p>
                                    </>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        projectText: state.projectText,
        project: state.project,
        anncText: state.announcementText,
        announcement: state.announcement
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        textAreatext: (text) => dispatch(textAreatext(text)),
        addProject: () => dispatch(addProject()),
        deleteProject: (id) => dispatch(deleteProject(id)),
        announcementText: (text) => dispatch(announcementText(text)),
        addAnnouncement: () => dispatch(addAnnouncement()),
        deleteAnnc: (id) => dispatch(deleteAnnc(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
//export default Dashboard