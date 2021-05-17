import React, { Component } from 'react';
import {connect} from 'react-redux';
import Job from './Job';
import Overlay from './Overlay';
import {fetchJobs} from '../actions';
import{Link} from 'react-router-dom';
import '../sass/colors.scss';
import '../sass/components/jobs.scss';

class JobsList extends Component {
   
  state={
    numberOfRender:12
  } 

    componentDidMount = () =>  { 
     this.props.fetchJobs();
     
   }

   renderJobList = () =>{
     
      const jobsList = this.props.jobs.filter((job,index) => index < this.state.numberOfRender);
        return (
          jobsList.map(job =>{
            
            return(
              
              <Link to={{
                pathname:'/detail',
                jobInfo:{
                    dataJob:job
                   
                }
            }}>
              <Job key={job.id} dataJob={job}/>
              </Link>
            )
          })
        )
          

      }
      handleMore = () =>{
        

        if(this.state.numberOfRender <=50)
         {
          this.setState({numberOfRender: this.state.numberOfRender + 6})
          
         }
           
      }
     

    render() {
     
        return (
            <div className="job-list">
               <div className="container">
               {this.props.isOverlayActive? <Overlay/> : this.renderJobList()} 
               </div>

               <section className="load-more-container">
                  <button className=" btn default-btn" onClick ={this.handleMore}> Load More</button>
               </section>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
   console.log(state.jobs);
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
