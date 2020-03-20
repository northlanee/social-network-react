import React from 'react';

import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                <li className={s.list}>
                    <a className={s.link} href="#">Profile</a>
                </li>
                <li className={s.list}>
                    <a className={s.link} href="#">Messages</a>
                </li>
                <li className={s.list}>
                    <a className={s.link} href="#">Feed</a>
                </li>
                <li className={s.list}>
                    <a className={s.link} href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
