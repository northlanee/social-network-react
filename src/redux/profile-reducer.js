import {api} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        { id: 1, username: 'Username', date: '20.3.2020', message: 'Hi, how are you?' },
        { id: 2, username: 'Username', date: '20.3.2020', message: 'Do you learn React?' }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const d = new Date();
            const newPost = {
                id: 3,
                username: 'Username',
                date: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
                message: action.post
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }

};

export const addPostHandler = (post) => ({type: ADD_POST, post});
export const setProfileInfo = (profile) => ({type: SET_PROFILE_INFO, profile});
const setStatus = status => ({type: SET_STATUS, status});

export const getStatus = (userId) => {
    return (dispatch => {
        dispatch(setStatus(''));
        api.getProfileStatus(userId).then(data => {
            dispatch(setStatus(data || ''));
        })
    })
};

export const updateStatus = (status) => {
    return (dispatch => {
        api.setProfileStatus(status).then(res => {
            if (res.resultCode === 0) dispatch(setStatus(status));
        });
    })
};

export const setProfile = (id) => {
    return (dispatch => {
        api.getProfile(id).then(data => {
            dispatch(setProfileInfo(data));
        });
    })
};

export default profileReducer;
