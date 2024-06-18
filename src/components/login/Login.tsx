import React from 'react';
import {Redirect} from "react-router-dom";

type Props = {
    isAuth: boolean
};
export const Login = ({ isAuth }: Props) => {
    if (isAuth) return <Redirect to="/profile" />

    return (
        <main className={'content'}>
            <h1>LOGIN</h1>
        </main>
    );
};