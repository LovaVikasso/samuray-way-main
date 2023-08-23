import React from 'react';
import s from './Login.module.css'
// import {Field, InjectedFormProps, reduxForm} from "redux-form";
// import { Input, FormsControls} from '../common/FormsControls';
// import { maxLengthCreator, requiredField } from '../../utils/validator';
import { LoginHookForm } from '../forms/LoginHookForm';
import { connect } from 'react-redux';
import { LoginTC, LogoutTC } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {isAuth:boolean, error: string  | null}
type MapDispatchToPropsType = {
    LoginTC: (email: string, password: string, rememberMe: boolean) => void
    LogoutTC: () => void,
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error

})

const Login = (props:LoginPropsType) => {

    if (props.isAuth) { return <Redirect to={"/profile"}/>}
    else {
    return (
        <div className={s.login}>
            <h3>Login </h3>
            <LoginHookForm login={props.LoginTC} />
            {props.error && <p className={s.error}>{props.error}</p>}
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
        </div>
    )}
}
export default connect(mapStateToProps, {LoginTC, LogoutTC})(Login)


