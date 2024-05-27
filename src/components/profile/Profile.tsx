import React from 'react';
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {ProfileType} from "../../types";

type ProfileProps = {
    profile: ProfileType
}
export const Profile = ({ profile }: ProfileProps) => {
    console.log(profile)
    return (
        <main className='content'>
            <ProfileInfo profile={profile}/>
            <PostsContainer />
        </main>
    );
};