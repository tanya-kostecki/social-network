import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemProps = {
    className: string;
    id: string;
    name: string
}
export const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={props.className}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}