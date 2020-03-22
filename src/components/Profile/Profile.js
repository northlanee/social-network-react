import React from 'react';

import s from './Profile.module.css';

import Posts from "./Posts/Posts";
import User from "./User/User";

const Profile = ({data, addPost}) => {
    return (
        <div className={s.profile}>
            <h1>UserName</h1>
            <User/>
            <Posts data={data} addPost={addPost} />
        </div>
    );
};

export default Profile;
