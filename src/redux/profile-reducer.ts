import {PostType,ProfilePageType, TsarType} from "./myStore";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
        case ADD_POST : {

            let newPost: PostType = { //новый посто формата PostsType
                id: state.posts.length + 1,
                message: state.newPostMessage,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostMessage = ""
            return state
        }
        case UPDATE_NEW_POST_TEXT:
            state.newPostMessage = action.message
            return state
        default:
            return state
    }

}
export const AddPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const UpdateNewPostAC = (message: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        message
    } as const
}