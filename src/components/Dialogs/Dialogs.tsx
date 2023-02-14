import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {TsarType} from "../../redux/store";

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

// const Dialogs = (props: DialogsType) => {
const Dialogs:React.FC<DialogsType> = (props) => {


    let dialogsElement = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map((m) => <Message text={m.text}/>)

    // let newMessageElement = React.createRef<HTMLTextAreaElement>();//потказываем типизации что мы используем createRef для textarea
    let addMessage = () => {
        // alert(newMessageElement.current?.value) //current?.value если ссылка (ref) существует, то value
        props.dispatch({type:'SEND-MESSAGE', textMessage:props.newMessage})
    }
    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newTextMessage:e.currentTarget.value})
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