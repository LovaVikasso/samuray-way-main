import React from 'react';
import Dialogs from "./Dialogs";
import {AddMessageAC, DialogsPageType, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = DialogsPageType
type MapDispatchPropsType = {
    addMessageCallBack: () => void
    onChangeCallBack: (newText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        messages:state.dialogsPage.messages,
        dialogs:state.dialogsPage.dialogs,
        newMessage:state.dialogsPage.newMessage
        //dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        addMessageCallBack: () => {
           dispatch(AddMessageAC());
        },
        onChangeCallBack: (newText:string) => {
            dispatch(UpdateNewMessageAC(newText))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer