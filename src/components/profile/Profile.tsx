import React from 'react';
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {ProfileType} from "../../api/api";
import classes from "./profile-info/ProfileInfo.module.css";

type ProfileProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    updateProfile: (profile: ProfileType) => void
    editMode: boolean
    // updateProfile: (profile: ProfileType) => Promise<any>
}
export const Profile = ({profile, status, updateProfileStatus, isOwner, savePhoto, updateProfile, editMode}: ProfileProps) => {
    return (
        <main className='content'>
            <img
                src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                alt={'background'}
                className={classes.backgroundImg}
            />
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateProfileStatus={updateProfileStatus}
                         savePhoto={savePhoto} updateProfile={updateProfile} editMode={editMode}/>
            <PostsContainer/>
        </main>
    );
};