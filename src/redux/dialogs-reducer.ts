
import {DialogsPageType, DialogsActionType, TsarType} from "./store";
import {MessageDataType} from "../components/Dialogs/Dialogs";

export const dialogsReducer = (state:DialogsPageType, action:TsarType) => {
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



//     if (action.type === 'SEND-MESSAGE') {
//         let newMessage: MessageDataType = {
//             id: state.messages.length + 1,
//             text: action.textMessage
//         };
//         state.messages.push(newMessage)
//         state.newMessage = ""
//     } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
//         state.newMessage = action.newTextMessage
//     }
//  return state
// }