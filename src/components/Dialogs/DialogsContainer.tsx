import React, {FC} from 'react';
import Dialogs from "./Dialogs";
import {AddMessageAC, DialogsPageType} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/RedirectComponent";

type MapStatePropsType = {dialogsPage:DialogsPageType}
type MapDispatchPropsType = {
    addMessage: (newText: string) => void

}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        addMessage: (newText) => {
           dispatch(AddMessageAC(newText));
        }
    }
}

// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
export const DialogsContainer = compose<FC>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)
