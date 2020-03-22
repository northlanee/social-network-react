import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux-parody/store";

const renderApp = (store) => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

store.subscribe(renderApp);

renderApp(store);
