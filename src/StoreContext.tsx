import React from 'react';
import {StoreType} from "./redux/myStore";
import {store} from "./redux/redux-store";

const StoreContext = React.createContext(store)
//:StoreType

export default StoreContext;