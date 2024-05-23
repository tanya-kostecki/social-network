import {UsersPageType, UserType} from "../types";

const initialState: UsersPageType = {
    users: [],
}
type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>

export type ActionsType = FollowActionType | UnfollowActionType | SetUsersActionType

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        // case "SET-USERS": {
        //     return {
        //         ...state, users: [...state.users, ...action.users]
        //     }
        // }
        case "SET-USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state
    }
}

//action creators
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId,
    } as const
}

export const unfollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
