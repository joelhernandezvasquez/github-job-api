import React, { Component } from 'react';
import SearchFilterContainer from './SearchFilterContainer';
import "../sass/main.scss";


class Home extends Component {
    render() {
        return (
            <div>
              
               <div className="search-filter-container container">
                    <SearchFilterContainer/>
               </div>
             
            </div>
        )
    }
}
export default Home;
