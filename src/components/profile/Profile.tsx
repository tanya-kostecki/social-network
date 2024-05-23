import React from 'react';
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";

export const Profile = () => {
    return (
        <main className='content'>
            <ProfileInfo/>
            <PostsContainer />
        </main>
    );
};