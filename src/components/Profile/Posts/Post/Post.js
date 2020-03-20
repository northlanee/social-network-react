import React from "react";

import Userpic from './../../../../images/userpic.png';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.userpic}>
                <img src={Userpic} alt="Userpic"/>
            </div>
            <div className={s.content}>
                <span className={s.userName}>UserName</span>
                <span>Message</span>
                <span className={s.date}>20 March, 2020</span>
            </div>
        </div>
    );
};

export default Post;
