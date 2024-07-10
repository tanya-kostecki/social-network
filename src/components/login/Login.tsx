import React from 'react';
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/form-controls/FormControls";
import { required } from "../../utils/validators/validators";
import styles from '../common/form-controls/FormControls.module.css';

// Типы данных для формы
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string | null
    // captcha: {
    //     url: string | null
    // }
}

// Типы данных для собственных пропсов компонента LoginForm
type LoginFormOwnProps = {
    captcha: string | null
    // captcha: {
    //     url: string | null
    // }
}

// Типы данных для пропсов компонента LoginForm, объединяющие InjectedFormProps и собственные пропсы
type LoginFormProps = InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps;

const LoginForm: React.FC<LoginFormProps> = ({ error, handleSubmit, captcha }) => {
    return (
        <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', padding: '20px' }}
              onSubmit={handleSubmit}>
            <Field placeholder={'login'} type={'email'} component={Input} name={'login'} validate={[required]} />
            <Field placeholder={'password'} type={'password'} component={Input} name={'password'}
                   validate={[required]} />
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'} />Remember me
            </div>
            {captcha && <div>
                <img src={captcha} alt={'captcha'}/>
                <Field placeholder={'type symbols'} component={Input} name={'captcha'} validate={[required]} />
            </div>}
            {error && <span className={styles.formError}>{error}</span>}
            <button>Login</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type LoginProps = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    captcha: string | null
};

export const Login: React.FC<LoginProps> = ({ isAuth, login, captcha }) => {
    if (isAuth) return <Redirect to="/profile" />

    const onSubmit = (formData: FormDataType) => {
        login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    return (
        <main className={'content'}>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} captcha={captcha} />
        </main>
    )
};

