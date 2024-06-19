import React from 'react';
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form style={{display: 'flex', flexDirection: 'column', maxWidth: '200px'}} onSubmit={props.handleSubmit}>
            <Field placeholder={'login'} type={'text'} component={'input'} name={'login'}/>
            <Field placeholder={'password'} type={'password'} component={'input'} name={'password'}/>
            <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>Remember me
            <button>Login</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginProps = {
    isAuth: boolean
};
export const Login = ({isAuth}: LoginProps) => {
    if (isAuth) return <Redirect to="/profile"/>

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <main className={'content'}>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </main>
    )
        ;
};