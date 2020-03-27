import Posts from "./Posts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPostValue: state.profileReducer.newPostValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
