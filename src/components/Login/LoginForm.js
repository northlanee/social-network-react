import React from "react";
import {Field, reduxForm} from "redux-form";
import InputForm from "../common/InputForm/InputForm";
import {maxLength, required} from "../../helpers/validators";

const maxLength12 = maxLength(12);

const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={InputForm} validate={[required, maxLength12]} name={'login'} type={"text"} placeholder={'login'}/>
            </div>
            <div>
                <Field component={InputForm} validate={[required, maxLength12]} name={'password'} type={"text"} placeholder={'password'}/>
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
