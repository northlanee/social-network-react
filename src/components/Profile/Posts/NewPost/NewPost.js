import React from "react";

import s from './NewPost.module.css';

const NewPost = ({newPostValue, newPostChange, addPost}) => {

    const newPostOnChange = (e) => newPostChange(e.target.value);
    const addPostOnClick = () => addPost();

    return (
        <div className={s.newPost}>
            <textarea onChange={ newPostOnChange } value={ newPostValue } className={s.postField} cols="60" rows="3" />
            <button onClick={ addPostOnClick } type="button" className={s.sumbit}>Submit</button>
        </div>
    );
};

export default NewPost;
