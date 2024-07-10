import {v1} from "uuid";
import {ProfilePageType} from "../types";
import {profileApi, ProfileType} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

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
export type SetProfilePhotoType = ReturnType<typeof setProfilePhoto>
type SetEditModeActionType = ReturnType<typeof setEditMode>

export type ActionsType =
    AddPostActionType
    | UpdatePostTextActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | DeletePostActionType
    | SetISProfileFetchingActionType | SetProfilePhotoType | SetEditModeActionType


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
        aboutMe: '',
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
    editMode: false,
    isProfileFetching: false,
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
        //
        case "SET-PROFILE-FETCHING": {
            return {...state, isProfileFetching: action.isProfileFetching}
        }
        //
        case "SET-PROFILE-PHOTO": {
            return {
                ...state,
                profile: {...state.profile, photos: {...state.profile.photos, ...action.profilePhoto}}
            }
        }
        //
        case "SET-EDIT-MODE": {
            return {...state, editMode: action.editMode}
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

export const setProfilePhoto = (profilePhoto: { large: string, small: string }) => {
    return {
        type: 'SET-PROFILE-PHOTO',
        profilePhoto
    } as const
}
//
export const setEditMode = (editMode: boolean) => {
    return {
        type: 'SET-EDIT-MODE',
        editMode
    } as const
}

//thunk creators
export const getUserProfile = (userId: string): AppThunk => async (dispatch) => {
    dispatch(setIsProfileFetching(true)) //
    const data = await profileApi.getUserProfile(userId)
    dispatch(setIsProfileFetching(false)) //
    dispatch(setUserProfile(data))
}

export const getProfileStatus = (userId: string): AppThunk => async (dispatch) => {
    const res = await profileApi.getStatus(userId)
    dispatch(setStatusAC(res.data))
}

export const updateProfileStatus = (status: string): AppThunk => async (dispatch) => {
    const res = await profileApi.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export const savePhoto = (photo: File): AppThunk => async (dispatch) => {
    const res = await profileApi.savePhoto(photo)
    if (res.data.resultCode === 0) {
        console.log(res)
        dispatch(setProfilePhoto(res.data.data.photos))
    }
};

export const updateProfile = (profile: ProfileType): AppThunk => async (dispatch, getState) => {
    dispatch(setEditMode(true))
    const userId = getState().auth.id?.toString()
    const res = await profileApi.updateProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(userId!))
        dispatch(setEditMode(false))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}))
    }
}