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
            <Post message={'My first post'}/>
            <Post message={'Hello!'}/>
            <Post message={'How are you?'}/>
        </div>
    );
};
