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
    return (
        <main className='content'>
            Dialogs
            <div className={classes.dialogsContent}>
                <section className={classes.dialogs}>
                    <DialogItem className={classes.dialog + ' ' + classes.active} id={'1'} name={'Dimych'}/>
                    <DialogItem className={classes.dialog} id={'2'} name={'Andrey'}/>
                    <DialogItem className={classes.dialog} id={'3'} name={'Sveta'}/>
                    <DialogItem className={classes.dialog} id={'4'} name={'Sasha'}/>
                    <DialogItem className={classes.dialog} id={'5'} name={'Viktor'}/>
                    <DialogItem className={classes.dialog} id={'6'} name={'Valera'}/>
                    <DialogItem className={classes.dialog} id={'7'} name={'Igor'}/>
                </section>

                <section className={classes.messages}>
                    <Message message={'hi'}/>
                    <Message message={'How are you?'}/>
                    <Message message={'Hello'}/>
                </section>
            </div>
        </main>
    );
};
