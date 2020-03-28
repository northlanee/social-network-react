import {createStore, combineReducers} from 'redux';
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    usersReducer,
    auth: authReducer
});

const store = createStore(reducers);

export default store;
