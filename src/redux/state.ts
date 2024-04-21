export const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 0},
            {id: 2, message: 'How are you?', likesCount: 2},
            {id: 3, message: 'What are you doing?', likesCount: 14},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you?'}
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
}