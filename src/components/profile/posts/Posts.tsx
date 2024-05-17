import React, {ChangeEvent} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostType} from "../../../App";
import {ActionsType, addPostAC, updateNewPostTextAC} from "../../../redux/state";

type PostsProps = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const Posts = (props: PostsProps) => {
    const onClickHandler = () => {
        props.dispatch(addPostAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value!))
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div className={classes.newPost}>
                <textarea placeholder={'Add new post'} value={props.newPostText}
                          onChange={onChangeHandler}/>
                <button className={classes.button} onClick={onClickHandler}>Add</button>
            </div>
            <div className={classes.postsBlock}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};
