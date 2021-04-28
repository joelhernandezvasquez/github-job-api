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
            console.log(this.state.jobs);
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
            </div>
        )
    }
}

export default JobsList;
