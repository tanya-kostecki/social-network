import React from 'react';
import {UserType} from "../../types";
import styles from './Users.module.css'

type Props = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    // setUsers: (users: UserType[]) => UserType[]
};
export const Users = (props: Props) => {

    return (
        <main className='content'>
            {props.users.map(u => (
                <div key={u.id} className={styles.userBlock}>
                    <img src={u.avatar} className={styles.avatar} alt={'user-avatar'}/>
                    {u.followed ?
                        <button onClick={() => props.unfollow(u.id)} className={styles.button}>{'Unfollow'}</button> :
                        <button onClick={() => props.follow(u.id)} className={styles.button}>{'Follow'}</button>}
                    <span>{u.fullName}</span>
                    <span>{u.status}</span>
                    <span>{u.location.city}</span>
                    <span>{u.location.country}</span>
                </div>
            ))}
        </main>
    );
};