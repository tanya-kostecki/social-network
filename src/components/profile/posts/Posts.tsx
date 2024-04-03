import React from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";

export const Posts = () => {
    return (
        <div className={classes.posts}>My posts
            <div>
                <textarea placeholder={'Add new post'}></textarea>
                <button>Add</button>
            </div>
            <Post message={'My first post'} likesCount={0}/>
            <Post message={'Hello!'} likesCount={2}/>
            <Post message={'How are you?'} likesCount={14}/>
        </div>
    );
};
