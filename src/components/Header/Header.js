import React from 'react';
import Logo from "../../images/logo.png";

import s from './Header.module.css';

const Header = ({isAuth}) => {
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.logoGroup}>
                    <img className={s.logo} src={Logo} alt="logo"/>
                    <span className={s.label}>Social</span>
                </div>
                {isAuth ? 'authed' : 'login'}
            </div>
        </header>
    );
};

export default Header;
