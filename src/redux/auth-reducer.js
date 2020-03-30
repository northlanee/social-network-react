import {api} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_AUTH = 'SET_USER_AUTH';

const initialState = {
    userData: null,
    isAuth: false,
    profile: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            };
        case SET_USER_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }

};

export default authReducer;

export const setUserData = (userData) => ({type: SET_USER_DATA, userData});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserAuth = (isAuth) => ({type: SET_USER_AUTH, isAuth});

export const getAuthMe = () => {
    return (dispatch => {
        api.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));
                return data.data.id;
            }
            return null;
        }).then(id => {
            if (id) {
                api.getProfile(id).then(data => {
                    dispatch(setUserProfile(data));
                    dispatch(setUserAuth(true));
                });
            }
        });
    })
};
