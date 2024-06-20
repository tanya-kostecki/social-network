import {authApi} from "../api/api";
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";


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
        // case "SET-AUTH-USER-DATA": {
        //     return {...state, ...action.data, isAuth: true}
        // }
        case "SET-AUTH-USER-DATA": {
            return {...state, ...action.data, isAuth: action.isAuth}
        }
        default:
            return state
    }
}

//action creator
// export const setAuthUserData = (data: { id: number, email: string, login: string }) => {
//     return {
//         type: 'SET-AUTH-USER-DATA',
//         data: data
//     } as const
// }
export const setAuthUserData = (data: { id: number | null, email: string | null, login: string | null }, isAuth: boolean) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: data,
        isAuth
    } as const
}

//thunk creator
// export const getAuthMe = () => (dispatch: Dispatch) => {
//     authApi.setAuthMe()
//         .then(data => {
//             if (data.resultCode === 0) {
//                 let {id, email, login} = data.data;
//                 dispatch(setAuthUserData({id, email, login}));
//             }
//         })
// }

//thunk creator
type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    Action<string>
>

export const getAuthMe = () => (dispatch: Dispatch) => {
    authApi.setAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData({id, email, login}, true));
            }
        })
}


export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    const result = await authApi.login(email, password, rememberMe);
    if (result.data.resultCode === 0) {
        dispatch(getAuthMe());
    }
}

export const logout = (): AppThunk => async dispatch => {
    const result = await authApi.logout();
    if (result.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null}, true));
    }
}


// export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: Dispatch) => {
//     authApi.login(email, password, rememberMe)
//         .then(result => {
//             if (result.data.resultCode === 0) {
//                 dispatch(getAuthMe())
//             }
//         })
//
// }


