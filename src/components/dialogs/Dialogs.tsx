import React, {LegacyRef, useRef} from 'react';
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
    updateMessageText: (messageText: string) => void
}
export const Dialogs = (props: DialogsProps) => {
    const sendMessageRef: LegacyRef<HTMLTextAreaElement> = useRef(null)
    const onClickHandler = () => {
        props.addMessage()
    }

    const onChangeHandler = () => {
        let text = sendMessageRef.current?.value
        props.updateMessageText(text!)
    }
    return (
        <main className='content'>
            Dialogs
            <div className={classes.dialogsContent}>
                <section className={classes.dialogs}>
                    {props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} className={classes.dialog} id={dialog.id}
                                                               name={dialog.name}/>)}
                </section>

                <section className={classes.messages}>
                    {props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)}
                    <textarea ref={sendMessageRef} value={props.dialogsPage.newMessageText} onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>Send</button>
                </section>
            </div>
        </main>
    );
};
