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

               <section className="load-more-container">
                  <button className="default-btn"> Load More</button>
               </section>

            
            </div>
        )
    }
}
export default Home;
