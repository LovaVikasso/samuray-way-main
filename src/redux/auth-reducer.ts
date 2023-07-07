import {API} from "../api/api";
import {Dispatch} from "redux";

export type AuthMeType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth:boolean
}
// export type ResponseType<D = {}> = {
//     resultCode: number
//     messages: Array<string>
//     data: D
// }

const initialState: AuthMeType = {
    id:null,
    email: null,
    login: null,
    isAuth:false
}

type SetUserDataType = ReturnType<typeof SetAuthUserData>

type AuthReducerType = SetUserDataType

export const authReducer = (state: AuthMeType = initialState, action: AuthReducerType): AuthMeType => {
    switch (action.type) {

        case "SET-USER-DATA": {
            return {...state, ...action.data, isAuth:true}
        }
        default:
            return state
    }

}
//actions

export const SetAuthUserData = (data: AuthMeType) => ({type: 'SET-USER-DATA', data} as const)
export const GetAuthTC = () => (dispatch: Dispatch<AuthReducerType>) => {
    API.getAuthMe()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(SetAuthUserData(response.data))
            }
        })
}

