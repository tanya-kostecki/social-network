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

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type FriendType = {
    id: number
    name: string
    avatar: string
}

type AppPropsType = {
    state: {
        profilePage: {
            posts: PostType[]
        }
        dialogsPage: {
            messages: MessageType[]
            dialogs: DialogType[]
        }
        sidebar: {
            friends: FriendType[]
        }
    },
    addPost: (postMessage: string) => void
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
                   render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
            <Route exact path={'/dialogs'}
                   render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        </div>
    );
}

export default App;
