import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

export const renderTree = () => {
    ReactDOM.render(
        <App addState={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}
//bind используем всегда если в в методе используется this. в скобках пишем объект в котором берем этот метод
