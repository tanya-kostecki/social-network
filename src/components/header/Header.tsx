import React from 'react';
import classes from './Header.module.css'

export const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src={'https://img.freepik.com/vektoren-kostenlos/vogel-bunter-logo-gradientenvektor_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1908636980.1711497600&semt=ais'}
                alt={'logo'}
            />
        </header>
    );
};
