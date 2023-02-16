import React from 'react';

import {store} from "./redux/redux-store";


const StoreContext = React.createContext(store)

type ProviderType = {
    store:typeof store
    children:React.ReactNode
}
export const Provider = (props: ProviderType) => {
    return

}

export default StoreContext;