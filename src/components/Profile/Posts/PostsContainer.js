import Posts from "./Posts";
import {connect} from "react-redux";
import {addPostHandler} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts
    }
};

const PostsContainer = connect(mapStateToProps, {addPostHandler})(Posts);

export default PostsContainer;
