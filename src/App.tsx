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
import {Store} from "redux";
import {addPostAC, updateNewPostTextAC} from "./redux/profile-reducer";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

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
    store: Store
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
                   render={() => <Profile store={props.store}/>}/>
            <Route path={'/dialogs'}
                   render={() => <DialogsContainer store={props.store}/>}/>

            {/*<Route path={'/profile'}*/}
            {/*       render={() => <Profile profilePage={state.profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>*/}

            {/*<Route path={'/profile'}*/}
            {/*       render={() => <Profile profilePage={state.profilePage} addPost={addPost}*/}
            {/*                              updateNewPost={updateNewPost}/>}/>*/}
            {/*<Route path={'/dialogs'}*/}
            {/*       render={() => <Dialogs dialogsPage={state.dialogsPage}*/}
            {/*                              dispatch={props.store.dispatch.bind(props.store)}/>}/>*/}
        </div>
    );
}

export default App;
