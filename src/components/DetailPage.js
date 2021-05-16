import React,{useRef,useLayoutEffect} from 'react';
import {connect} from 'react-redux';
import '../sass/utilities.scss';
import '../sass/detail-page.scss';
import useDimension from './hooks/useDimension';
import useDate from './hooks/useDate';
import useDarkMode from './hooks/useDarkMode';

const DetailPage = (props) => {
   
   const viewport = useDimension();
   const job = props.location.jobInfo
   const jobDescriptionRef = useRef();
   const howApplyDescription = useRef();
   const getTimePassed = useDate();
   const [changeFontDarkMode] = useDarkMode();
   console.log(job);

   useLayoutEffect(() => {
    
    jobDescriptionRef.current.innerHTML = job.dataJob.description;
    howApplyDescription.current.innerHTML = job.dataJob.how_to_apply;

    const links = document.querySelectorAll("a");
  
    links.forEach((link=>{
        link.setAttribute("target","blank");
    }))

    
    changeTitleColor();

   }, [])


   const changeTitleColor = () =>{
    const paragraps = document.querySelectorAll("p > strong");
    const headings = document.querySelectorAll("h1");

   paragraps.forEach((p=>{
      if(props.isDarkModeActive) 
         p.style.color = "white";
   
   }))


   }

  

   const renderCompanyBtn = () =>{
       if( viewport.width < 767)
       {
           return(
            <a className={`btn ${props.isDarkModeActive?'secondary-default-btn': 'default-btn'}`} href={job.dataJob.company_url}> Company Site </a>
           )
       }
       else
       {
           return(
        <a className={`btn ${props.isDarkModeActive? 'ternary-default-btn':  'secondary-default-btn'}`} href={job.dataJob.company_url}> Company Site </a>
           )   
    }
   }

    const renderFooter = () =>{

        if(viewport.width < 768)
        {
            return (
                <a  className="btn default-btn" href={job.dataJob.url} >Apply Now</a>
            )   
        }

        else{
            return (
               <div className="inner-container">
                 <h2 style={changeFontDarkMode(props.isDarkModeActive)}>{job.dataJob.company}</h2>
                 
                <a className="btn default-btn" href={job.dataJob.url} >Apply Now</a>
               </div>
                
                
            )
        }
    }
   
    
    return (
        <section class="detail-page-wrapper">
            <div className="container-detail">
            <div className={`header container ${props.isDarkModeActive? 'blackBG':''}`}>
                <div className="logo-container">
                   <img src={job.dataJob.company_logo} alt="logo"/>
                </div>
                <div className="header-details">
                     <h2 style={changeFontDarkMode(props.isDarkModeActive)}> {job.dataJob.company}</h2> 
                      {renderCompanyBtn()}
                     
                </div>
           </div>

           <section className={`job-details-container container top-spacing ${props.isDarkModeActive? 'blackBG': ''}`}>
                <div className="job-header-container">
                    <div className="job-header-info">
                        <div class="info">
                            <span> {getTimePassed(job.dataJob.created_at)}</span>
                            <div className="circle"> </div>
                            <span>{job.dataJob.type}</span>
                         </div>

                         <h1 style={changeFontDarkMode(props.isDarkModeActive)}> {job.dataJob.title} </h1>
                         <p>{job.dataJob.location}</p>
                           
                    </div>

                     <a className="btn default-btn" href={job.dataJob.url}>Apply Now</a> 

                </div>

                <div ref={jobDescriptionRef} className="job-description-container top-spacing">
               
                </div> 
            </section>

          <section className="apply-container container top-spacing ">
            <h2> How to Apply</h2>
            <div className="apply-details top-spacing">
            <p>
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu 
                pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, 
                adipiscing varius, adipiscing in, lacinia vel, tellus.
            </p>
             <p ref={howApplyDescription}> </p>
            </div>
          </section>

          <section className={`job-details-footer ${props.isDarkModeActive? 'blackBG': ''}`}>
            <div className="container">
            {renderFooter()}
           
            </div>
             
          </section>

      </div>
</section>
     
    )
}

const mapStateToProps = (state) =>{
  return{
    isDarkModeActive: state.isDarkModeActive.isDarkModeActive
  }
}
export default connect(mapStateToProps) (DetailPage);
