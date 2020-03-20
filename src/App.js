import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="content">
                    <Navbar/>
                    <main className="main">
                        <Route path="/messages" component={Messages} />
                        <Route exact path="/profile" component={Profile} />
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
