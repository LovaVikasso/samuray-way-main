import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export type reducersType=ReturnType<typeof reducers>
export type storeType=typeof store

export const store = createStore(reducers);
