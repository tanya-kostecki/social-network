import {authApi, securityApi} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";


type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    // captcha: null | string
    captcha: {
        url: string | null
    }
}
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    // captcha: null
    captcha: {
        url: null
    }
}

type SetUserActionType = ReturnType<typeof setAuthUserData>
type SetCaptchaUrlActionType = ReturnType<typeof setCaptchaUrl>
type ActionsType = SetUserActionType | SetCaptchaUrlActionType

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA": {
            return {...state, ...action.data}
        }
        case "SET-CAPTCHA-URL": {
            return {...state, captcha: {...state.captcha, url: action.url}}
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

export const setCaptchaUrl = (url: string | null) => {
    return {
        type: 'SET-CAPTCHA-URL',
        url
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

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    const res = await securityApi.getCaptcha()
    dispatch(setCaptchaUrl(res.data.url))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null ): AppThunk => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        await dispatch(getAuthMe())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
    }
}