import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
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

type AppProps = {
    state: {
        profilePage: {
            posts: PostType[]
        }
        dialogsPage: {
            messages: MessageType[]
            dialogs: DialogType[]
        }
    }
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/profile'}
                       render={() => <Profile state={props.state.profilePage}/>}/>
                <Route exact path={'/dialogs'}
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
