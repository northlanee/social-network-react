import React from "react";

import s from './Posts.module.css';

import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const Posts = () => {
    return (
        <div className="posts">
            <h2>My posts</h2>
            <NewPost/>
            <ul className={s.postsList}>
                <li><Post message="Hi, how are you?" /></li>
                <li><Post message="Do you learn React?" /></li>
            </ul>
        </div>
    )
};

export default Posts;
