export type DialogDataType = {
    id: number, name: string
}
export type MessageDataType = {
    id: number,
    text: string
}
export type DialogsPageType = {
    dialogs: Array<DialogDataType>,
    messages: Array<MessageDataType>,
}
type AddMessageActionType = ReturnType<typeof AddMessageAC>
export type DialogsReducerType = AddMessageActionType

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
    ]
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage: MessageDataType = {
                id: state.messages.length + 1,
                text: action.text
            };
            return {...state,messages:[...state.messages,newMessage]}
        }

        default:
            return state
    }
}
export const AddMessageAC = (text:string) => ({type: 'ADD-MESSAGE', text} as const)


