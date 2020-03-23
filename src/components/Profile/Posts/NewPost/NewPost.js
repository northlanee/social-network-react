import React from "react";

import s from './NewPost.module.css';

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux-parody/store";

const NewPost = ({state, dispatch}) => {

    const newPostChangeHandler = e => dispatch(updateNewPostTextActionCreator(e.target.value));
    const addPost = () => dispatch(addPostActionCreator());

    return (
        <div className={s.newPost}>
            <textarea onChange={ newPostChangeHandler } value={ state.newPostValue } className={s.postField} cols="60" rows="3" />
            <button onClick={ addPost } type="button" className={s.sumbit}>Submit</button>
        </div>
    );
};

export default NewPost;
