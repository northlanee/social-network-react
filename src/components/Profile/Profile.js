import React from 'react';

import s from './Profile.module.css';

import Posts from "./Posts/Posts";
import User from "./User/User";

const Profile = ({state, dispatch}) => {
    return (
        <div className={s.profile}>
            <h1>UserName</h1>
            <User/>
            <Posts state={state} dispatch={dispatch} />
        </div>
    );
};

export default Profile;
