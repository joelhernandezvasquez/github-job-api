import React from 'react';
import {connect} from 'react-redux';
import {fetchingJobs,setSearchTerm,activeMobileSearchModal,setLocation,setFullTimeJob} from '../actions/index';
import '../sass/utilities.scss';


const SearchJobResults = ({viewportWidth,activeMobileSearchModal,searchTerm,setSearchTerm,location,setLocation,isFullTimeJob,setFullTimeJob,fetchingJobs}) => {
    
    const onHandleSearch = () =>{
            fetchingJobs([searchTerm,location,isFullTimeJob]);
            setSearchTerm(""); 
            setLocation("");
            setFullTimeJob();
            document.querySelector(".ch").checked = false;
            
            if(viewportWidth < 768)
            {
                activeMobileSearchModal();  
            }
    }
    return (
        <div>
            
            <button className="btn default-btn" onClick={()=> onHandleSearch()}>Search</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    
    return{
        searchTerm: state.searchTerm.searchTerm,
        location: state.location.location,
        isFullTimeJob: state.isFullTimeJob.isFullTimeJob
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchingJobs: (event) => dispatch(fetchingJobs(event)),
        setSearchTerm: (event) => dispatch(setSearchTerm(event)),
        setLocation: (event) => dispatch(setLocation(event)),
        setFullTimeJob: () => dispatch(setFullTimeJob()),
        activeMobileSearchModal: () => dispatch(activeMobileSearchModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchJobResults);
