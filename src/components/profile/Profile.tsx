import React from 'react';
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {ProfileType} from "../../api/api";

type ProfileProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    // savePhoto: (photo: File) => string
}
export const Profile = ({profile, status, updateProfileStatus, isOwner, savePhoto}: ProfileProps) => {
    return (
        <main className='content'>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateProfileStatus={updateProfileStatus}
                         savePhoto={savePhoto}/>
            <PostsContainer/>
        </main>
    );
};