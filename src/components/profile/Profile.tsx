import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./posts/profile-info/ProfileInfo";

export const Profile = () => {
    return (
        <main className='content'>
            <ProfileInfo/>
            <Posts/>
        </main>
    );
};