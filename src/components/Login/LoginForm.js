import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} type={"text"} placeholder={'login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} type={"text"} placeholder={'password'}/>
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
