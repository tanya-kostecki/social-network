import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostType} from "../../App";
import {ActionsType} from "../../redux/state";

type ProfileProps = {
    profilePage: {
        posts: PostType[]
        newPostText: string
    }
    dispatch: (action: ActionsType) => void
}
export const Profile = (props: ProfileProps) => {
    return (
        <main className='content'>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts} dispatch={props.dispatch}
                   newPostText={props.profilePage.newPostText}/>
        </main>
    );
};