import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {PostType} from "../../../types";
import {AppRootStateType} from "../../../redux/redux-store";


type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (value: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export const PostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(Posts)