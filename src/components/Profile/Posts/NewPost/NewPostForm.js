import React from "react";
import s from "./NewPost.module.css";
import {Field, reduxForm} from "redux-form";

const NewPostForm = ({handleSubmit}) => {
    return (
        <form className={s.postForm} onSubmit={handleSubmit}>
            <Field component={'textarea'} name={'post'} className={s.postField} cols="60" rows="3" />
            <button type="submit" className={s.sumbit}>Submit</button>
        </form>
    )
};

export default reduxForm({ form: 'newPost'})(NewPostForm);