import React, {LegacyRef, useRef} from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostType} from "../../../App";
import {addPost} from "../../../redux/state";

type PostsProps = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}
export const Posts = (props: PostsProps) => {
    const newPostRef: LegacyRef<HTMLTextAreaElement> = useRef(null)
    const onClickHandler = () => {
        let text = newPostRef.current?.value
        if (text) {
            props.addPost(text.trim())
            newPostRef.current!.value = ''
        }
    }

    const onChangeHanlder = () => {

    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div className={classes.newPost}>
                <textarea placeholder={'Add new post'} ref={newPostRef} value={''} onChange={onChangeHanlder}/>
                <button className={classes.button} onClick={onClickHandler}>Add</button>
            </div>
            <div className={classes.postsBlock}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};
