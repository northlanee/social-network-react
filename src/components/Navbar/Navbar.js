import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                <li className={s.list}>
                    <NavLink className={s.link} to="/profile" activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.list}>
                    <NavLink className={s.link} to="/messages" activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.list}>
                    <a className={s.link}>Feed</a>
                </li>
                <li className={s.list}>
                    <a className={s.link}>Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
