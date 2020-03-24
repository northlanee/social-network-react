const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 1, username: 'Username', date: '20.3.2020', message: 'Hi, how are you?' },
        { id: 2, username: 'Username', date: '20.3.2020', message: 'Do you learn React?' }
    ],
    newPostValue: ''
};

const postsReducer = (state = initialState, action) => {

    const stateCopy = {...state};

    switch (action.type) {
        case ADD_POST:
            stateCopy.posts = [...state.posts];
            const d = new Date();
            const newPost = {
                id: 3,
                username: 'Username',
                date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
                message: state.newPostValue
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostValue = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostValue = action.newText;
            break;
    }

    return stateCopy;
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
