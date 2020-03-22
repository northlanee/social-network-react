import React from "react";

import s from './NewPost.module.css';

const NewPost = ({addPost}) => {

    let newPostRef = React.createRef();

    const addPostHandler = () => {
        addPost(newPostRef.current.value);
    };

    return (
        <div className={s.newPost}>
            <textarea ref={newPostRef} className={s.postField} cols="60" rows="3" />
            <button onClick={ addPostHandler } type="button" className={s.sumbit}>Submit</button>
        </div>
    );
};

export default NewPost;
