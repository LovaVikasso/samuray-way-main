import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {AppStateType} from './redux/redux-store';
import {connect} from 'react-redux';
import {InitializeTC} from './redux/reducers/app-reducer';
import {Preloader} from './components/common/Preloader';
// import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type MapStatePropsType = { initialize: boolean }
type MapDispatchPropsType = {
    InitializeTC: () => void
}
const importPromiseDialogs = import('./components/Dialogs/DialogsContainer');
const importPromiseProfile = import('./components/Profile/ProfileContainer');
const DialogsContainer = lazy(() => importPromiseDialogs.then(module => ({default: module.DialogsContainer})));
const ProfileContainer = lazy(() => importPromiseProfile.then(module => ({default: module.default})));

export type AppPropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.InitializeTC()
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?' render={() => {
                            return <Suspense fallback={<Preloader/>}>
                            <ProfileContainer/>
                            </Suspense>
                            }}/>
                        <Route path='/dialogs' render={() => {
                            return <Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </Suspense>

                        }}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        {/*<Route path='/friends' render={() => <Friends/>}/>*/}
                    </div>
                </div>

            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialize: state.app.initialize,

    }
}
export default connect(mapStateToProps, {InitializeTC})(App);
