
import {DialogsPageType, TsarType} from "./myStore";
import {MessageDataType} from "./myStore";

const initialState = {
    dialogs: [
        {id: 1, name: 'Victoria'},
        {id: 2, name: 'Natalia'},
        {id: 3, name: 'Leyla'},
        {id: 4, name: 'Milly'},
        {id: 5, name: 'Yasno'}
    ],
    messages: [
        {id: 1, text: 'Hello dear friend'},
        {id: 2, text: 'Nice to see you again'},
        {id: 3, text: 'Would you be so kindly'},
        {id: 4, text: 'Yo'}
    ], newMessage: 'Напиши сюда новое сообщение'
}
export const dialogsReducer = (state:DialogsPageType = initialState, action:TsarType) => {
    switch (action.type) {
        case 'SEND-MESSAGE' : {
            let newMessage: MessageDataType = {
            id: state.messages.length + 1,
            text: action.textMessage
        };
        state.messages.push(newMessage)
        state.newMessage = ""
            return state
        }

        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessage = action.newTextMessage
            return state
        default:
            return state
    }
}
