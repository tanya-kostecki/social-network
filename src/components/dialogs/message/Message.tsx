import React from "react";
import classes from '../Dialogs.module.css'

type MessageProps = {
    message: string
}
export const Message = (props: MessageProps) => {
    return <div className={classes.message}>{props.message}</div>
}