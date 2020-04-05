import React from "react";
import s from "./NewPost.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../helpers/validators";
import TextareaForm from "../../../common/TextareaForm/TextareaForm";

const maxLength5 = maxLength(5);

const NewPostForm = ({handleSubmit}) => {
    return (
        <form className={s.postForm} onSubmit={handleSubmit}>
            <Field component={TextareaForm} name='post' validate={[required, maxLength5]} />
            <button type="submit" className={s.sumbit}>Submit</button>
        </form>
    )
};

export default reduxForm({ form: 'newPost'})(NewPostForm);