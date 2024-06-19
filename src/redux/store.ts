import {DialogType, FriendType, MessageType, PostType} from "../App";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StateType = {
    profilePage: {
        posts: PostType[]
        newPostText: string
    },
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
        newMessageText: string
    },
    sidebar: {
        friends: FriendType[]
    }
}

export type StoreType = {
    _state: StateType
    dispatch: (action: ActionsType) => void
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-POST-TEXT',
    newPostText: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    message: string
}

export type ActionsType =
    AddPostActionType
    | UpdatePostTextActionType
    | AddMessageActionType