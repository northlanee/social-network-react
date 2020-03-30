import React from 'react';
import './App.css';

import {Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from "./components/Navbar/Navbar";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = ({store}) => {
    return (
        <Provider store={store}>
            <div className="App">
                <HeaderContainer/>
                <div className="content">
                    <Navbar/>
                    <main className="main">
                        <Route path="/messages" render={ () => <MessagesContainer /> } />
                        <Route path="/people" render={ () => <UsersContainer /> } />
                        <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
                        <Route exact path="/login" render={ () => <Login /> } />
                    </main>
                </div>
            </div>
        </Provider>
    );
};

export default App;
