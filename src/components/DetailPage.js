import React,{useRef,useLayoutEffect} from 'react';
import '../sass/utilities.scss';
import '../sass/detail-page.scss';

const DetailPage = (props) => {
   

   const job = props.location.jobInfo
   const jobDescriptionRef = useRef();
   console.log(job);

   useLayoutEffect(() => {
    
    jobDescriptionRef.current.innerHTML = job.dataJob.description;
     
    //jobDescriptionRef.current.querySelectorAll("p")
   }, [])
   
    
    return (
        <div class="detail-page-wrapper">
            <div className="container-detail">
            <div className="header container">
                <div className="logo-container">
                   <img src={job.dataJob.company_logo} alt="logo"/>
                </div>
                <div className="header-details">
                     <h2> {job.dataJob.company}</h2> 
                      <a className="btn secondary-default-btn" href={job.dataJob.company_url}> Company Site </a>
                     
                </div>
           </div>

           <div className="job-details-container container top-spacing">
                <div className="job-header-container">
                    <div className="job-header-info">
                        <div class="info">
                            <span> 1w ago</span>
                            <div className="circle"> </div>
                            <span>{job.dataJob.type}</span>
                         </div>

                         <h1> {job.dataJob.title} </h1>
                         <p>{job.dataJob.location}</p>
                           
                    </div>

                     <a className="btn default-btn" href={job.dataJob.url}>Apply Now</a> 

                </div>

                <div ref={jobDescriptionRef} className="job-description-container top-spacing">
                    
                </div> 
            </div>
            </div>

            
           
        </div>
    )
}
export default DetailPage;
