import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    className: string;
    id: string;
    name: string
}
const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={props.className}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessageProps = {
    message: string
}
const Message = (props: MessageProps) => {
    return <div className={classes.message}>{props.message}</div>
}

export const Dialogs = () => {
    const dialogsData = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'},
        {id: '7', name: 'Igor'},
    ]

    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'}
    ]
    return (
        <main className='content'>
            Dialogs
            <div className={classes.dialogsContent}>
                <section className={classes.dialogs}>
                    {dialogsData.map((dialog) => <DialogItem className={classes.dialog} id={dialog.id}
                                                             name={dialog.name}/>)}
                </section>

                <section className={classes.messages}>
                    {messages.map(m => <Message key={m.id} message={m.message}/>) }
                </section>
            </div>
        </main>
    );
};
