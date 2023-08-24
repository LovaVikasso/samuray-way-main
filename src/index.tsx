import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import React from "react";

    ReactDOM.render(
        <Provider store={store}>
                <App/>
        </Provider>,
        document.getElementById('root')
    );



//bind используем всегда если в в методе используется this. в скобках пишем объект в котором берем этот метод

//renderTree() //вызываем рендер при запуске приложения
//store.subscribe(renderTree) //окгда меняется state вызываем перерисовку
