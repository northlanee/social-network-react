import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/posts-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostValue: state.postsReducer.newPostValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
