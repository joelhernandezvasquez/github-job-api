import React from 'react';
import {connect} from 'react-redux';
import {setFullTimeJob} from '../actions/index';
import useDarkMode from './hooks/useDarkMode';
import '../sass/utilities.scss';
import '../sass/components/customCheckbox.scss';


const WorkTypeCheckbox = ({typeJob,isDarkModeActive,setFullTimeJob}) => {

    const [changeFontDarkMode] = useDarkMode();

    return (
        <div className="checkbox-container inner-spacing">
        <label className="checkbox">
            <span class="checkbox__input">
             <input type="checkbox" name="checkbox"
              onChange={(e)=> setFullTimeJob()}
              
             />
             <span className={`checkbox__control ${isDarkModeActive? 'blackBG': ''}`}>
             <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#FFF"
                    stroke-width="2"
                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
      </svg>
               </span>
               </span>
               <span class="radio__label" style={changeFontDarkMode(isDarkModeActive)}> {typeJob}</span>
            </label> 

          
        </div>
    )
}

const mapStateToProps =(state) =>{
    return{
     isDarkModeActive:state.isDarkModeActive.isDarkModeActive,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      setFullTimeJob: () => dispatch(setFullTimeJob())
    }
  }

export default  connect(mapStateToProps,mapDispatchToProps)(WorkTypeCheckbox);
