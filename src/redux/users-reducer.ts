import {UsersPageType, UserType} from "../types";

const initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>

export type ActionsType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType

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
        case "SET-USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.usersCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        usersCount
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
