import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
