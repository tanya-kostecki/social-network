import {addPost} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {PostType} from "../../../types";
import {AppRootStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: PostType[]
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

export const PostsContainer = connect(mapStateToProps, {
    addPost
})(Posts)