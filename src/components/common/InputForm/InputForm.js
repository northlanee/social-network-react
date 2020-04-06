import React from "react";

import s from './InputForm.module.css';

const InputForm = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            {hasError ? <span className={s.error}>{meta.error}</span> : null}
            <input className={s.field} {...input} {...props} />
        </div>
    );
};

export default InputForm;