import React from "react";

import s from './Posts.module.css';

import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

const Posts = ({store}) => {

    const state = store.getState();
    const posts = state.postsReducer.posts;

    let postsElements = posts.map(
        d => <li key={d.id}><Post username={d.username} date={d.date} message={d.message} /></li>
    );

    return (
        <div className="posts">
            <h2>My posts</h2>
            <NewPostContainer store={store} />
            <ul className={s.postsList}>
                { postsElements }
            </ul>
        </div>
    )
};

export default Posts;
