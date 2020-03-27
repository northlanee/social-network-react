import React from 'react';

import s from './Profile.module.css';

import User from "./User/User";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({profile}) => {
    return (
        <div className={s.profile}>
            <h1>{profile.fullName}</h1>
            <User profile={profile} />
            <PostsContainer />
        </div>
    );
};

export default Profile;
