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
        const text = newPostRef.current?.value
        // alert(text)
        if (text) props.addPost(text.trim())
    }

    console.log(props.posts)

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div className={classes.newPost}>
                <textarea placeholder={'Add new post'} ref={newPostRef}/>
                <button className={classes.button} onClick={onClickHandler}>Add</button>
            </div>
            <div className={classes.postsBlock}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};
