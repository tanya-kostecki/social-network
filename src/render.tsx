import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateType, updateMessageText, updatePostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText} addMessage={addMessage}
                 updateMessageText={updateMessageText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}