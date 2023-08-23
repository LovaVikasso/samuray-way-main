import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input, FormsControls} from '../common/FormsControls';
import { maxLengthCreator, requiredField } from '../../utils/validator';
import { LoginHookForm } from '../forms/LoginHookForm';
//УСТАРЕВШАЯ БИБЛИОТЕКА
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={s.login}>
            <h3>Login </h3>
            <LoginReduxForm onSubmit={onSubmit}/>
            {/*<LoginHookForm />*/}
        </div>
    )
}
const MaxLength15 = maxLengthCreator(15)
const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.input}>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[
                    requiredField,
                    MaxLength15
                ]}/>
            </div>
            <div className={s.input}>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[
                    requiredField,
                    MaxLength15
                ]} />
            </div>
            <div className={s.input}>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> Remember me
            </div>
            <div className={s.button}>
                <button>Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)