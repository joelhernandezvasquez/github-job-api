import React from 'react';
import DarkToggleMode from './DarkToggleMode';
import logo from '../assets/desktop/logo.svg';
import '../sass/main.scss';
import '../sass/main-header.scss';

const Header = () => {
    return (
        <div className="main-header">
          <div className="container">
            <img src={logo} alt="image"/>
            <DarkToggleMode/>
          </div>
        </div>
    )
}

export default Header;
