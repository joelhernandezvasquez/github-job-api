import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import FilterLocation from './FilterLocation';
import WorkTypeCheckbox from './WorkTypeCheckbox';
import SearchJobResults from './SearchJobResults';
import useDimension from './hooks/useDimension';
import '../sass/components/searchFilterContainer.scss';
import '../sass/utilities.scss';

const SearchFilterContainer = ({isDarkModeActive})  =>{
    
  const viewportDimension = useDimension();


  const renderMobileSearchVersion = () =>{
      return(
        <div className={`container ${isDarkModeActive? 'blackBG': ''}`}>
        <SearchBar viewVersion = {viewportDimension.width}/>
      </div>
      )
  }

  const renderFullSearchVersion = () =>{
    return(
      <div className="container">
        <SearchBar viewVersion = {viewportDimension.width}/>
        <div className="borderLine"></div>
        <FilterLocation/>
        <div className="borderLine"></div>
        <WorkTypeCheckbox/>
        

    </div>
    )
}
  return (      
    <div>
          
          {viewportDimension.width < 768? renderMobileSearchVersion(): renderFullSearchVersion()}
       
        </div>
       
    )
}

const mapStateToProps = (state) =>
{
  return {
    isDarkModeActive:state.isDarkModeActive.isDarkModeActive
  }
}

export default connect(mapStateToProps)(SearchFilterContainer);
