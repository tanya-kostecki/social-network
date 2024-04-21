import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FriendType} from "../../App";

type NavbarProps = {
    state: {
        friends: FriendType[]
    }
}
export const Navbar = (props: NavbarProps) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}><NavLink to={'/dialogs'}
                                                      activeClassName={classes.active}>Messages</NavLink></li>
                <li className={classes.item}><NavLink to={'/news'} activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}><NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink>
                </li>
                <li className={classes.item}><NavLink to={'/settings'}
                                                      activeClassName={classes.active}>Settings</NavLink></li>
            </ul>

            <div className={classes.friendsBlock}> Friends
                <div className={classes.friends}>
                    {props.state.friends.map(friend => (
                        <div key={friend.id}>
                            <img className={classes.img}
                                 src={friend.avatar}
                                 alt={'friend-avatar'}/>

                            <span>{friend.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};