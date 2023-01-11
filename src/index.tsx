import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi', likesCount: 1},
    {id: 2, message: 'Hello', likesCount: 1},
    {id: 3, message: 'Nice to see you again', likesCount: 10},
    {id: 4, message: 'YO', likesCount: 7},

]
let dialogs = [
    {id: 1, name: 'Victoria'},
    {id: 2, name: 'Natalia'},
    {id: 3, name: 'Leyla'},
    {id: 4, name: 'Milly'},
    {id: 5, name: 'Yasno'}
]
let messages = [
    {id: 1, text: 'Hello dear friend'},
    {id: 2, text: 'Nice to see you again'},
    {id: 3, text: 'Would you be so kindly'},
    {id: 4, text: 'Yo'}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);