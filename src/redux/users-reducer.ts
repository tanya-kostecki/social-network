import {UsersPageType, UserType} from "../types";

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
type FollowActionType = ReturnType<typeof follow>
type UnfollowActionType = ReturnType<typeof unfollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>

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
export const follow = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId,
    } as const
}

export const unfollow = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCount = (usersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        usersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
