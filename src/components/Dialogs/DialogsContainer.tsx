import React from 'react';
import Dialogs from "./Dialogs";
import {AddMessageAC, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/myStore";
import {AppStateType} from "../../redux/redux-store";

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

const mapStateToProps = (state:AppStateType) => {

    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:any) => {
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