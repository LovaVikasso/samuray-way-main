import {GetAuthTC, SetUserDataType} from "./auth-reducer";
import { AppThunkDispatch } from "./redux-store";


export type AppType = {
    initialize: boolean
}

const initialState: AppType = {
    initialize: false
}

export type InitializeAppType = ReturnType<typeof InitializeApp>

type AppReducerType = InitializeAppType | SetUserDataType

export const appReducer = (state: AppType = initialState, action: AppReducerType): AppType => {
    switch (action.type) {

        case "INITIALIZE-APP": {
            return {...state, initialize: true}
        }

        default:
            return state
    }

}
//actions
export const InitializeApp = () => ({type: 'INITIALIZE-APP'} as const)


//thunks creator

export const InitializeTC = () => {
    return (dispatch: AppThunkDispatch) => {
        let promise = dispatch(GetAuthTC())
            promise.then(()=>{dispatch(InitializeApp())})
    }
}
