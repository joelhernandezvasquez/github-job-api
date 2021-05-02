import React from 'react';
import IconLocation from '../assets/desktop/icon-location.svg';
import '../sass/utilities.scss';
import '../sass/components/filterLocation.scss';

const FilterLocation = () => {
    return (
        <div className="filter-location-container inner-spacing">
            <img src={IconLocation} alt="icon location"/>
             <input type="text"  className="main-input" placeholder ="Filter by location..."/>
        </div>
    )
}

export default FilterLocation;
