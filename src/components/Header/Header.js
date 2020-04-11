import React from 'react';
import Logo from "../../images/logo.png";
import Userpic from './../../images/userpic.png';

import s from './Header.module.css';

const Header = ({isAuth, login}) => {

    let loginBox = 'log in';

    if (isAuth) {
        loginBox = <div className={s.authBox}>
            {login}
        </div>;
    }
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.logoGroup}>
                    <img className={s.logo} src={Logo} alt="logo"/>
                    <span className={s.label}>Social</span>
                </div>
                {loginBox}
            </div>
        </header>
    );
};

export default Header;
