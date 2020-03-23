const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const postsReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            const d = new Date();
            const newPost = {
                id: 3,
                username: 'Username',
                date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
                message: state.newPostValue
            };
            state.posts.push(newPost);
            state.newPostValue = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostValue = action.newText;
            break;
    }

    return state;
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default postsReducer;
