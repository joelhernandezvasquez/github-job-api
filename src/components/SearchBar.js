import React, { Component } from 'react';
import IconFilter from '../assets/mobile/icon-filter.svg';
import IconSearch from '../assets/mobile/search.svg';
import '../sass/components/searchBar.scss';

class SearchBar extends Component {
   
   getStyle = () =>{
      
   }
    render() {
        return (
            <div style={this.getStyle()} className="search-bar-container">
               <div className="container">
               <input type="text" placeholder ="Filter by title..."/>
                <img id="icon-filter" src={IconFilter} alt="icon"/>
                <div className="icon-search-box-container">
                    <img src={IconSearch} alt="icon search"/>
                </div>
               </div>
              
               
            </div>
        )
    }
}

export default SearchBar;
