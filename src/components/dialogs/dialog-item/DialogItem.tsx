import {NavLink} from "react-router-dom";
import React from "react";
import styles from '../Dialogs.module.css'

type DialogItemProps = {
    id: string;
    name: string
}
export const DialogItem = (props: DialogItemProps) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`} className={styles.dialog}
                     activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}