import {PostType,ProfilePageType, TsarType} from "./store";

export const profileReducer = (state: ProfilePageType, action: TsarType) => {
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
