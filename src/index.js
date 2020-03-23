import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

const renderApp = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch} />, document.getElementById('root'));
};

store.subscribe(() => {
    renderApp(store.getState());
});

renderApp(store.getState());
