import {createStore, combineReducers} from 'redux';
import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";

const reducers = combineReducers({
    postsReducer,
    messagesReducer
});

const store = createStore(reducers);

export default store;
