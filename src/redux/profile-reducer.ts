import {v1} from "uuid";
import {ProfilePageType} from "../types";
import {profileApi, ProfileType} from "../api/api";
import {Dispatch} from "redux";

export type AddPostActionType = {
    type: 'ADD-POST'
    post: string
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-POST-TEXT',
    newPostText: string
}

export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE',
    profile: ProfileType
}

type DeletePostActionType = ReturnType<typeof deletePost>

export type SetStatusActionType = ReturnType<typeof setStatusAC>
export type SetISProfileFetchingActionType = ReturnType<typeof setIsProfileFetching>

export type ActionsType =
    AddPostActionType
    | UpdatePostTextActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | DeletePostActionType
    | SetISProfileFetchingActionType

const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi', likesCount: 0},
        {id: '2', message: 'How are you?', likesCount: 2},
        {id: '3', message: 'What are you doing?', likesCount: 14},
    ],
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
    status: '',
    isProfileFetching: false
}

export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message: action.post,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-PROFILE-FETCHING": {
            return {...state, isProfileFetching: action.isProfileFetching}
        }
        default:
            return state
    }
}

//action creators
export const addPost = (post: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        post
    } as const
}

export const deletePost = (id: string) => {
    return {
        type: 'DELETE-POST',
        id
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

export const setIsProfileFetching = (isProfileFetching: boolean) => {
    return {
        type: 'SET-PROFILE-FETCHING',
        isProfileFetching
    } as const
}

//thunk creators
export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    dispatch(setIsProfileFetching(true)) //
    const data = await profileApi.getUserProfile(userId)
    dispatch(setIsProfileFetching(false)) //
    dispatch(setUserProfile(data))
}

export const getProfileStatus = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileApi.getStatus(userId)
    dispatch(setStatusAC(res.data))
}

export const updateProfileStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileApi.updateStatus(status)
    dispatch(setStatusAC(status))
}