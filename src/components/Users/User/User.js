import React from "react";

import s from './User.module.css';

import Userpic from './../../../images/userpic.png';
import {NavLink} from "react-router-dom";

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
                    <img src={user.photos.small || Userpic} alt="Userpic"/>
                    {followButton}
                </div>
            </div>
            <div className={s.main}>
                <NavLink to={`/profile/${user.id}`} className={s.profileLink}>
                    <b>{user.name}</b>
                </NavLink><br/>
                Status: {user.status}<br/>
                Location: {'user.location.city'}, {'user.location.country'}
            </div>
        </div>
    )
};

export default User;
