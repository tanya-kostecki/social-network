import {rerenderEntireTree} from "../render";
import {DialogType, FriendType, MessageType, PostType} from "../App";
import {v1} from "uuid";

export type StateType = {

    profilePage: {
        posts: PostType[]
        newPostText: string
    }
    dialogsPage: {
        messages: MessageType[]
        newMessageText: string
        dialogs: DialogType[]
    }
    sidebar: {
        friends: FriendType[]
    }

}
export const state: StateType = {

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
        newMessageText: '', //
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

}

export const addPost = () => {
    const newPost = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updatePostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}

export const addMessage = () => {
    const newMessage = {
        id: v1(),
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}

export const updateMessageText = (messageText: string) => {
    state.dialogsPage.newMessageText = messageText
    rerenderEntireTree(state)
}