import React from "react";
import Poster from './../../../images/poster.jpg';

import s from './User.module.css';

const User = () => {
    return (
        <div className={s.user}>
            <div className={s.poster}>
                <img src={Poster} alt="poster"/>
            </div>
            <div className="info">User Info</div>
        </div>
    );
};

export default User;
