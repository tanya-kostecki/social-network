import {v1} from "uuid";
import {ProfilePageType, ProfileType} from "../types";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-POST-TEXT',
    newPostText: string
}

export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE',
    profile: ProfileType
}

export type SetStatusActionType = ReturnType<typeof setStatusAC>

export type ActionsType = AddPostActionType | UpdatePostTextActionType | SetUserProfileActionType | SetStatusActionType

const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi', likesCount: 0},
        {id: '2', message: 'How are you?', likesCount: 2},
        {id: '3', message: 'What are you doing?', likesCount: 14},
    ],
    newPostText: '',
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'UPDATE-POST-TEXT': {
            return {...state, newPostText: action.newPostText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

//action creators
export const addPost = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostText = (text: string): UpdatePostTextActionType => {
    return {
        type: 'UPDATE-POST-TEXT',
        newPostText: text
    } as const
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}


//thunk creators
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getProfileStatus = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(res => {
            dispatch(setStatusAC(res.data))
        })
}

export const updateProfileStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            dispatch(setStatusAC(status))
        })
}