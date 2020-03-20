import React from 'react';

import s from './Profile.module.css';

import Posts from "./Posts/Posts";
import User from "./User/User";

const Profile = () => {
    return (
        <main className={s.profile}>
            <h1>UserName</h1>
            <User/>
            <Posts/>
        </main>
    );
};

export default Profile;
