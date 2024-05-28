import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type UserDataType = {
    id: number
    email: string
    login: string
}

type HeaderContainerProps = {
    setAuthUserData: (user: UserDataType) => void
    isAuth: boolean
    login: string | null
}


export class HeaderContainer extends React.Component<HeaderContainerProps>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
               if(res.data.resultCode === 0) {
                   // this.props.setAuthUserData(res.data.data)
                   let {id, email, login} = res.data.data;
                   this.props.setAuthUserData({id, email, login});
               }
            })
    }

    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
