import {UsersPageType, UserType} from "../types";
import {usersApi} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
}
type FollowActionType = ReturnType<typeof follow>
type UnfollowActionType = ReturnType<typeof unfollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type ToggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

export type ActionsType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType

const updateObjectInArray = (items: UserType[], id: number, followed: boolean) => {
    return items.map(i => i.id === id ? {...i, followed: followed} : i)
}

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, true)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, false)
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
        case "TOGGLE-FOLLOWING-PROGRESS": {
            return {
                ...state,
                isFollowingProgress: action.isFetching ? [...state.isFollowingProgress, action.id] : state.isFollowingProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

//action creators
export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId,
    } as const
}

export const unfollow = (userId: number) => {
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

export const toggleFollowingProgress = (isFetching: boolean, id: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        isFetching,
        id
    } as const
}

//thunk creators
type ApiMethodType = (userId: number) => Promise<{ resultCode: number }>;
const followUnfollowFlow = async (dispatch: Dispatch,
                                  userId: number,
                                  actionCreator: (userId: number) => FollowActionType | UnfollowActionType,
                                  apiMethod: ApiMethodType) => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const requestUsers = (currentPage: number, pageSize: number): ThunkAction<void, AppRootStateType, unknown, ActionsType> => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const unfollowUser = (userId: number) => async (dispatch: Dispatch) => {
    let actionCreator = unfollow
    let apiMethod = usersApi.unfollowUser.bind(usersApi)
    await followUnfollowFlow(dispatch, userId, actionCreator, apiMethod)
}

export const followUser = (userId: number) => async (dispatch: Dispatch) => {
    let actionCreator = follow
    let apiMethod = usersApi.followUser.bind(usersApi)
    await followUnfollowFlow(dispatch, userId, actionCreator, apiMethod)
}

