import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input, FormsControls} from '../common/FormsControls';
import { maxLengthCreator, requiredField } from '../../utils/validator';
import { LoginHookForm } from '../forms/LoginHookForm';


export const Login = () => {
    return (
        <div className={s.login}>
            <h3>Login </h3>
            <LoginHookForm />
        </div>
    )
}
