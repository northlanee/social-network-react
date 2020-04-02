import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import PreLoader from "../common/PreLoader/PreLoader";

const Login = ({isAuth, isFetching, login}) => {
    const loginHandler = (formData) => {
        login(formData);
        console.log(formData)
    };

    if (isAuth) return <Redirect to='/profile'/>;
    if (isFetching) return <PreLoader/>;
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={loginHandler}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
};

export default connect(mapStateToProps, {login})(Login);
