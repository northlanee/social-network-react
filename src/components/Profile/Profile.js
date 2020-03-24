import React from 'react';

import s from './Profile.module.css';

import Posts from "./Posts/Posts";
import User from "./User/User";

const Profile = ({store}) => {
    return (
        <div className={s.profile}>
            <h1>UserName</h1>
            <User/>
            <Posts store={store} />
        </div>
    );
};

export default Profile;
