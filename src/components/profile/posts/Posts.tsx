import React from 'react';
import classes from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostType} from "../../../App";

type PostsProps = {
   posts: PostType[]
}
export const Posts = (props: PostsProps) => {

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder={'Add new post'}></textarea>
                <button className={classes.button}>Add</button>
            </div>
            <div className={classes.postsBlock}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};
