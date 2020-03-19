import React from 'react';

const Navbar = () => {
    return (
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
    );
};

export default Navbar;
