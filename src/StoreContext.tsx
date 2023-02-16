import React from 'react';
import {StoreType, TsarType} from "./redux/myStore";
import {store} from "./redux/redux-store";
import App from "./App";
import {ActionTypes} from "redux-form";
import {Store} from "redux";

const StoreContext = React.createContext(store)

export type ProviderType = {
    store:typeof store
    children:React.ReactNode
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;