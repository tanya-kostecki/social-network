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
    type: 'ADD-MESSAGE'
}
export type UpdateMessageTextActionType = {
    type: 'UPDATE-MESSAGE',
    messageText: string
}
export type ActionsType =
    AddPostActionType
    | UpdatePostTextActionType
    | AddMessageActionType
    | UpdateMessageTextActionType

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: '1', message: 'Hi', likesCount: 0},
//                 {id: '2', message: 'How are you?', likesCount: 2},
//                 {id: '3', message: 'What are you doing?', likesCount: 14},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             messages: [
//                 {id: '1', message: 'Hi'},
//                 {id: '2', message: 'Hello'},
//                 {id: '3', message: 'How are you?'}
//             ],
//             newMessageText: '',
//             dialogs: [
//                 {id: '1', name: 'Dimych'},
//                 {id: '2', name: 'Andrey'},
//                 {id: '3', name: 'Sveta'},
//                 {id: '4', name: 'Sasha'},
//                 {id: '5', name: 'Viktor'},
//                 {id: '6', name: 'Valera'},
//                 {id: '7', name: 'Igor'},
//             ],
//         },
//         sidebar: {
//             friends: [
//                 {
//                     id: 1,
//                     name: 'Sveta',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6JT6tYTm1-OGzcVBgpJwMQs7zyW67sw_X5X3pFxf2w&s'
//                 },
//                 {
//                     id: 2,
//                     name: 'Philipp',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6JT6tYTm1-OGzcVBgpJwMQs7zyW67sw_X5X3pFxf2w&s'
//                 },
//                 {
//                     id: 3,
//                     name: 'Katja',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6JT6tYTm1-OGzcVBgpJwMQs7zyW67sw_X5X3pFxf2w&s'
//                 }
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//         console.log('state is changed')
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: ActionsType) {
//         profileReducer(this._state.profilePage, action)
//         dialogsReducer(this._state.dialogsPage, action)
//         sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber()
//
//     }
// }
// //@ts-ignore
// window.store = store