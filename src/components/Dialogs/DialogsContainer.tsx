import React, {ChangeEvent} from 'react';

import {AddMessageAC, DialogDataType, MessageDataType, TsarType, UpdateNewMessageAC} from "../../redux/myStore";
import Dialogs from "./Dialogs";

type DialogsType = {
    dialogs: Array<DialogDataType>,
    messages: Array<MessageDataType>
    dispatch: (action: TsarType) => void
    newMessage:string
}
const DialogsContainer:React.FC<DialogsType> = (props) => {
    let addMessage = () => {
        props.dispatch(AddMessageAC(props.newMessage))
    }
    let onChangeHandler = (newText:string)=>{
        props.dispatch(UpdateNewMessageAC(newText))
    }
    return <Dialogs dialogs={props.dialogs} messages={props.messages} newMessage={props.newMessage} addMessageCallBack={addMessage} onChangeCallBack={onChangeHandler}/>
}
export default DialogsContainer