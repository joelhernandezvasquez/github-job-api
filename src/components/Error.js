import React from 'react';
import {connect} from 'react-redux';
import {activeOverlay} from '../actions';
import '../sass/utilities.scss';

const Error = ({activeOverlay}) => {
    
    return (
        <div className="error-message message-container">
            
            <div className="message-header">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 <h2> No Jobs Found</h2>
            </div>
            <p>Please search again....</p>
            <button className="btn default-btn" onClick={()=> activeOverlay() }> Close</button>
        </div>
    )
}
const mapStateToProps = (state) =>{
   
    return{}
}

const mapDispatchToProps = (dispatch) =>{
  return{
   activeOverlay: () => dispatch(activeOverlay())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Error);
