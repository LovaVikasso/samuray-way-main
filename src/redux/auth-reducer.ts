import {API} from "../api/api";
import {Dispatch} from "redux";
import {AppThunkDispatch} from "./redux-store";

export type AuthMeType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
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
    isAuth: false
}

type SetUserDataType = ReturnType<typeof SetAuthUserData>


type AuthReducerType = SetUserDataType

export const authReducer = (state: AuthMeType = initialState, action: AuthReducerType): AuthMeType => {
    switch (action.type) {

        case "SET-USER-DATA": {
            return {...state, ...action.data}
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
    isAuth}
} as const)


//thunks creator

export const GetAuthTC = () => (dispatch: Dispatch<AuthReducerType>) => {
    API.getAuthMe()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(SetAuthUserData(response.data.id, response.data.email, response.data.login, true))

            }
        })
}
export const LoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: AppThunkDispatch) => {
    API.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(GetAuthTC())
            }//санка в санке XD
        })
}
export const LogoutTC = () => (dispatch: AppThunkDispatch) => {
    API.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(SetAuthUserData( null, null, null, false))
                console.log(response)
            }
        })
}

