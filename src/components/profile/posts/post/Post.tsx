import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    message: string;
}
export const Post = ({ message }: PostPropsType) => {
    return (
        <div className={classes.post}>
            <img
                src={'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'}
                alt={'avatar'}/>
            <p className={classes.item}>{message}</p>
            <span>Like</span>
        </div>

    );
};
