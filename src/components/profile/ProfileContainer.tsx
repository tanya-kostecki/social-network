import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfilePropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

type PathParamsType = {
    userId: string
}

type ProfileContainerProps = ProfilePropsType & RouteComponentProps<PathParamsType>;

export class ProfileContainer extends React.Component <ProfileContainerProps, ProfileType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
                console.log(res.data)
            })
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
    profile: state.profilePage.profile
})

const WithUrlDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile })(WithUrlDataProfileContainer)


