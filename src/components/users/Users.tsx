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
};

export class Users extends React.Component<UsersProps, UserType[]>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => this.props.setUsers(res.data.items))
    }

    render() {
        return (
            <main className='content'>
                {this.props.users.map(u => (
                    <div key={u.id} className={styles.userBlock}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.avatar}
                             alt={'user-avatar'}/>
                        {u.followed ?
                            <button onClick={() => this.props.unfollow(u.id)} className={styles.button}>{'Unfollow'}</button> :
                            <button onClick={() => this.props.follow(u.id)} className={styles.button}>{'Follow'}</button>}
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
