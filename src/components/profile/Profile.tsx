import React from 'react';
import classes from './Profile.module.css';
import {Posts} from "./posts/Posts";

export const Profile = () => {
    return (
        <main className='content'>
            <img
                src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                alt={'background'}
                className={classes.backgroundImg}
            />
            <div>
                avatar + description
            </div>
           <Posts/>
        </main>
    );
};