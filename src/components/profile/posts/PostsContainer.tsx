import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {Store} from "redux";

type PostsContainerProps = {
    store: Store
}

export const PostsContainer = (props: PostsContainerProps) => {
    const addPostHandler = () => {
        props.store.dispatch(addPostAC())
    }

    const updateNewPostHandler = (value: string) => {
        props.store.dispatch(updateNewPostTextAC(value))
    }

    return (
        <Posts posts={props.store.getState().profilePage.posts}
               newPostText={props.store.getState().profilePage.newPostText} updateNewPost={updateNewPostHandler}
               addPost={addPostHandler}/>
    );
};