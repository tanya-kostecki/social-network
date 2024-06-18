import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Login} from "./Login";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type LoginContainerProps = {
    isAuth: boolean
}

export class LoginContainer extends React.Component<LoginContainerProps> {

    render() {
        return <Login isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps)(LoginContainer)