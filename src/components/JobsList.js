import React, { Component } from 'react';
import {connect} from 'react-redux';
import Job from './Job';
import {fetchJobs} from '../actions';
import '../sass/colors.scss';
import '../sass/components/jobs.scss';

class JobsList extends Component {
   

    componentDidMount = () =>  { 
     this.props.fetchJobs();
   }

    render() {
        const joblist = this.props.jobs.filter((job,index) => index < 12);
        
        return (
            <div className="job-list">
               <div className="container">
            
                 {joblist.map(job=>{
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

const mapStateToProps = (state) =>{
 
    return{
    jobs: state.jobs.jobs
  }
}

export default connect(mapStateToProps,{fetchJobs})(JobsList);
