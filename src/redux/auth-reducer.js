const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userData: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData,
                isAuth: action.isAuth
            };
        default:
            return state;
    }

};

export default authReducer;

export const setUserData = (userData, isAuth) => ({type: SET_USER_DATA, userData, isAuth});
