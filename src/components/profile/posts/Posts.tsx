import React, {ChangeEvent} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostType} from "../../../App";

type PostsProps = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Posts = (props: PostsProps) => {
    const addPostHandler = () => {
        props.addPost()
    }

    const updateNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value!)
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div className={classes.newPost}>
                <textarea placeholder={'Add new post'} value={props.newPostText}
                          onChange={updateNewPostHandler}/>
                <button className={classes.button} onClick={addPostHandler}>Add</button>
            </div>
            <div className={classes.postsBlock}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};
