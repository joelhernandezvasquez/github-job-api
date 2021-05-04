import React, { Component } from 'react';
import {connect} from 'react-redux';
import {activeDarkMode} from '../actions/index';
import IconSun from '../assets/desktop/icon-sun.svg';
import IconMoon from '../assets/desktop/icon-moon.svg';
import "../sass/main.scss";
import '../sass/components/toggle.scss';

class DarkToggleMode extends Component {
    
 
  componentDidUpdate() {
    document.querySelector("body").classList.toggle("blackBG");
  }
  render() {
  
      return (
            <div className="toogle-container">
               <img src={IconSun} alt={"image"}/> 
                 <div className="toggle-btn-container" onClick={this.props.activeDarkMode}>
                   <div className={`toggle-btn ${this.props.isDarkModeActive? 'move': ''}`} >
                   
                   </div>
                 </div>
               <img src={IconMoon} alt={"image"}/> 
         


            </div>
        )
    }
}

const mapStateToProps = (state) =>{
 return{
   isDarkModeActive:state.isDarkModeActive.isDarkModeActive
 }
}

export default connect(mapStateToProps,{activeDarkMode})(DarkToggleMode);


