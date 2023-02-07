import {renderTree} from "../render";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
   // postMessage:string
}
type DialogDataType = {
    id: number, name: string
}
type MessageDataType = {
    id: number,
    text: string
}
type DialogsPageType = {
    dialogs: Array<DialogDataType>,
    messages: Array<MessageDataType>
}
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 1},
            {id: 2, message: 'Hello', likesCount: 1},
            {id: 3, message: 'Nice to see you again', likesCount: 10},
            {id: 4, message: 'YO', likesCount: 7}
        ],
        //postMessage:''
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
        ]
    },
    // friendsPage: {
    //     friends: [
    //         {id: 1, name: 'Anna'},
    //         {id: 2, name: 'Tatyana'},
    //         {id: 3, name: 'Svetlana'}
    //     ],
    // },
}

export let addPost = (postMessage:string) =>{ //приходят пост типа строка
let newPost:PostType = { //новый посто формата PostsType
    id:state.profilePage.posts.length+1,
    message:postMessage,
    likesCount:0
};
    state.profilePage.posts.push(newPost)
    renderTree(state)
}



export default state