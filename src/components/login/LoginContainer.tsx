import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Login} from "./Login";
import {login} from "../../redux/auth-reducer";

type LoginContainerProps = {
    isAuth: boolean
    login:(email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    captcha: string | null
}

export class LoginContainer extends React.Component<LoginContainerProps> {

    render() {
        return <Login isAuth={this.props.isAuth} login={this.props.login} captcha={this.props.captcha}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha.url
})

export default connect(mapStateToProps, {login})(LoginContainer)