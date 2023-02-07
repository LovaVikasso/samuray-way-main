import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


export const renderTree = (state:RootStateType) => {
    ReactDOM.render(
        <App addState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
//функция для отрисовки приложения, вынесли для переиспользования в state и index.tsx

