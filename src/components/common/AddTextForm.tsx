import React from 'react';
import s from './AddTextSender.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validator";
import {TextArea} from "./FormsControls";

type FormDataType = { text: string }
type AddTextFormType = { onClick: (value: string) => void }

export const AddTextForm = (props: AddTextFormType) => {
    const onSubmit = (formData: FormDataType) => {
        props.onClick(formData.text)
    }
    return (
        <div className={s.textSender}>
            <TextSenderReduxForm onSubmit={onSubmit}/>
            {/*<TextArea />*/}
        </div>
    )
}
const MaxLength10 = maxLengthCreator(30)
const TextSenderForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.input}>
                <Field
                    placeholder={'text'}
                    name={'text'}
                    component={TextArea}
                    // кастомные компоненты пишем с большой буквы без кавычек
                    validate={[
                        requiredField,
                        MaxLength10
                    ]}/>
            </div>
            {/*<textarea onChange={props} value={newMessageText}*/}
            {/*          placeholder="Введи новое сообщение!"></textarea>*/}
            {/*<button onClick={addMessageCallback}>Send message</button>*/}
            <div className={s.button}>
                <button>Send</button>
            </div>
        </form>
    );
};
const TextSenderReduxForm = reduxForm<FormDataType>({
    form: 'add-text'
})(TextSenderForm)