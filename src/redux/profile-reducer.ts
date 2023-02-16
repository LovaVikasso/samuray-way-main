import {PostType,ProfilePageType, TsarType} from "./myStore";

const initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 1},
        {id: 2, message: 'Hello', likesCount: 1},
        {id: 3, message: 'Nice to see you again', likesCount: 10},
        {id: 4, message: 'YO', likesCount: 7}
    ],
        newPostMessage: 'Напиши сюда новый пост'
}
export const profileReducer = (state: ProfilePageType = initialState, action: TsarType) => {
    switch (action.type) {
        case 'ADD-POST' : {

            let newPost: PostType = { //новый посто формата PostsType
                id: state.posts.length + 1,
                message: action.postMessage,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostMessage = ""
            return state
        }
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostMessage = action.message
            return state
        default:
            return state
    }
}
