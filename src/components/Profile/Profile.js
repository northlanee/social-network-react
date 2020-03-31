import React from 'react';

import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({profile, status, updateStatus}) => {
    return (
        <div className={s.profile}>
            <h1>{profile.fullName}</h1>
            <ProfileInfo status={status} profile={profile} updateStatus={updateStatus} />
            <PostsContainer />
        </div>
    );
};

export default Profile;
