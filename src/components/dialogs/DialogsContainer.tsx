import {addMessageAC} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DialogsPageType} from "../../types";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ComponentType} from "react";

type MapStateToPropsType =  {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    addMessage: (message: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message))
        }
    }
}
export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
