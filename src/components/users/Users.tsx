import React from "react";
import {UserType} from "../../types";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

type UsersProps = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
};

export class Users extends React.Component<UsersProps, UserType[]> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => this.props.setUsers(res.data.items))
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <main className='content'>
                <div>
                    {pages.map(p => <span key={p} onClick={(e) => this.onPageChange(p)}
                                          className={this.props.currentPage === p ? styles.selectedPage  : styles.page}>{p}</span>)}
                </div>
                {this.props.users.map(u => (
                    <div key={u.id} className={styles.userBlock}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.avatar}
                             alt={'user-avatar'}/>
                        {u.followed ?
                            <button onClick={() => this.props.unfollow(u.id)}
                                    className={styles.button}>{'Unfollow'}</button> :
                            <button onClick={() => this.props.follow(u.id)}
                                    className={styles.button}>{'Follow'}</button>}
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                        <span>{'u.location.city'}</span>
                        <span>{'u.location.country'}</span>
                    </div>
                ))}
            </main>
        );
    }
}
