import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addPostHandler} from "./redux-parody/state";

export const renderApp = (state) => {
    ReactDOM.render(<App state={state} addPost={addPostHandler} />, document.getElementById('root'));
};
