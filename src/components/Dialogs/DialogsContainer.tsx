import React from 'react';
import Dialogs from "./Dialogs";
import {AddMessageAC, DialogsPageType, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/myStore";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfilePageType} from "../../redux/profile-reducer";

// type DialogsType = {
//     // dialogs: Array<DialogDataType>,
//     // messages: Array<MessageDataType>
//     // dispatch: (action: TsarType) => void
//     // newMessage:string
// }
// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     {
//                         let addMessage = () => {
//                             store.dispatch(AddMessageAC())
//                         }
//                         let onChangeHandler = (newText: string) => {
//                             store.dispatch(UpdateNewMessageAC(newText))
//                         }
//
//                         return (
//                             <Dialogs
//                                 state={store.getState().dialogsPage}
//                                 addMessageCallBack={addMessage}
//                                 onChangeCallBack={onChangeHandler}/>)
//                     }
//                 }
//             }
//         </StoreContext.Consumer>)
// }
type MapStatePropsType = DialogsPageType
type MapDispatchPropsType = {
    addMessageCallBack: () => void
    onChangeCallBack: (newText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType
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