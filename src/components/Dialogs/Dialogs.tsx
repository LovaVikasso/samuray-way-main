import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {}
type DialogItemsType = {
    name: string
    id: number
}
type MessageType = {
    text: string
}
const DialogItem = (props: DialogItemsType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.text}</div>
}

const Dialogs = (props: DialogsType) => {

    let dialogs = [
        {id: 1, name: 'Victoria'},
        {id: 2, name: 'Natalia'},
        {id: 3, name: 'Leyla'},
        {id: 4, name: 'Milly'},
        {id: 5, name: 'Yasno'}
    ]
    let messages = [
        {id: 1, text: 'Hello dear friend'},
        {id: 2, text: 'Nice to see you again'},
        {id: 3, text: 'Would you be so kindly'},
        {id: 4, text: 'Yo'}
    ]

    let dialogsElement = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map((m)=><Message text={m.text}/>)

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