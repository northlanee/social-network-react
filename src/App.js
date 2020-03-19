import React from 'react';
import Logo from './images/logo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header-main">
                <div className="header-main-inner">
                    <img className="header-main-logo" src={Logo} alt="logo"/>
                    <span className="header-main-text">Social</span>
                </div>
            </header>
            <div className="content">
                <nav className="navbar-left">
                    <ul className="navbar-left-list">
                        <li className="navbar-left-list-item">
                            <a className="navbar-left-link" href="#">Profile</a>
                        </li>
                        <li className="navbar-left-list-item">
                            <a className="navbar-left-link" href="#">Messages</a>
                        </li>
                        <li className="navbar-left-list-item">
                            <a className="navbar-left-link" href="#">Feed</a>
                        </li>
                        <li className="navbar-left-list-item">
                            <a className="navbar-left-link" href="#">Settings</a>
                        </li>
                    </ul>
                </nav>
                <main className="main">
                    <div className="user">
                        <div className="user-image">User Image</div>
                        <div className="user-info">User Info</div>
                    </div>
                    <div className="posts">
                        <div className="posts-new">New post</div>
                        <ul className="posts-list">
                            <li className="posts-item">Post 1</li>
                            <li className="posts-item">Post 2</li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
