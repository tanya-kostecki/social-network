import React from 'react';
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DialogsPageType} from "../../types";

type MapStateToPropsType =  {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    addMessage: () => void
    updateMessage: (message: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessage: (message: string) => {
            dispatch(updateMessageAC(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

