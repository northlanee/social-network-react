import React from "react";
import {Field, reduxForm} from "redux-form";
import InputForm from "../common/InputForm/InputForm";
import {maxLength, required} from "../../helpers/validators";
import s from './../common/InputForm/InputForm.module.css';

const maxLength30 = maxLength(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error ? <div className={s.error}>{error}</div> : null }
            <div>
                <Field component={InputForm} validate={[required, maxLength30]} name={'login'} type={"text"} placeholder={'login'}/>
            </div>
            <div>
                <Field component={InputForm} validate={[required, maxLength30]} name={'password'} type={"text"} placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'login', // Unique form name
})(LoginForm);
