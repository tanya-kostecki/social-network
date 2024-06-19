import React from 'react';
import classes from './Dialogs.module.css';
import { DialogItem } from './dialog-item/DialogItem';
import { Message } from "./message/Message";
import { DialogsPageType } from "../../types";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

export type DialogsProps = {
    dialogsPage: DialogsPageType;
    addMessage: (message: string) => void;
    isAuth: boolean;
};

export const Dialogs = (props: DialogsProps) => {
    const onSubmit = (formData: DialogFormDataType) => {
        props.addMessage(formData.message);
        console.log(formData)
    };

    return (
        <main className='content'>
            Dialogs
            <div className={classes.dialogsContent}>
                <section className={classes.dialogs}>
                    {props.dialogsPage.dialogs.map((dialog) => (
                        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                    ))}
                </section>
                <section className={classes.messages}>
                    {props.dialogsPage.messages.map((m) => (
                        <Message key={m.id} message={m.message} />
                    ))}
                    <ReduxDialogForm onSubmit={onSubmit} />
                </section>
            </div>
        </main>
    );
};

type DialogFormDataType = {
    message: string;
};

const DialogForm = (props: InjectedFormProps<DialogFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="message"
                component="textarea"
                placeholder="Enter your message"
            />
            <button type="submit">Send</button>
        </form>
    );
};

const ReduxDialogForm = reduxForm<DialogFormDataType>({ form: 'dialog' })(DialogForm);
