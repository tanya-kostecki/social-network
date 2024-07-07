import React from 'react';
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {ProfileType} from "../../api/api";

type ProfileProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
    isOwner: boolean
}
export const Profile = ({profile, status, updateProfileStatus, isOwner}: ProfileProps) => {
    return (
        <main className='content'>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateProfileStatus={updateProfileStatus}/>
            <PostsContainer/>
        </main>
    );
};