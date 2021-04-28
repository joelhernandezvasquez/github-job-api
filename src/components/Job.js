import React from 'react';

const Job = ({dataJob}) => {
   
    const{company_logo,created_at,type,title,company,location} = dataJob;
   
    return (
        <div className="job-card">
          
            <div className="logo-container">
              {/* { <img src={company_logo} alt="logo"/>} */}
            </div>

            <div className="job-details">
                 <span>{created_at}</span>
                <span>{type}</span>
                <h1>{title}</h1>
                <h2>{company}</h2>
                <p>{location}</p> 
            </div>
         </div>
            
            
    )
}

export default Job;
