import React from 'react';

import s from './Profile.module.css';

const Profile = () => {
    return (
        <main className={s.profile}>
            <div className="user">
                <div className="user-image">User Image</div>
                <div className="user-info">User Info</div>
            </div>
            <div className="posts">
                <div className="posts-new">New post</div>
                <ul className="posts-list">
                    <li className="posts-item">Post 1</li>
                    <li className="posts-item">Post 2</li>
                </ul>
            </div>
        </main>
    );
};

export default Profile;
