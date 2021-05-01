import React from 'react';
import SearchJobResults from './SearchJobResults';
import iconCheck from '../assets/desktop/icon-check.svg';
import '../sass/components/customCheckbox.scss';


const WorkTypeCheckbox = () => {
    return (
        <div className="checkbox-container container">
        <label className="checkbox">
            <span class="checkbox__input">
             <input type="checkbox" name="checkbox" />
             <span className="checkbox__control">
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
               <span class="radio__label">Full Time</span>
            </label> 

           <SearchJobResults/>
        </div>
    )
}

export default WorkTypeCheckbox;
