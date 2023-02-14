import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        {/*// <App addState={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,*/}
        <App addState={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
//bind используем всегда если в в методе используется this. в скобках пишем объект в котором берем этот метод
