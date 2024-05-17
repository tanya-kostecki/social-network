import React, {LegacyRef, useRef} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostType} from "../../../App";
import {ActionsType} from "../../../redux/state";


type PostsProps = {
    posts: PostType[]
    newPostText: string
    // addPost: () => void
    // updatePostText: (newPostText: string) => void
    dispatch: (action: ActionsType) => void
}
export const Posts = (props: PostsProps) => {
    const newPostRef: LegacyRef<HTMLTextAreaElement> = useRef(null)
    const onClickHandler = () => {
        // props.addPost()
        props.dispatch({ type: 'ADD-POST' })
    }

    const onChangeHandler = () => {
        let text = newPostRef.current?.value
        // props.updatePostText(text!)
        props.dispatch({ type: 'UPDATE-POST-TEXT', newPostText: text!})
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div className={classes.newPost}>
                <textarea placeholder={'Add new post'} ref={newPostRef} value={props.newPostText}
                          onChange={onChangeHandler}/>
                <button className={classes.button} onClick={onClickHandler}>Add</button>
            </div>
            <div className={classes.postsBlock}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};
