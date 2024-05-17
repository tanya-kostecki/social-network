import {ActionsType, AddPostActionType, UpdatePostTextActionType} from "./store";
import {v1} from "uuid";

const initialState = {
    posts: [
        {id: '1', message: 'Hi', likesCount: 0},
        {id: '2', message: 'How are you?', likesCount: 2},
        {id: '3', message: 'What are you doing?', likesCount: 14},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message:state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE-POST-TEXT': {
            state.newPostText = action.newPostText
            return state
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