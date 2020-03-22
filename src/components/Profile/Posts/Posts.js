import React from "react";

import s from './Posts.module.css';

import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const Posts = ({data, addPost}) => {

    let postsElements = data.map(
        d => <li key={d.id}><Post username={d.username} date={d.date} message={d.message} /></li>
    );

    return (
        <div className="posts">
            <h2>My posts</h2>
            <NewPost addPost={addPost} />
            <ul className={s.postsList}>
                { postsElements }
            </ul>
        </div>
    )
};

export default Posts;
