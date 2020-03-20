import React from 'react';
import Logo from "../../images/logo.png";

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <img className={s.logo} src={Logo} alt="logo"/>
                <span className={s.label}>Social</span>
            </div>
        </header>
    );
};

export default Header;
