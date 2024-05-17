import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './dialog-item/DialogItem';
import {Message} from "./message/Message";
import {DialogType, MessageType} from "../../App";
import {ActionsType, addMessageAC, updateMessageAC} from "../../redux/state";


type DialogsProps = {
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
        newMessageText: string
    }
    dispatch: (action: ActionsType) => void
}
export const Dialogs = (props: DialogsProps) => {
    const onClickHandler = () => {
        props.dispatch(addMessageAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageAC(e.currentTarget.value!))
    }
    return (
        <main className='content'>
            Dialogs
            <div className={classes.dialogsContent}>
                <section className={classes.dialogs}>
                    {props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id}
                                                               name={dialog.name}/>)}
                </section>

                <section className={classes.messages}>
                    {props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)}
                    <textarea value={props.dialogsPage.newMessageText} onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>Send</button>
                </section>
            </div>
        </main>
    );
};
