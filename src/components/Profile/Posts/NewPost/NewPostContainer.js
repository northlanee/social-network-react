import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/posts-reducer";
import NewPost from "./NewPost";

const NewPostContainer = ({store}) => {

    const state = store.getState();
    const newPostValue = state.postsReducer.newPostValue;

    const newPostChangeHandler = text => store.dispatch(updateNewPostTextActionCreator(text));
    const addPostHandler = () => store.dispatch(addPostActionCreator());

    return <NewPost newPostChange={newPostChangeHandler} newPostValue={newPostValue} addPost={addPostHandler} />
};

export default NewPostContainer;
