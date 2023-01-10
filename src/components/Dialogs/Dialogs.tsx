import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {}
type DialogItemsType={
    name:string
    id:number
}
type MessageType={
    text:string
}
const DialogItem = (props:DialogItemsType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
}
const Message = (props:MessageType) => {
    return <div className={s.message}>{props.text}</div>
}

const Dialogs = (props: DialogsType) => {

    let dialogsData = [
        {id:1,name:'Victoria'},
        {id:2,name:'Natalia'},
        {id:3,name:'Leyla'},
        {id:4,name:'Milly'},
        {id:5,name:'Yasno'}
    ]
    let messagesData = [
        {id:1, text:'Hello dear friend'},
        {id:2, text:'Nice to see you again'},
        {id:3, text:'Would you be so kindly'},
        {id:4, text:'Yo'}
    ]
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Victoria" id={1}/>
                <DialogItem name="Natalia" id={2}/>
                <DialogItem name="Leyla" id={3}/>
                <DialogItem name="Milly" id={4}/>
                <DialogItem name="Yasno" id={5}/>
            </div>
            <div className={s.messages}>
                <Message text="Hello dear friend" />
                <Message text="Nice to see you again" />
                <Message text="Would you be so kindly?" />
            </div>
        </div>

    )
}
export default Dialogs