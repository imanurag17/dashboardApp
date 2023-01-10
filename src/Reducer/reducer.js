import * as actions from '../Action/types'

const initialState = {
    sidebar: true,
    projectText: '',
    announcementText: '',
    project: [],
    announcement: [],
    projectId: 1,
    announcementId: 1
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.SHOW_SIDEBAR:
            return {
                ...state,
                sidebar: !state.sidebar
            }

        case actions.TEXTAREA_TEXT:
            return {
                ...state,
                projectText: action.payload
            }

        case actions.ADD_PROJECT:
            const projectDetails = state.project
            const textareavalue = state.projectText
            const newdetails = {
                id: state.projectId,
                description: textareavalue
            }
            projectDetails.push(newdetails)
            return {
                ...state,
                project: projectDetails,
                projectId: state.projectId + 1,
                projectText: ''
            }

        case actions.DELETE_PROJECT:
            const proj = state.project.filter((data) => { return data.id !== action.payload })
            return {
                ...state,
                project: proj
            }

        case actions.ANNOUNCEMENT_TEXT:
            return {
                ...state,
                announcementText: action.payload
            }

        case actions.ADD_ANNOUNCEMENT:
            const annDetails = state.announcement
            const anncValue = state.announcementText
            const newAnncDetails = {
                id: state.announcementId,
                description: anncValue
            }
            annDetails.push(newAnncDetails)
            return {
                ...state,
                announcement: annDetails,
                announcementId: state.announcementId + 1,
                announcementText: ''
            }

        case actions.DELETE_ANNC:
            const annc = state.announcement.filter((data)=>{return data.id !== action.payload})
            return {
                ...state,
                announcement: annc
            }
        default:
            return state
    }
}