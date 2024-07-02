import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followUser, requestUsers,
    setCurrentPage,
    unfollowUser
} from "../../redux/users-reducer";
import {UserType} from "../../types";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getUsers,
    getCurrentPage,
    getIsFetching,
    getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: number[]
}

type UsersContainerProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    isFollowingProgress: number[]
    requestUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
};

class UsersContainer extends React.Component<UsersContainerProps, UserType[]> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> : (
                        <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage} onPageChange={this.onPageChange}
                               unfollowUser={this.props.unfollowUser}
                               followUser={this.props.followUser} users={this.props.users}
                               isFollowingProgress={this.props.isFollowingProgress}/>
                    )}

            </>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state)
    }
}

export const ComposedUserContainer = compose<ComponentType>(withAuthRedirect, connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    requestUsers
}))(UsersContainer)