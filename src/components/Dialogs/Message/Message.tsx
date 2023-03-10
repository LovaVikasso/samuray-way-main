import React from 'react';
import s from './../Dialogs.module.css'

type MessageType = {
    text: string
}
const Message = (props: MessageType) => {
    return (
            <div className={s.message}>{props.text}</div>
    )
}

export default Message