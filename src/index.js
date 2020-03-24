import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

const renderApp = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
        , document.getElementById('root'));
};

store.subscribe(() => {
    renderApp();
});

renderApp();
