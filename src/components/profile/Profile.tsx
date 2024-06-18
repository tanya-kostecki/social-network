import React from 'react';
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {ProfileType, UserType} from "../../types";

type ProfileProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
}
export const Profile = ({ profile, status, updateProfileStatus }: ProfileProps) => {
    return (
        <main className='content'>
            <ProfileInfo profile={profile} status={status} updateProfileStatus={updateProfileStatus}/>
            <PostsContainer />
        </main>
    );
};