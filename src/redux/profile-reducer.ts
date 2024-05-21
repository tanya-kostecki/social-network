import {ActionsType, AddPostActionType, UpdatePostTextActionType} from "./store";
import {v1} from "uuid";
import {ProfilePageType} from "../types";

const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi', likesCount: 0},
        {id: '2', message: 'How are you?', likesCount: 2},
        {id: '3', message: 'What are you doing?', likesCount: 14},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message:state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: '' }
        }
        case 'UPDATE-POST-TEXT': {
            return {...state, newPostText: action.newPostText}
        }
        default:
            return state
    }
}

//action creators
export const addPostAC = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextAC = (text: string): UpdatePostTextActionType => {
    return {
        type: 'UPDATE-POST-TEXT',
        newPostText: text
    } as const
}