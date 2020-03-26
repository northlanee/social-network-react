import React from "react";

import s from './User.module.css';

import Userpic from './../../../images/userpic.png';

const User = ({user, follow, unfollow}) => {

    const followOnClick = () => follow(user.id);
    const unfollowOnClick = () => unfollow(user.id);

    const followButton = user.followed
                        ? <button onClick={unfollowOnClick} className={`${s.fButton} ${s.unfollow}`}>Unfollow</button>
                        : <button onClick={followOnClick} className={`${s.fButton} ${s.follow}`}>Follow</button>;

    return (
        <div className={s.user}>
            <div className={s.left}>
                <div className={s.userpicContainer}>
                    <img src={Userpic} alt="Userpic"/>
                    {followButton}
                </div>
            </div>
            <div className={s.main}>
                <b>{user.name}</b><br/>
                Status: {user.status}<br/>
                Location: {'user.location.city'}, {'user.location.country'}
            </div>
        </div>
    )
};

export default User;
