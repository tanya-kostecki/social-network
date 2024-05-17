import './index.css';
import ReactDOM from 'react-dom';
import App, {DialogType, FriendType, MessageType, PostType} from './App';
import {StateType, store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
            {/*<App state={store.getState()} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}*/}
            {/*     addMessage={store.addMessage.bind(store)}*/}
            {/*     updateMessageText={store.updateMessageText.bind(store)}/>*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()))

// rerenderEntireTree()
// store.subscribe(rerenderEntireTree)