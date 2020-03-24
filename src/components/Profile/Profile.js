import React from 'react';

import s from './Profile.module.css';

import User from "./User/User";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <h1>UserName</h1>
            <User/>
            <PostsContainer />
        </div>
    );
};

export default Profile;
