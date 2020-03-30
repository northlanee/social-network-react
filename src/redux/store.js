import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlware from "redux-thunk";

const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    usersReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddlware));

export default store;
