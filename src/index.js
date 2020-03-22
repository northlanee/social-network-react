import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import state, {addPostHandler} from "./redux-parody/state";

ReactDOM.render(<App state={state} addPost={addPostHandler} />, document.getElementById('root'));
