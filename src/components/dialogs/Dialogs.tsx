import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './dialog-item/DialogItem';
import {Message} from "./message/Message";
import {DialogType, MessageType} from "../../App";


type DialogsProps = {
    state: {
        dialogs: DialogType[]
        messages: MessageType[]
    }
}
export const Dialogs = (props: DialogsProps) => {
    return (
        <main className='content'>
            Dialogs
            <div className={classes.dialogsContent}>
                <section className={classes.dialogs}>
                    {props.state.dialogs.map((dialog) => <DialogItem className={classes.dialog} id={dialog.id}
                                                               name={dialog.name}/>)}
                </section>

                <section className={classes.messages}>
                    {props.state.messages.map(m => <Message key={m.id} message={m.message}/>)}
                </section>
            </div>
        </main>
    );
};
