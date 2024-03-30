import React from 'react';
import classes from './Profile.module.css';

export const Profile = () => {
    return (
        <main className={classes.content}>
            <img
                src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                alt={'background'}
                className={classes.backgroundImg}
            />
            <div>
                avatar + description
            </div>
            <div>My posts
                <div className={classes.item}>New post</div>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </main>
    );
};