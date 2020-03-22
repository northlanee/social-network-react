import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

const App = ({state, addPost, newPostChange}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="content">
                    <Navbar/>
                    <main className="main">
                        <Route
                            path="/messages"
                            render={() => <Messages data={state.messagesData}/>}
                        />
                        <Route
                            exact
                            path="/profile"
                            render={() => <Profile data={state.postsData} addPost={addPost} newPostChange={newPostChange} />}
                        />
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
