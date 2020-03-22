import React from "react";

import s from './NewPost.module.css';

const NewPost = ({store}) => {

    const newPostValue = store.getState().postsData.newPostValue;

    const newPostChangeHandler = e => store.newPostChange(e.target.value);
    const addPost = () => store.addPostHandler();

    return (
        <div className={s.newPost}>
            <textarea onChange={ newPostChangeHandler } value={ newPostValue } className={s.postField} cols="60" rows="3" />
            <button onClick={ addPost } type="button" className={s.sumbit}>Submit</button>
        </div>
    );
};

export default NewPost;
