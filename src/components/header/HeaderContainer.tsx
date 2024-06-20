import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type HeaderContainerProps = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export class HeaderContainer extends React.Component<HeaderContainerProps> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)
