import React from 'react';
import './App.css';

import {Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = ({store}) => {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <div className="content">
                    <Navbar/>
                    <main className="main">
                        <Route path="/messages" render={ () => <MessagesContainer /> } />
                        <Route path="/people" render={ () => <UsersContainer /> } />
                        <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
                    </main>
                </div>
            </div>
        </Provider>
    );
};

export default App;
