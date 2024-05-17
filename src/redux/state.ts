import {DialogType, FriendType, MessageType, PostType} from "../App";
import {v1} from "uuid";

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
type UpdatePostTextActionType = {
    type: 'UPDATE-POST-TEXT',
    newPostText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateMessageTextActionType = {
    type: 'UPDATE-MESSAGE',
    messageText: string
}
export type ActionsType =
    AddPostActionType
    | UpdatePostTextActionType
    | AddMessageActionType
    | UpdateMessageTextActionType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi', likesCount: 0},
                {id: '2', message: 'How are you?', likesCount: 2},
                {id: '3', message: 'What are you doing?', likesCount: 14},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Hello'},
                {id: '3', message: 'How are you?'}
            ],
            newMessageText: '',
            dialogs: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Sasha'},
                {id: '5', name: 'Viktor'},
                {id: '6', name: 'Valera'},
                {id: '7', name: 'Igor'},
            ],
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Sveta',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6JT6tYTm1-OGzcVBgpJwMQs7zyW67sw_X5X3pFxf2w&s'
                },
                {
                    id: 2,
                    name: 'Philipp',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6JT6tYTm1-OGzcVBgpJwMQs7zyW67sw_X5X3pFxf2w&s'
                },
                {
                    id: 3,
                    name: 'Katja',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6JT6tYTm1-OGzcVBgpJwMQs7zyW67sw_X5X3pFxf2w&s'
                }
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        switch (action.type) {
            case 'ADD-POST': {
                const newPost = {
                    id: v1(),
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()

                break
            }
            case 'UPDATE-POST-TEXT': {
                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber()

                break
            }
            case 'ADD-MESSAGE': {
                const newMessage = {
                    id: v1(),
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber()

                break
            }
            case 'UPDATE-MESSAGE': {
                this._state.dialogsPage.newMessageText = action.messageText
                this._callSubscriber()

                break
            }
            default:
                return this._state

        }
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

export const addMessageAC = (): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const updateMessageAC = (messageText: string): UpdateMessageTextActionType => {
    return {
        type: 'UPDATE-MESSAGE',
        messageText
    } as const
}

//@ts-ignore
window.store = store