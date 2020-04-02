import React from "react";

import s from './NewPost.module.css';
import NewPostForm from "./NewPostForm";

const NewPost = ({addPostHandler}) => {

    const addPost = (data) => addPostHandler(data.post);

    return (
        <div className={s.newPost}>
            <NewPostForm onSubmit={addPost}/>
        </div>
    );
};

export default NewPost;
