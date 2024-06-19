import React from 'react';
import classes from "./Posts.module.css";
import { Post } from "./post/Post";
import { PostType } from "../../../App";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {required, validateMaxLength} from "../../../utils/validators/validators";
import {Textarea} from "../../common/form-controls/FormControls";

const validatePostField = validateMaxLength(15)

type PostsProps = {
    posts: PostType[]
    addPost: (newPostText: string) => void
}

export const Posts = (props: PostsProps) => {
    const onSubmit = (formData: PostFormDataType) => {
        props.addPost(formData.post);
        console.log(formData)
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <ReduxPostForm onSubmit={onSubmit} />
            <div className={classes.postsBlock}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)}
            </div>
        </div>
    );
};

type PostFormDataType = {
    post: string;
};

const PostForm = (props: InjectedFormProps<PostFormDataType>) => {
    return (
        <form className={classes.newPost} onSubmit={props.handleSubmit}>
            <Field placeholder={'Add new post'} name={'post'} component={Textarea} validate={[required, validatePostField]}/>
            <button className={classes.button}>Add</button>
        </form>
    );
}

const ReduxPostForm = reduxForm<PostFormDataType>({ form: 'post' })(PostForm);
