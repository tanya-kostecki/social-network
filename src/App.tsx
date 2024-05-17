import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {ActionsType, StateType} from "./redux/state";

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type FriendType = {
    id: number
    name: string
    avatar: string
}
type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
            <Route path={'/profile'}
                   render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path={'/dialogs'}
                   render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
        </div>
    );
}

export default App;
