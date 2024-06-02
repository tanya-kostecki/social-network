import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type ProfilePropsType = {
    profile: ProfileType
    getUserProfile: (userId: string) => void
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
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileType
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const WithUrlDataProfileContainer = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, { getUserProfile })(WithUrlDataProfileContainer)


