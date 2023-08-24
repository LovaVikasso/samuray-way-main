import React from 'react';
import s from '../Login/Login.module.css'
import {useForm, SubmitHandler, FieldErrors} from "react-hook-form";
import { useAppDispatch } from '../../redux/redux-store';

type Inputs = {
    login: string,
    password: string,
    rememberMe: boolean
}
type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
export const LoginHookForm = (props: PropsType) => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {
            errors, isDirty, isValid, isSubmitting,
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
        // console.log(data) //{login: 'dsvsdv', password: 'dsvdsvsdv', rememberMe: false}
        reset();
    }
    // console.log(watch())//подсвечивает что вводим
    const onError = (errors: FieldErrors<Inputs>) => {
        // setError('login', errors.login)
        console.log(errors)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate >
            <input {...register(
                'login',
                {required: "Login is required" , pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email format'
                    }
                   })} placeholder={'Login'}/>
            <p className={s.error}>{errors.login?.message}</p>
            <input type="password" {...register('password', {

                required: "Password is required",
                minLength: {value: 4, message: "Min length is 4 simbols"}
            })} placeholder={'Password'}/>
            <p className={s.error}>{errors.password?.message}</p>
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

