import * as React from 'react';
import {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusProps = {
    status: string
    updateProfileStatus: (status: string) => void
};

export const ProfileStatusWithHooks = (props: ProfileStatusProps) => {
    const [editMode, setEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState(props.status)

    useEffect(() => {
        setNewStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(newStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && <span onDoubleClick={activateEditMode}>{props.status}</span>}
            {editMode && <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={newStatus}/>}
        </div>
    );

    }
;