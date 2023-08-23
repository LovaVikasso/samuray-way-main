import {Dispatch} from "redux";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";
import {authAPI } from "../api/api";

export type AuthMeType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    error: string | null
}
// export type ResponseType<D = {}> = {
//     resultCode: number
//     messages: Array<string>
//     data: D
// }

const initialState: AuthMeType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
}

type SetUserDataType = ReturnType<typeof SetAuthUserData>
type SetErrorType = ReturnType<typeof SetError>


type AuthReducerType = SetUserDataType | SetErrorType

export const authReducer = (state: AuthMeType = initialState, action: AuthReducerType): AuthMeType => {
    switch (action.type) {

        case "SET-USER-DATA": {
            return {...state, ...action.data}
        }
        case "SET-ERROR": {
            return {...state, error:action.error}
        }
        default:
            return state
    }

}
//actions

export const SetAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA', data: {
        id,
        email,
        login,
        isAuth
    }
} as const)
export const SetError = (error:string) => ({type: 'SET-ERROR', error} as const)


//thunks creator

export const GetAuthTC = () => (dispatch: Dispatch<AuthReducerType>) => {
    authAPI.getAuthMe()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(SetAuthUserData(response.data.id, response.data.email, response.data.login, true))
            }

        })
}
export const LoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: AppThunkDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(GetAuthTC())
            }
            else {
               dispatch(SetError(response.messages))
            }
        })//санка в санке XD
}
export const LogoutTC = () => (dispatch: AppThunkDispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(SetAuthUserData(null, null, null, false))
            }
        })
}

