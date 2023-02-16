import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostMessage: string
}
type DialogDataType = {
    id: number, name: string
}
type MessageDataType = {
    id: number,
    text: string
}
export type DialogsPageType = {
    dialogs: Array<DialogDataType>,
    messages: Array<MessageDataType>,
    newMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: TsarType) => void
}

type AddPostActionType = ReturnType<typeof AddPostAC>
type UpdateNewPostActonType = ReturnType<typeof UpdateNewPostAC>
type AddMessageActionType = ReturnType<typeof AddMessageAC>
type UpdateNewMessageActonType = ReturnType<typeof UpdateNewMessageAC>

export type TsarType = AddPostActionType | UpdateNewPostActonType | AddMessageActionType | UpdateNewMessageActonType
export const AddPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage
    } as const
}
export const UpdateNewPostAC = (message: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        message
    } as const
}
export const AddMessageAC = (textMessage: string) => {
    return {
        type: 'SEND-MESSAGE',
        textMessage
    } as const
}
export const UpdateNewMessageAC = (newTextMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newTextMessage
    } as const
}

let myStore: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 1},
                {id: 2, message: 'Hello', likesCount: 1},
                {id: 3, message: 'Nice to see you again', likesCount: 10},
                {id: 4, message: 'YO', likesCount: 7}
            ],
            newPostMessage: 'Напиши сюда новый пост'
        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state
    },
    _onChange() {
        console.log("state changed")
    },
    subscribe(observer) {
        this._onChange = observer
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._onChange()
    }
}
export default myStore
