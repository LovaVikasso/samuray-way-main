import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageAC, DialogDataType, MessageDataType, TsarType, UpdateNewMessageAC} from "../../redux/myStore";

type DialogsType = {
    dialogs: Array<DialogDataType>,
    messages: Array<MessageDataType>
    newMessage: string
    onChangeCallBack: (newText:string)=>void
    addMessageCallBack: ()=>void
}
const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElement = props.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map((m) => <Message key={m.id} text={m.text}/>)
    const onChangeCallback = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeCallBack(e.currentTarget.value)
    }
    const addMessageCallback = () => {
        props.addMessageCallBack()
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
                    <textarea onChange={onChangeCallback} value={props.newMessage}
                              placeholder="Введи новое сообщение!"></textarea>
                    <button onClick={addMessageCallback}>Send message</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs