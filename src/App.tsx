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
import {ActionsType, StateType, store, StoreType} from "./redux/state";

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
    store: StoreType
}

function App(props: AppPropsType) {
    const state = props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={state.sidebar}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
            <Route path={'/profile'}
                   render={() => <Profile profilePage={state.profilePage} dispatch={props.store.dispatch.bind(store)}/>}/>
            <Route path={'/dialogs'}
                   render={() => <Dialogs dialogsPage={state.dialogsPage} dispatch={props.store.dispatch.bind(store)}/>}/>
        </div>
    );
}

export default App;
