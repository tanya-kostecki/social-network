import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderProps = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
export const Header = ({ isAuth, login, logout}: HeaderProps) => {
    const onClickHandler = () => {
        logout()
    }
    return (
        <header className={classes.header}>
            <img
                src={'https://img.freepik.com/vektoren-kostenlos/vogel-bunter-logo-gradientenvektor_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1908636980.1711497600&semt=ais'}
                alt={'logo'}
            />
            {isAuth ?
                <div>
                    <span>{login}</span>
                    <button onClick={onClickHandler}>Log out</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </header>
    );
};
