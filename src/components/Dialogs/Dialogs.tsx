import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddTextForm} from "../common/AddTextForm";
import { AddTextHookForm } from '../forms/AddTextHookForm';

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map((m) => <Message key={m.id} text={m.text}/>)

    const addMessage = (text:string) => {
        props.addMessage(text)
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
                    {/*<AddTextForm onClick={addMessage} />*/}
                    <AddTextHookForm onClick={addMessage}/>
                </div>
            </div>
        </div>

    )
}
export default Dialogs