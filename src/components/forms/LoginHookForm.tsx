import React from 'react';
import s from './AddTextSender.module.css'
import {maxLengthCreator, requiredField} from "../../utils/validator";
import {useForm, SubmitHandler, Controller, FieldErrors} from "react-hook-form";

type Inputs = {
    login: string,
    password: string,
    rememberMe: boolean
}
type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
export const LoginHookForm = (props: PropsType) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {errors, isDirty, isValid, isSubmitting,
            // isSubmitSuccessful, submitCount
        }
    } = useForm<Inputs>({
        mode: 'onChange',
        defaultValues: {
            login: "",
            password: "",
            rememberMe: false
        }
    });
    const onSubmit: SubmitHandler<Inputs> = data => {
        props.login(data.login, data.password, data.rememberMe);
        reset();
    }
    // console.log(watch())//подсвечивает что вводим
    const onError = (errors: FieldErrors<Inputs>) => {
    }
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input {...register('login', {required: "Login is required"})} placeholder={'Login'}/>
            <p>{errors.login?.message}</p>
            <input type="password" {...register('password', {

                required: "This is required",
                minLength: {value: 4, message: "Min length is  4 simbols"}
            })} placeholder={'Password'}/>
            <p>{errors.password?.message}</p>
            <div>
                <input {...register('rememberMe')} type={'checkbox'}/>
                Remember Me
            </div>
            {/*{submitCount > 0 && !isSubmitSuccessful && <p>Invalid password or email</p>}*/}
            <button disabled={!isDirty || !isValid || isSubmitting}>Send</button>
            {/*кнопка не будет работать если форма нетронута или не верна*/}

        </form>
    );
}

