import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {ComposedUserContainer} from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader"

const DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"))

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

type AppProps = {
    initializeApp: () => void
    isInitialized: boolean
}

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>

                <Route path={'/profile/:userId?'}
                       render={() => (
                           <React.Suspense fallback={<div>Loading...</div>}>
                               <ProfileContainer/>
                           </React.Suspense>
                       )}/>
                <Route path={'/dialogs'}
                       render={() => (
                           <React.Suspense fallback={<div>Loading...</div>}>
                               <DialogsContainer/>
                           </React.Suspense>
                       )}/>

                <Route path={'/users'} render={() => <ComposedUserContainer/>}/>
                <Route path={'/login'} render={() => <LoginContainer/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isInitialized: state.app.isInitialized
})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
;
