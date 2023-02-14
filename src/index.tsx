import React from 'react';
import './index.css';
import store from "./redux/store";
import {renderTree} from "./render";


renderTree() //вызываем рендер при запуске приложения
store.subscribe(renderTree) //окгда меняется state вызываем перерисовку
