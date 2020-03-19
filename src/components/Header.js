import React from 'react';
import Logo from "../images/logo.png";

const Header = () => {
    return (
        <header className="header-main">
            <div className="header-main-inner">
                <img className="header-main-logo" src={Logo} alt="logo"/>
                <span className="header-main-text">Social</span>
            </div>
        </header>
    );
};

export default Header;
