import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthMe, logout} from "../../redux/auth-reducer";

type HeaderContainerProps = {
    isAuth: boolean
    login: string | null
    getAuthMe: () => void
    logout: () => void
}

export class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthMe, logout})(HeaderContainer)
