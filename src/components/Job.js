import React from 'react';
import {connect} from 'react-redux';
import useDarkMode from './hooks/useDarkMode';
import useDate from './hooks/useDate';
import '../sass/utilities.scss';

const Job = ({dataJob,isDarkModeActive}) => {
   
    const{company_logo,created_at,type,title,company,location} = dataJob;
    const [changeBackgroundDarkMode,changeFontDarkMode] = useDarkMode();
    const getTimePassed = useDate();

    
   
   
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
