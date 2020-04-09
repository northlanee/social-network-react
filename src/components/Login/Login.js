import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = ({isAuth, login}) => {
    const loginHandler = (formData) => {
        login(formData);
    };

    if (isAuth) return <Redirect to='/profile'/>;
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={loginHandler}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {login})(Login);
