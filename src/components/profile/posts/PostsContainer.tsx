import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {PostType} from "../../../types";
import {AppRootStateType} from "../../../redux/redux-store";


type MapStateToPropsType =  {
    posts: PostType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPost: (value: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPost: (value: string) => {
            dispatch(updateNewPostTextAC(value))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)