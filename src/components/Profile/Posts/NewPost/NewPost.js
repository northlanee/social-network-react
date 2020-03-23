import React from "react";

import s from './NewPost.module.css';

const NewPost = ({state, dispatch}) => {

    const newPostChangeHandler = e => dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: e.target.value});
    const addPost = () => dispatch({ type: 'ADD-POST' });

    return (
        <div className={s.newPost}>
            <textarea onChange={ newPostChangeHandler } value={ state.newPostValue } className={s.postField} cols="60" rows="3" />
            <button onClick={ addPost } type="button" className={s.sumbit}>Submit</button>
        </div>
    );
};

export default NewPost;
