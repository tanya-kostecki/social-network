import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostType} from "../../App";

type ProfileProps = {
    state: {
        posts: PostType[]
    }
    addPost: (postMessage: string) => void
}
export const Profile = (props: ProfileProps) => {
    return (
        <main className='content'>
            <ProfileInfo/>
            <Posts posts={props.state.posts} addPost={props.addPost}/>
        </main>
    );
};