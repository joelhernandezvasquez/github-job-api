import React, { Component } from 'react';
import {connect} from 'react-redux';
import Job from './Job';
import Overlay from './Overlay';
import Error from './Error';
import {fetchJobs} from '../actions';
import '../sass/colors.scss';
import '../sass/components/jobs.scss';

class JobsList extends Component {
   
   
    componentDidMount = () =>  { 
     this.props.fetchJobs();
     
   }

   renderJobList = () =>{
     
 
      const jobsList = this.props.jobs.filter((job,index) => index < 12);
        return (
          jobsList.map(job =>{
            return <Job dataJob={job}/>
          })
        )
          

      }

    render() {
     
        return (
            <div className="job-list">
               <div className="container">
              {this.props.isOverlayActive? <Overlay childComponent={<Error/>}/>: this.renderJobList()} 
              
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
    jobs: state.jobs.jobs,
    isOverlayActive: state.isOverlayActive.isOverlayActive
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchJobs: () => dispatch(fetchJobs())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobsList);
