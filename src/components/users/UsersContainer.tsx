import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow, followUser, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, unfollowUser
} from "../../redux/users-reducer";
import {UserType} from "../../types";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: number[]
}

type UsersProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    isFollowingProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
};

class UsersContainer extends React.Component<UsersProps, UserType[]> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
}
export const ComposedUserContainer= compose<ComponentType>(withAuthRedirect, connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    getUsers
}))(UsersContainer)

// export default connect(mapStateToProps, {
//     followUser,
//     unfollowUser,
//     setCurrentPage,
//     getUsers
// })(UsersContainer)