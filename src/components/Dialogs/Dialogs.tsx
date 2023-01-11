import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
}

const Dialogs = (props: DialogsType) => {


    let dialogsElement = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map((m) => <Message text={m.text}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>

    )
}
export default Dialogs