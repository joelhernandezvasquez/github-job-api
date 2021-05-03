import React, { Component } from 'react';
import SearchFilterContainer from './SearchFilterContainer';
import JobsList from './JobsList';
import "../sass/main.scss";


class Home extends Component {
    render() {
        return (
            <div className="home">
              
               <section className="search-filter-container">
                    <SearchFilterContainer/>
               </section>

               <section className="job-list-container">
                  <JobsList/>
               </section>

              
            
            </div>
        )
    }
}
export default Home;
