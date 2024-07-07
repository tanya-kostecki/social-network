import {authApi} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";


type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

type SetUserActionType = ReturnType<typeof setAuthUserData>

export const authReducer = (state = initialState, action: SetUserActionType): InitialStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA": {
            return {...state, ...action.data}
        }
        default:
            return state
    }
}

//action creator
export const setAuthUserData = (data: {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: data,
    } as const
}


//thunk creator
export const getAuthMe = () => async (dispatch: Dispatch) => {
    const data = await authApi.setAuthMe()
    if (data.resultCode === 0) {
        // let {id, email, login, isAuth} = data.data;
        let {id, email, login} = data.data;
        dispatch(setAuthUserData({id, email, login, isAuth: true}));
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<AppRootStateType, unknown, AnyAction>) => {
    const response = await authApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        await dispatch(getAuthMe())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: ThunkDispatch<AppRootStateType, unknown, AnyAction>) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
    }
}