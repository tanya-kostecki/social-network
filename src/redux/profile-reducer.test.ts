import React from "react";
import {addPost, deletePost, profileReducer} from "./profile-reducer";
import {ProfilePageType} from "../types";

let initialState: ProfilePageType
beforeEach(() => {
    initialState = {
        posts: [
            {id: '1', message: 'Hi', likesCount: 0},
            {id: '2', message: 'How are you?', likesCount: 2},
            {id: '3', message: 'What are you doing?', likesCount: 14},
        ],
        profile: {
            userId: 0,
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            },
            photos: {
                small: '',
                large: ''
            }
        },
        status: '',
        isProfileFetching: false
    }
})

it('it should add a new post', () => {
    let action = addPost('Hello, World!')
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[0].message).toBe('Hello, World!')
})

it('it should delete a post', () => {
    let action = deletePost('1')
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(2)
    expect(newState.posts[0].message).toBe('How are you?')
})

it('it should not delete a post if is is incorrect', () => {
    let action = deletePost('10')
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
})