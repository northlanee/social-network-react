import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

const renderApp = (store) => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

store.subscribe(() => {
    renderApp(store);
});

renderApp(store);
