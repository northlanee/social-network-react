import React from "react";

import s from './User.module.css';

import Userpic from './../../../images/userpic.png';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followAPI} from "../../../api/api";

const User = ({user, follow, unfollow}) => {

    const followOnClick = () => {
        axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + user.id, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "a6426442-a76a-4274-89e9-fbfb192a808b"
            }
        }).then(response => {
            if (response.data.resultCode === 0) {
                follow(user.id);
            }
        });
    };
    const unfollowOnClick = () => {
        axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + user.id, {
            withCredentials: true,
            headers: {
                "API-KEY": "a6426442-a76a-4274-89e9-fbfb192a808b"
            }
        }).then(response => {
            if (response.data.resultCode === 0) {
                unfollow(user.id);
            }
        });
    };

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
