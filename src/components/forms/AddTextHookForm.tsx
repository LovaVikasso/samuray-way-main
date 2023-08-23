import React from 'react';
import s from './AddTextSender.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validator";
import {SubmitHandler, useForm } from 'react-hook-form';


type AddTextFormType = { onClick: (value: string) => void }
type Inputs = {
    text: string
}
export const AddTextHookForm = (props: AddTextFormType) => {
    const {register, handleSubmit,reset, formState: {errors}} = useForm<Inputs>({
        defaultValues: {
            text: '',
        }
    });
    const onSubmit: SubmitHandler<Inputs> = data => {props.onClick(data.text); reset()}
    // console.log(watch())//подсвечивает что вводим
    //reset() зачищает форму

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('text', {
                required: "This is required",
                maxLength: {value: 30, message: "Max length is  30 simbols"}
            })} placeholder={'Text'}/>
            <p>{errors.text?.message}</p>

            <button>Send</button>
            {/*<input type="submit"/>*/}
        </form>
    );
}