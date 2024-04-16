import React from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";

export const Posts = () => {
    const postsData = [
        {id: 1, message: 'Hi', likesCount: 0},
        {id: 2, message: 'How are you?', likesCount: 2},
        {id: 3, message: 'What are you doing?', likesCount: 14},
    ]

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder={'Add new post'}></textarea>
                <button className={classes.button}>Add</button>
            </div>
            <div className={classes.postsBlock}>
                {postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};
