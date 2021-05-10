import React from 'react';
import {connect} from 'react-redux';
import {activeOverlay,activeDarkMode} from '../actions';
import '../sass/utilities.scss';


const Error = ({activeOverlay,isDarkModeActive}) => {
    
   const getBackground = () =>{
      
     if(isDarkModeActive)
     {
         return{
             background:'#19202D',  
         }
     }
   }

   const getfont = () =>{
      
    if(isDarkModeActive)
    {
        return{
            color:'#ffffff',  
        }
    }
  }


    return (
        <div className="error-message message-container message-box" style={getBackground()}>
            
            <div className="message-header">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 <h2 style={getfont()}> No Jobs Found</h2>
            </div>
            <p style={getfont()}>Please search again....</p>
            <button className="btn default-btn" onClick={()=> activeOverlay() }> Close</button>
        </div>
    )
}
const mapStateToProps = (state) =>{
    console.log(state.isDarkModeActive)
    return{
        isDarkModeActive: state.isDarkModeActive.isDarkModeActive
    }
}

const mapDispatchToProps = (dispatch) =>{
  return{
   activeOverlay: () => dispatch(activeOverlay())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Error);
