import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer
})


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
// @ts-ignore
window.store = store

