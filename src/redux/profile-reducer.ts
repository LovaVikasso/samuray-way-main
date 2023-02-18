const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostMessage: string
}
const initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 1},
        {id: 2, message: 'Hello', likesCount: 1},
        {id: 3, message: 'Nice to see you again', likesCount: 10},
    ],
        newPostMessage: 'Напиши сюда новый пост'
}
type AddPostActionType = ReturnType<typeof AddPostAC>
type UpdateNewPostActonType = ReturnType<typeof UpdateNewPostAC>
type ProfileReducerType = AddPostActionType | UpdateNewPostActonType
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST : {
            let newPost: PostType = { //новый посто формата PostsType
                id: state.posts.length + 1,
                message: state.newPostMessage,
                likesCount: 0
            };
            return {...state,posts:[...state.posts,newPost],newPostMessage:''}

        }
        case UPDATE_NEW_POST_TEXT:

            return {...state, newPostMessage: action.message}
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