import React from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";

export const Posts = () => {
    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder={'Add new post'}></textarea>
                <button className={classes.button}>Add</button>
            </div>
            <div className={classes.postsBlock}>
                <Post message={'My first post'} likesCount={0}/>
                <Post message={'Hello!'} likesCount={2}/>
                <Post message={'How are you?'} likesCount={14}/>
            </div>
        </div>
    );
};
