import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
    // ); ReactDOM.render(
    //     <BrowserRouter>
    //         <StoreContext.Provider value={store}>
    //             <App/>
    //             {/*<App addState={store.getState()} dispatch={store.dispatch.bind(store)}/>*/}
    //         </StoreContext.Provider>
    //     </BrowserRouter>,
    //     document.getElementById('root')
    // );
    // ReactDOM.render(
    //     <BrowserRouter>
    //
    //         <App addState={myStore.getState()} dispatch={myStore.dispatch.bind(myStore)}/>
    //     </BrowserRouter>,
    //     document.getElementById('root')
    // );

//bind используем всегда если в в методе используется this. в скобках пишем объект в котором берем этот метод
