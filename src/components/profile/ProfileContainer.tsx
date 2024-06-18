import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfilePropsType = {
    profile: ProfileType
    getUserProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus: (status: string) => void
    status: string
}

type PathParamsType = {
    userId: string
}

type ProfileContainerProps = ProfilePropsType & RouteComponentProps<PathParamsType>;

export class ProfileContainer extends React.Component <ProfileContainerProps> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '31143'
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}/>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// const WithUrlDataProfileContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataProfileContainer)

export const ComposedProfileContainer= compose<ComponentType>(connect(mapStateToProps, { getUserProfile, getProfileStatus, updateProfileStatus }), withRouter, withAuthRedirect)(ProfileContainer)
