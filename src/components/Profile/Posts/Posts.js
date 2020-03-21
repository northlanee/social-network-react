import React from "react";

import s from './Posts.module.css';

import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const Posts = () => {
    const postsData = [
        {
            id: 1,
            username: 'Username',
            date: '20 March, 2020',
            message: 'Hi, how are you?'
        },
        {
            id: 2,
            username: 'Username',
            date: '20 March, 2020',
            message: 'Do you learn React?'
        }
    ];

    let postsElements = postsData.map(
        d => <li key={d.id}><Post username={d.username} date={d.date} message={d.message} /></li>
    );

    return (
        <div className="posts">
            <h2>My posts</h2>
            <NewPost/>
            <ul className={s.postsList}>
                { postsElements }
            </ul>
        </div>
    )
};

export default Posts;
