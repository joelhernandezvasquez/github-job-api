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
            console.log(this.state.jobs)
        }

        fetchJobs();
   }

   renderJobList = () => {
    
    this.state.jobs.map(job =>{
        return(
            <div className="job-card">
            <div className="logo-container">
              <img src={job.company_logo} alt="logo"/>
            </div>

            <div className="job-details">
                <span>{job.created_at}</span>
                <span>{job.type}</span>
                <h1>{job.title}</h1>
                <h2>{job.company}</h2>
                <p>{job.location}</p>
            </div>
         </div>
        )
           
        })

   }

   
    render() {
        return (
            <div className="job-list">
               <div className="container">

                 {this.state.jobs.map(job=>{
                     return <Job dataJob = {job}/>
                 })}
               </div>
            </div>
        )
    }
}

export default JobsList;
