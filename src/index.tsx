import React from 'react';
import './index.css';
import store from "./redux/state";
import {renderTree} from "./render";


renderTree() //вызываем рендер при запуске приложения
store.subscribe(renderTree) //окгда меняется state вызываем перерисовку
