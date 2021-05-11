import React from 'react';
import {connect} from 'react-redux';
import {setLocation} from '../actions/index';
import IconLocation from '../assets/desktop/icon-location.svg';
import '../sass/utilities.scss';
import '../sass/components/filterLocation.scss';

const FilterLocation = ({isDarkModeActive,location,setLocation}) => {
    return (
        <div className="filter-location-container inner-spacing">
            <img src={IconLocation} alt="icon location"/>
             <input type="text"  
             className={`main-input ${isDarkModeActive? 'blackBG': ''}`}
             placeholder ="Filter by location..."
             value={location}
             onChange = {(e)=> setLocation(e.target.value)}
             />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        isDarkModeActive: state.isDarkModeActive.isDarkModeActive,
        location:state.location.location
    }
}

const mapDispatchToProps =  (dispatch) =>{
    return{
        setLocation:(event) => dispatch(setLocation(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterLocation);
