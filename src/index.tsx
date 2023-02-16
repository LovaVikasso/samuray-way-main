import './index.css';
import myStore from "./redux/myStore";
import {renderTree} from "./render";
import {store} from "./redux/redux-store";


renderTree() //вызываем рендер при запуске приложения
store.subscribe(renderTree) //окгда меняется state вызываем перерисовку
