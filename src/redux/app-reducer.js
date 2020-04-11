import {authorize} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }

};

export default appReducer;

export const setInitialized = () => ({type: SET_INITIALIZED});

export const initializeApp = () => dispatch => {
    dispatch(authorize())
        .then(() => {
            dispatch(setInitialized());
        });
};