import React, {ChangeEvent, useState} from 'react';
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
    savePhoto: (photo: File) => void
    // savePhoto: (photo: File) => string
}
export const ProfileInfo = ({ profile, status, updateProfileStatus, isOwner, savePhoto }: ProfileInfoProps) => {
    const onImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    console.log(profile)



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
                        src={profile.photos.small || userPhoto}
                        alt={'avatar'}
                        className={classes.avatar}
                    />
                    {isOwner && <input type={'file'} onChange={onImageUpload}/>}
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
