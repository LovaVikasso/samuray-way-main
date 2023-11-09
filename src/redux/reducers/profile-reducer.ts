
import {Dispatch} from "redux";
import { userAPI } from "../../api/userAPI";

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
export type PhotosType = {
    small: string | null
    large: string | null
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
    photos: PhotosType
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
type SetSavePhotoACType = ReturnType<typeof SavePhoto>

type ProfileReducerType = AddPostACType | SetUserProfileACType | SetUserStatusACType | SetSavePhotoACType

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
        case 'SAVE-PHOTO': {
            return {...state, profile: {...state.profile, photos: action.photos  }}
        }

        default:
            return state
    }

}
//actions
export const AddPost = (text:string) => ({type: 'ADD-POST', text} as const)
export const SetUserProfile = (profile: ProfileUserType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const SetUserStatus = (status: string) => ({type: 'SET-USER-STATUS', status} as const)
export const SavePhoto = (photos: PhotosType) => ({type: 'SAVE-PHOTO', photos} as const)

//thunk creators
export const SetUserProfileTC = (userId: string | number) => (dispatch: Dispatch<ProfileReducerType>) => {
    userAPI.setUserProfile(userId)
        .then(response => {
            dispatch(SetUserProfile(response))
        })
}
export const SetUserStatusTC = (userId: string | number) => {
    return (dispatch: Dispatch<ProfileReducerType>) => {
        userAPI.getStatus(userId)
            .then(response => {
                dispatch(SetUserStatus(response))
            })
    };
}

export const UpdateStatusTC = (status: string) => (dispatch: Dispatch<ProfileReducerType>) => {
    userAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0 ) {
                dispatch(SetUserStatus(status))
            }
        })
}
export const UploadPhotoTC = (file: File ) => (dispatch: Dispatch<ProfileReducerType>) => {
    userAPI.uploadPhoto(file)
        .then(response => {
            if (response.resultCode === 0 ) {
                dispatch(SavePhoto(response.data.photos))
            }
        })
}