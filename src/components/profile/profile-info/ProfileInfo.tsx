import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {ProfileType} from "../../../api/api";

type ProfileInfoProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
    isOwner: boolean
}
export const ProfileInfo = ({ profile, status, updateProfileStatus, isOwner }: ProfileInfoProps) => {
    return (
        !profile ? <Preloader/> :
        < >
            <img
                src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                alt={'background'}
                className={classes.backgroundImg}
            />
            <div className={classes.descriptionBlock}>
                <div>
                    <img
                        src={profile.photos.large || userPhoto}
                        alt={'avatar'}
                        className={classes.avatar}
                    />
                    {isOwner && <input type={'file'}/>}
                </div>
                <div>
                    <span className={classes.descriptionSpan}>{profile.fullName}</span>
                    <span className={classes.descriptionSpan}>{profile.lookingForAJobDescription}</span>
                    <span className={classes.descriptionSpan}>{profile.contacts.facebook}</span>
                    {/*<ProfileStatus status={status} updateProfileStatus={updateProfileStatus}/>*/}
                    <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus}/>
                </div>
            </div>
        </>
    );
};
