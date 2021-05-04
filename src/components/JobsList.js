import React, { Component } from 'react';
import Job from './Job';
import axios from 'axios';

import '../sass/components/jobs.scss';

class JobsList extends Component {
   
  state = {
      jobs:[]
  }
  
    componentDidMount () { 
     
        const fetchJobs = async () =>{
            const response = await axios("https://cors.bridged.cc/https://jobs.github.com/positions.json");
            this.setState({jobs:response.data});
            
        }

        fetchJobs();
   }

  

   
    render() {
        const Joblist = this.state.jobs.filter((job,index) => index < 12);
        return (
            <div className="job-list">
               <div className="container">

                 {Joblist.map(job=>{
                     return <Job dataJob = {job}/>
                 })}
               </div>

               <section className="load-more-container">
                  <button className=" btn default-btn"> Load More</button>
               </section>

            </div>
        )
    }
}

export default JobsList;
