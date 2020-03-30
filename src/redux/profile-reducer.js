import {api} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

const initialState = {
    posts: [
        { id: 1, username: 'Username', date: '20.3.2020', message: 'Hi, how are you?' },
        { id: 2, username: 'Username', date: '20.3.2020', message: 'Do you learn React?' }
    ],
    newPostValue: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const d = new Date();
            const newPost = {
                id: 3,
                username: 'Username',
                date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
                message: state.newPostValue
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostValue: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostValue: action.newText
            };
        case SET_PROFILE_INFO:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setProfileInfo = (profile) => ({type: SET_PROFILE_INFO, profile});

export const setProfile = (id) => {
    return (dispatch => {
        api.getProfile(id).then(data => {
            dispatch(setProfileInfo(data));
        });
    })
};

export default profileReducer;
