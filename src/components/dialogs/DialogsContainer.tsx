import React from 'react';
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {Store} from "redux";
import {Dialogs} from "./Dialogs";


type DialogsContainerProps = {
    store: Store
}
export const DialogsContainer = (props: DialogsContainerProps) => {
    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const updateMessage = (message: string) => {
        props.store.dispatch(updateMessageAC(message))
    }

    return (
        <Dialogs dialogsPage={props.store.getState().dialogsPage} addMessage={addMessage}
                 updateMessage={updateMessage}/>
    )
};
