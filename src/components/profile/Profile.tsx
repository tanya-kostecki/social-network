import React from 'react';
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostsContainer} from "./posts/PostsContainer";
import {Store} from "redux";

type ProfileProps = {
    // profilePage: {
    //     posts: PostType[]
    //     newPostText: string
    // }
    // dispatch: (action: ActionsType) => void
    // addPost: () => void
    // updateNewPost: (newText: string) => void


    store: Store
}
export const Profile = () => {
    return (
        <main className='content'>
            <ProfileInfo/>
            <PostsContainer />
            {/*<Posts posts={props.profilePage.posts} dispatch={props.dispatch}*/}
            {/*       newPostText={props.profilePage.newPostText}/>*/}
            {/*<Posts posts={props.profilePage.posts} addPost={props.addPost} updateNewPost={props.updateNewPost}*/}
            {/*       newPostText={props.profilePage.newPostText}/>*/}
        </main>
    );
};