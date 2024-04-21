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

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Route path={'/profile'} component={Profile}/>*/}
                {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>

                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route exact path={'/dialogs'} render={() => <Dialogs/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
