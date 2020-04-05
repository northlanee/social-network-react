import React from "react";
import s from "./NewMessage.module.css";
import {Field, reduxForm} from "redux-form";
import TextareaForm from "../../common/TextareaForm/TextareaForm";
import {maxLength, required} from "../../../helpers/validators";

const maxLength5 = maxLength(5);

const NewMessageForm = ({handleSubmit}) => {
    return (
        <form className={s.newMessage} onSubmit={handleSubmit}>
            <Field component={TextareaForm} name='message' validate={[required]} />
            <button type="submit" className={s.sumbit}>Submit</button>
        </form>
    );
};

export default reduxForm({form: 'newMessage'})(NewMessageForm);