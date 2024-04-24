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
    state: {
        profilePage: {
            posts: PostType[]
            newPostText: string
        }
        dialogsPage: {
            messages: MessageType[]
            dialogs: DialogType[]
            newMessageText: string
        }
        sidebar: {
            friends: FriendType[]
        }
    },
    addPost: () => void
    updatePostText: (newPostText: string) => void
    addMessage: () => void
    updateMessageText: (messageText: string) => void
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
                   render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                          updatePostText={props.updatePostText}/>}/>
            <Route exact path={'/dialogs'}
                   render={() => <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage}
                                          updateMessageText={props.updateMessageText}/>}/>
        </div>
    );
}

export default App;
