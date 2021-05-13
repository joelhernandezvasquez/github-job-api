import React from 'react';
import {connect} from 'react-redux';
import useDarkMode from './hooks/useDarkMode';
import '../sass/utilities.scss';

const Job = ({dataJob,isDarkModeActive}) => {
   
    const{company_logo,created_at,type,title,company,location} = dataJob;
    const [changeBackgroundDarkMode,changeFontDarkMode] = useDarkMode();

    
     const getTimePassed = (createdTime) =>
     {
         const ONE_DAY = 86400000;
         const today = new Date();
         const dayCreated = new Date(createdTime);

         const dateTimePassed = Math.round((today - dayCreated) / ONE_DAY);

         return( dateTimePassed!=0? getDaysPassedToString(dateTimePassed): getTimePassedToString(today - dayCreated));
     }

     const getTimePassedToString = (timePassed) =>{
       
        return timePassed >= 3600000? `${Math.trunc(timePassed/3600000)}h ago`: `${Math.trunc((timePassed/1000) / 60)}min ago`
     }

     const getDaysPassedToString = (dateTimePassed) =>{
       
        
        if(dateTimePassed > 0 && dateTimePassed < 7) // days
        {
           return `${dateTimePassed}d ago`;
        }

        if(dateTimePassed >= 7 & dateTimePassed <=30 ) // weeks
        {
          return `${Math.trunc(dateTimePassed / 7)}w ago`;
        } 

        return `${Math.trunc(dateTimePassed / 30)}mo ago`;


     }
   
    return (
       
      
       <div  className="job-card" style={changeBackgroundDarkMode(isDarkModeActive)}>
          
            <div className="logo-container">
              <img src={company_logo} alt="logo"/> 
            </div>

            <div className="job-info-container">
            <div className="job-details">
               
                 <div className="job-details-header">
                    <span> {getTimePassed(created_at)}</span>
                    <div className="circle"> </div>
                    <span>{type}</span>
                 </div>
                
                <h1 style={changeFontDarkMode(isDarkModeActive)}> {title}</h1>
                <h2>{company}</h2>
                <p>{location}</p> 
            </div>
            </div>
            
         </div>
            
            
    )
}

const mapStateToProps = (state) =>{
    return{
      isDarkModeActive: state.isDarkModeActive.isDarkModeActive
    }
}
export default connect(mapStateToProps)(Job);
