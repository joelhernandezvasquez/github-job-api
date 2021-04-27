import React, { Component } from 'react';
import SearchFilterContainer from './SearchFilterContainer';
import "../sass/main.scss";


class Home extends Component {
    render() {
        return (
            <div className="home">
              
               <div className="search-filter-container">
                    <SearchFilterContainer/>
               </div>
             
            </div>
        )
    }
}
export default Home;
