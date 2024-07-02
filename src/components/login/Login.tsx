import React from 'react';
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/form-controls/FormControls";
import {required} from "../../utils/validators/validators";
import styles from '../common/form-controls/FormControls.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm = ({error, handleSubmit}: InjectedFormProps<FormDataType>) => {
    return (
        <form style={{display: 'flex', flexDirection: 'column', maxWidth: '200px', padding: '20px'}}
              onSubmit={handleSubmit}>
            <Field placeholder={'login'} type={'email'} component={Input} name={'login'} validate={[required]}/>
            <Field placeholder={'password'} type={'password'} component={Input} name={'password'}
                   validate={[required]}/>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>Remember me
            </div>
            {error && <span className={styles.formError}>{error}</span>}
            <button>Login</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginProps = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
};
export const Login = ({isAuth, login}: LoginProps) => {
    if (isAuth) return <Redirect to="/profile"/>

    const onSubmit = (formData: FormDataType) => {
        login(formData.login, formData.password, formData.rememberMe)

    }
    return (
        <main className={'content'}>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </main>
    )
        ;
};