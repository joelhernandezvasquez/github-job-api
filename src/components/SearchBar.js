import React, { Component } from 'react';
import IconFilter from '../assets/mobile/icon-filter.svg';
import IconSearch from '../assets/mobile/search.svg';
import IconSearchDesktop from '../assets/desktop/icon-search.svg';
import '../sass/utilities.scss';
import '../sass/components/searchBar.scss';

class SearchBar extends Component {
   
  renderMobileSearchVersion = () =>{
    return(
        <div className="search-bar-container">
        <div className="container">
        <input type="text" className="main-input" placeholder ="Filter by title..."/>
         <img id="icon-filter" src={IconFilter} alt="icon"/>
         <div className="icon-search-box-container">
             <img src={IconSearch} alt="icon search"/>
         </div>
        </div>
        
     </div>
    ) 
  }

  renderFullScreenSearchVersion = () =>{
      return(
          <div className="search-bar-fullScreen-container inner-spacing">
             
                <img src={IconSearchDesktop} alt="search icon"/>
                <input type="text"  className="main-input" placeholder ="Filter by title..."/> 
            
            
          </div>
      )
  }
    render() {
       
        return (
            <div>
               {this.props.viewVersion < 768? this.renderMobileSearchVersion(): this.renderFullScreenSearchVersion()} 
            </div>
        )
    }
}

export default SearchBar;
