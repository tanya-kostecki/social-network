import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../types";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoProps = {
    profile: ProfileType
}
export const ProfileInfo = ({ profile }: ProfileInfoProps) => {
    return (
        !profile ? <Preloader/> :
        < >
            <img
                src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                alt={'background'}
                className={classes.backgroundImg}
            />
            <div className={classes.descriptionBlock}>
                <img
                    src={profile.photos.large}
                    alt={'avatar'}
                    className={classes.avatar}
                />
                <div>
                    <span className={classes.descriptionSpan}>{profile.fullName}</span>
                    <span className={classes.descriptionSpan}>{profile.lookingForAJobDescription}</span>
                    <span className={classes.descriptionSpan}>{profile.contacts.facebook}</span>
                    <span className={classes.descriptionSpan}>Austria</span>
                </div>
            </div>
        </>
    );
};
