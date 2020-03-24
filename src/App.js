import React from 'react';
import './App.css';

import {Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = ({store}) => {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <div className="content">
                    <Navbar/>
                    <main className="main">
                        <Route path="/messages" render={() => <MessagesContainer />} />
                        <Route exact path="/profile" render={() => <Profile />} />
                    </main>
                </div>
            </div>
        </Provider>
    );
};

export default App;
