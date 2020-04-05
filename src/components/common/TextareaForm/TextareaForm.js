import React from "react";

import s from './TextareaForm.module.css';

const TextareaForm = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            {hasError ? <span className={s.error}>{meta.error}</span> : null}
            <textarea className={s.field} {...input} {...props} cols="60" rows="3" />
        </div>
    );
};

export default TextareaForm;