import React from 'react';

const Job = ({dataJob}) => {
   
    const{company_logo,created_at,type,title,company,location} = dataJob;

    const styleLogoContainer = (image) =>{
  
        return{
            width:'50px',
            height: '50px',
            borderRadius: '15px',
            border:'1px solid red',
            backgroundImage:`url('${image}')`,
            backgroundSize:'cover',
           backgroundRepeat:'no-repeat'
        }
    }
   
    return (
        <div className="job-card">
          
            <div className="logo-container">
              <img src={company_logo} alt="logo"/> 
            </div>

            <div className="job-info-container">
            <div className="job-details">
                 {/* <span>{created_at}</span> */}
                 <div className="job-details-header">
                    <span>5h ago</span>
                    <div className="circle"> </div>
                    <span>{type}</span>
                 </div>
                
                <h1>{title}</h1>
                <h2>{company}</h2>
                <p>{location}</p> 
            </div>
            </div>
            
         </div>
            
            
    )
}

export default Job;
