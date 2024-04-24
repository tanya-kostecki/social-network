import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostType} from "../../App";

type ProfileProps = {
    profilePage: {
        posts: PostType[]
        newPostText: string
    }
    addPost: () => void
    updatePostText: (newPostText: string) => void
}
export const Profile = (props: ProfileProps) => {
    return (
        <main className='content'>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText}
                   updatePostText={props.updatePostText}/>
        </main>
    );
};