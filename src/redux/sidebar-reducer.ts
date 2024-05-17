import {ActionsType} from "./store";

const initialState = {
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
export const sidebarReducer = (state = initialState, action: ActionsType) => {
    return state
}