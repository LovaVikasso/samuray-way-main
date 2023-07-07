import React from 'react';
import s from './FormsControl.module.css'
import {WrappedFieldProps} from "redux-form"

export const FormsControls: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...restProps}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div> {restProps.children}</div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const TextArea:React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormsControls {...props} ><textarea {...input} {...restProps}/></FormsControls>

}

export const Input:React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    //test changes
    return <FormsControls {...props} ><input {...input} {...restProps}/></FormsControls>
}
