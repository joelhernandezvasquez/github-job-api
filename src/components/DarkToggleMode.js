import React, { Component } from 'react';
import IconSun from '../assets/desktop/icon-sun.svg';
import IconMoon from '../assets/desktop/icon-moon.svg';
import '../sass/components/toggle.scss';

class DarkToggleMode extends Component {
    render() {
        return (
            <div className="toogle-container">
               <img src={IconSun} alt={"image"}/> 
                 <div className="toggle-btn-container">
                   <div className="toggle-btn">

                   </div>
                 </div>
               <img src={IconMoon} alt={"image"}/> 


            </div>
        )
    }
}

export default DarkToggleMode
