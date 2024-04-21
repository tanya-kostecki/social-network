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
                {/*avatar + description*/}
                <img
                    src={'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'}
                    alt={'avatar'}
                    className={classes.avatar}
                />
                <div>
                    <span className={classes.descriptionSpan}>Tatiana Kostecki</span>
                    <span className={classes.descriptionSpan}>University of Vienna' 23</span>
                    <span className={classes.descriptionSpan}>email@example.com</span>
                    <span className={classes.descriptionSpan}>Austria</span>
                </div>
            </div>
        </>
    );
};
