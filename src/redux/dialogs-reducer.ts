import {v1} from "uuid";
import {DialogsPageType} from "../types";

const initialState: DialogsPageType = {
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Hello'},
        {id: '3', message: 'How are you?'}
    ],
    dialogs: [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'},
        {id: '7', name: 'Igor'},
    ],
}

export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = {
                id: v1(),
                message: action.message
            }
            return {...state, messages: [...state.messages, newMessage] }
        }
        default:
            return state
    }
}

//action creators
export const addMessageAC = (message: string): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE',
        message
    } as const
}

export type ActionsType = AddMessageActionType
export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    message: string
}