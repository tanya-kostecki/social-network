import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType, UserType} from "../../../types";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
}
export const ProfileInfo = ({ profile, status, updateProfileStatus }: ProfileInfoProps) => {
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
                    <ProfileStatus status={status} updateProfileStatus={updateProfileStatus}/>
                </div>
            </div>
        </>
    );
};
