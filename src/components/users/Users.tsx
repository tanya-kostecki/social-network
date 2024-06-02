import * as React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../types";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

type Props = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChange: (page: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    isFollowingProgress:  number[]
};
export const Users = (props: Props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }
    let nextPage = props.currentPage + 1
    let prevPage = props.currentPage - 1
    return (
        <main className='content'>
            {/*<div>*/}
            {/*    {pages.map(p => <span key={p} onClick={() => props.onPageChange(p)}*/}
            {/*                          className={props.currentPage === p ? styles.selectedPage : styles.page}>{p}</span>)}*/}
            {/*</div>*/}
            <div>
                {prevPage >= 1 && <button onClick={() => props.onPageChange(prevPage)}>Назад</button>}
                <span className={styles.selectedPage}>{props.currentPage}</span>
                {nextPage <= pagesCount && <button onClick={() => props.onPageChange(nextPage)}>Вперед</button>}
            </div>
            {props.users.map(u => (
                <div key={u.id} className={styles.userBlock}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.avatar}
                             alt={'user-avatar'}/>
                    </NavLink>
                    {u.followed ?
                        <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            usersApi.unfollowUser(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })
                        }}
                                className={styles.button}>{'Unfollow'}</button> :
                        <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            usersApi.followUser(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })
                        }}
                                className={styles.button}>{'Follow'}</button>}
                    <span>{u.name}</span>
                    <span>{u.status}</span>
                    <span>{'u.location.city'}</span>
                    <span>{'u.location.country'}</span>
                </div>
            ))}
        </main>
    );
};