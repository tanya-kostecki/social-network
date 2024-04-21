import React from 'react';
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        < >
            <img
                src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                alt={'background'}
                className={classes.backgroundImg}
            />
            <div className={classes.descriptionBlock}>
                avatar + description
            </div>
        </>
    );
};
