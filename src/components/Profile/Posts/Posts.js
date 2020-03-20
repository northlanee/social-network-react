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
                <li><Post/></li>
                <li><Post/></li>
            </ul>
        </div>
    )
};

export default Posts;
