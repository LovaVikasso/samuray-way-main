import {API} from "../api/api";
import {Dispatch} from "redux";

//types
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    profile: ProfileUserType
    posts: Array<PostType>
    status: string
}
export type ProfileUserType = {
    aboutMe: string | null | undefined,
    contacts: {
        facebook: string | null | undefined
        website: string | null | undefined
        vk: string | null | undefined
        twitter: string | null | undefined
        instagram: string | null | undefined
        youtube: string | null | undefined
        github: string | null | undefined
        mainLink: string | null | undefined
    },
    lookingForAJob: boolean | null | undefined
    lookingForAJobDescription: string | null | undefined
    fullName: string
    userId: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
}
const initialState: ProfilePageType = {
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 28820,
        photos: {
            small: "",
            large: ""
        }
    },
    posts: [
        {id: 1, message: 'Hi', likesCount: 1},
        {id: 2, message: 'Hello', likesCount: 1},
        {id: 3, message: 'Nice to see you again', likesCount: 10},
    ],
    status: ''
}

type AddPostACType = ReturnType<typeof AddPost>
type SetUserProfileACType = ReturnType<typeof SetUserProfile>
type SetUserStatusACType = ReturnType<typeof SetUserStatus>

type ProfileReducerType = AddPostACType | SetUserProfileACType | SetUserStatusACType

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST' : {
            let newPost: PostType = { //новый посто формата PostsType
                id: state.posts.length + 1,
                message: action.text,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]}

        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-USER-STATUS': {
            return {...state, status: action.status}
        }

        default:
            return state
    }

}
//actions
export const AddPost = (text:string) => ({type: 'ADD-POST', text} as const)
export const SetUserProfile = (profile: ProfileUserType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const SetUserStatus = (status: string) => ({type: 'SET-USER-STATUS', status} as const)

//thunk creators
export const SetUserProfileTC = (userId: string | number) => (dispatch: Dispatch<ProfileReducerType>) => {
    API.setUserProfile(userId)
        .then(response => {
            dispatch(SetUserProfile(response))
        })
}
export const SetUserStatusTC = (userId: string | number) => {
    return (dispatch: Dispatch<ProfileReducerType>) => {
        API.getStatus(userId)
            .then(response => {
                dispatch(SetUserStatus(response))
            })
    };
}

export const UpdateStatusTC = (status: string) => (dispatch: Dispatch<ProfileReducerType>) => {
    API.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0 ) {
                dispatch(SetUserStatus(status))
            }
        })
}
