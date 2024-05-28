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
            return {...state, ...action.data, isAuth: true}
        }
        default: return state
    }
}

export const setAuthUserData = (data: {id: number, email: string, login: string}) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: data
    } as const
}