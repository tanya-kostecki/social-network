import {AnyAction, Dispatch} from "redux";
import {getAuthMe} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppDispatch, AppRootStateType, AppThunk} from "./redux-store";

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
export const initializeApp = () => async (dispatch: AppDispatch) => {
    dispatch(getAuthMe()).then(() => dispatch(initializationSuccess()))

}





