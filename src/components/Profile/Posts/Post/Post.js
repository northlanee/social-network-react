import React from "react";

import Userpic from './../../../../images/userpic.png';
import s from './Post.module.css';

const Post = ({username, date, message}) => {
    return (
        <div className={s.post}>
            <div className={s.userpic}>
                <img src={Userpic} alt="Userpic"/>
            </div>
            <div className={s.content}>
                <span className={s.userName}>{username}</span>
                <span className={s.message}>{message}</span>
                <span className={s.date}>{date}</span>
            </div>
        </div>
    );
};

export default Post;
