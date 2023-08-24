import {AnyAction, Dispatch} from "redux";

import {GetAuthTC, SetUserDataType} from "./auth-reducer";
import { AppThunkDispatch } from "./redux-store";


export type AppType = {
    isInitialize: boolean
}

const initialState: AppType = {
    isInitialize: false
}

export type InitializeAppType = ReturnType<typeof InitializeApp>

type AppReducerType = InitializeAppType | SetUserDataType

export const authReducer = (state: AppType = initialState, action: AppReducerType): AppType => {
    switch (action.type) {

        case "INITIALIZE-APP": {
            return {...state, isInitialize: true}
        }

        default:
            return state
    }

}
//actions
export const InitializeApp = () => ({type: 'INITIALIZE-APP'} as const)


//thunks creator

export const Initialize = () => {
    return (dispatch: AppThunkDispatch) => {
        let promise = dispatch(GetAuthTC())
            promise.then(()=>{dispatch(InitializeApp())})
    }
}
