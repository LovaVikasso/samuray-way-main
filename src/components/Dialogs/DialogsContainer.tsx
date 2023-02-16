import React from 'react';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {AddMessageAC, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
// type DialogsType = {
//     // dialogs: Array<DialogDataType>,
//     // messages: Array<MessageDataType>
//     // dispatch: (action: TsarType) => void
//     // newMessage:string
// }
const DialogsContainer= () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    {
                        let addMessage = () => {
                            store.dispatch(AddMessageAC())
                        }
                        let onChangeHandler = (newText: string) => {
                            store.dispatch(UpdateNewMessageAC(newText))
                        }

                        return (
                            <Dialogs dialogs={store.getState().dialogsPage.dialogs}
                                     messages={store.getState().dialogsPage.messages}
                                     newMessage={store.getState().dialogsPage.newMessage}
                                     addMessageCallBack={addMessage}
                                     onChangeCallBack={onChangeHandler}/>)
                    }
                }
            }
        </StoreContext.Consumer>)
}


export default DialogsContainer