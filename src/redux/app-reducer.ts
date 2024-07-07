import {AnyAction} from "redux";
import {getAuthMe} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./redux-store";

type InitialStateType = {
    isInitialized: boolean
}
const initialState: InitialStateType = {
    isInitialized: false
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZATION-SUCCESS": {
            return {...state, isInitialized: true}
        }
        default:
            return state
    }
}

type InitializationSuccessActionType = ReturnType<typeof initializationSuccess>
type ActionsType = InitializationSuccessActionType
//action creator
export const initializationSuccess = () => ({type: 'INITIALIZATION-SUCCESS'} as const)


//thunk creator
export const initializeApp = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, AnyAction>) => {
    dispatch(getAuthMe()).then(() => dispatch(initializationSuccess()))
}





