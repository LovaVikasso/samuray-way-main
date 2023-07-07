import React from 'react';
import s from './AddTextSender.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validator";
import {useForm, SubmitHandler, Controller} from "react-hook-form";

type Inputs = {
    login: string,
    password: string,
    rememberMe: boolean

}
export const LoginHookForm = (props: any) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
        defaultValues: {
            login: "",
            password: "",
            rememberMe: false

        }
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    console.log(watch())//подсвечивает что вводим

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('login', {required: "Login is required"})} placeholder={'Login'}/>
            <p>{errors.login?.message}</p>
            <input {...register('password', {
                required: "This is required",
                minLength: {value: 4, message: "Min length is  4 simbols"}
            })} placeholder={'Password'}/>
            <p>{errors.password?.message}</p>
            <div>
                <input {...register('rememberMe')} type={'checkbox'}/>
                Remember Me
            </div>

            <button>Send</button>
            {/*<input type="submit"/>*/}
        </form>
    );
}

