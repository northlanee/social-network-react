import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux-parody/store";

const renderApp = (state, dispatch) => {
    ReactDOM.render(<App state={state} dispatch={dispatch.bind(store)} />, document.getElementById('root'));
};

store.subscribe(renderApp);

renderApp(store.getState(), store.dispatch);
