import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addPostHandler, newPostChange} from "./redux-parody/state";

export const renderApp = (state) => {
    ReactDOM.render(<App state={state} addPost={addPostHandler} newPostChange={newPostChange} />, document.getElementById('root'));
};
