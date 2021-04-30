import React from 'react';
import SearchBar from './SearchBar';
import FilterLocation from './FilterLocation';
import WorkTypeCheckbox from './WorkTypeCheckbox';
import SearchJobResults from './SearchJobResults';
import useDimension from './hooks/useDimension';
import '../sass/components/searchFilterContainer.scss';

const SearchFilterContainer = ()  =>{
    
  const viewportDimension = useDimension();

  const renderMobileSearchVersion = () =>{
      return(
        <div className="container">
        <SearchBar viewVersion = {viewportDimension.width}/>
      </div>
      )
  }

  const renderFullSearchVersion = () =>{
    return(
      <div className="container">
        <SearchBar viewVersion = {viewportDimension.width}/>
        <FilterLocation/>
        <WorkTypeCheckbox/>
        

    </div>
    )
}
  return (      
    <div className="searchFilterContainer">
          
          {viewportDimension.width < 768? renderMobileSearchVersion(): renderFullSearchVersion()}
       
        </div>
       
    )
}

export default SearchFilterContainer;
