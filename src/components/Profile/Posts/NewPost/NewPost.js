import React from "react";

import s from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={s.newPost}>
            <textarea className={s.postField} cols="60" rows="3" />
            <button type="button" className={s.sumbit}>Submit</button>
        </div>
    );
};

export default NewPost;
