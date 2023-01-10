import * as action from './types'

export const showSidebar = description => ({
    type: action.SHOW_SIDEBAR,
    payload: {
        //should contain minimum info about action
    }
})

export const textAreatext = text => ({
    type: action.TEXTAREA_TEXT,
    payload: text
})

export const addProject = data => ({
    type: action.ADD_PROJECT,
})

export const deleteProject = id => ({
    type: action.DELETE_PROJECT,
    payload: id
})

export const announcementText = text => ({
    type: action.ANNOUNCEMENT_TEXT,
    payload: text
})

export const addAnnouncement = data => ({
    type: action.ADD_ANNOUNCEMENT,
})

export const deleteAnnc = id => ({
    type: action.DELETE_ANNC,
    payload: id
})