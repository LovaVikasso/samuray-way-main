import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";


type AppProps={
    addState:RootStateType
    addPostCallBack:(postMessage:string)=>void
}
const App = (props: AppProps) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile posts={props.addState.profilePage.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.addState.dialogsPage.dialogs} messages={props.addState.dialogsPage.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    {/*<Route path='/friends' render={() => <Friends/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
