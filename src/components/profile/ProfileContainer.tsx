import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type ProfilePropsType = {
    profile: ProfileType
    getUserProfile: (userId: string) => void
    isAuth: boolean
}

type PathParamsType = {
    userId: string
}

type ProfileContainerProps = ProfilePropsType & RouteComponentProps<PathParamsType>;

export class ProfileContainer extends React.Component <ProfileContainerProps> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithUrlDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, { getUserProfile })(WithUrlDataProfileContainer)

