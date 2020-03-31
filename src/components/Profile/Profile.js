import React from 'react';

import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({profile}) => {
    return (
        <div className={s.profile}>
            <h1>{profile.fullName}</h1>
            <ProfileInfo profile={profile} />
            <PostsContainer />
        </div>
    );
};

export default Profile;
