import React from 'react';
import SearchJobResults from './SearchJobResults';
import '../sass/components/customCheckbox.scss';

const WorkTypeCheckbox = () => {
    return (
        <div className="checkbox-container container">
           <input type="checkbox"/>
           <label>Full Time</label>

           <SearchJobResults/>
        </div>
    )
}

export default WorkTypeCheckbox;
