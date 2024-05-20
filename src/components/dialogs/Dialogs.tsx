import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './dialog-item/DialogItem';
import {Message} from "./message/Message";
import {DialogType, MessageType} from "../../App";

type DialogsProps = {
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
        newMessageText: string
    }
    addMessage: () => void
    updateMessage: (value: string) => void

}
export const Dialogs = (props: DialogsProps) => {
    const addMessageHandler = () => {
        props.addMessage()
    }

    const updateMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(e.currentTarget.value!)
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
                    <textarea value={props.dialogsPage.newMessageText} onChange={updateMessageHandler}/>
                    <button onClick={addMessageHandler}>Send</button>
                </section>
            </div>
        </main>
    );
};
