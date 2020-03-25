import {createStore, combineReducers} from 'redux';
import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    postsReducer,
    messagesReducer,
    usersReducer
});

const store = createStore(reducers);

export default store;
