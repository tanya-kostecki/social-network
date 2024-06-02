import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import WithUrlDataProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";

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

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
            <Route path={'/profile/:userId?'}
                   render={() => <WithUrlDataProfileContainer />}/>
            <Route path={'/dialogs'}
                   render={() => <DialogsContainer />}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/login'} render={() => <Login/>}/>
        </div>
    );
}

export default App;
