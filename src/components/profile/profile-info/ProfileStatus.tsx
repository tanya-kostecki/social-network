import * as React from 'react';
import {ChangeEvent} from "react";

type ProfileStatusProps = {
    status: string
    updateProfileStatus: (status: string) => void
};

type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
    state: StateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    onChangeStatusHandler(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span> :
                    <input onChange={this.onChangeStatusHandler.bind(this)} autoFocus
                           onBlur={this.deactivateEditMode.bind(this)}
                           value={this.state.status}/>}
            </div>
        );
    }
};