import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../types";
import {NavLink} from "react-router-dom";

type UsersProps = {
    user: UserType
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    isFollowingProgress: number[]
};
export const User = ({
                          user,
                          followUser,
                          unfollowUser,
                          isFollowingProgress
                      }: UsersProps) => {
    return (
        <div className={styles.userBlock}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.avatar}
                     alt={'user-avatar'}/>
            </NavLink>
            {user.followed ?
                <button disabled={isFollowingProgress.some(id => id === user.id)}
                        onClick={() => unfollowUser(user.id)}
                        className={styles.button}>{'Unfollow'}</button> :
                <button disabled={isFollowingProgress.some(id => id === user.id)}
                        onClick={() => followUser(user.id)}
                        className={styles.button}>{'Follow'}</button>}
            <span>{user.name}</span>
            <span>{user.status}</span>
        </div>
    );
};