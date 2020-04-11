import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddlware));

export default store;
