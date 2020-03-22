import React from 'react';

import s from './Profile.module.css';

import Posts from "./Posts/Posts";
import User from "./User/User";

const Profile = ({data, addPost, newPostChange}) => {
    return (
        <div className={s.profile}>
            <h1>UserName</h1>
            <User/>
            <Posts data={data} addPost={addPost} newPostChange={newPostChange} />
        </div>
    );
};

export default Profile;
