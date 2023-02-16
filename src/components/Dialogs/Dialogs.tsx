import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageAC, TsarType, UpdateNewMessageAC} from "../../redux/myStore";

export type DialogDataType = {
    id: number, name: string
}
export type MessageDataType = {
    id: number,
    text: string
}
type DialogsType = {
    dialogs: Array<DialogDataType>,
    messages: Array<MessageDataType>
    dispatch: (action: TsarType) => void
    newMessage:string
}
const Dialogs:React.FC<DialogsType> = (props) => {


    let dialogsElement = props.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map((m) => <Message key={m.id} text={m.text}/>)
    let addMessage = () => {
        props.dispatch(AddMessageAC(props.newMessage))
    }
    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(UpdateNewMessageAC(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div className={s.addForm}>
                <div>
                    <textarea onChange={onChangeHandler} value={props.newMessage} placeholder="Введи новое сообщение!"></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs