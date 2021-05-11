import {useState,useRef,useEffect } from 'react';
import {connect} from 'react-redux';
import UseDimension from './hooks/useDimension';
import useDarkMode from './hooks/useDarkMode';
import {activeMobileSearchModal,fetchingJobs,setSearchTerm,setLocation} from '../actions/index';
import FilterLocation from './FilterLocation';
import "../sass/utilities.scss";
import '../sass/components/filterLocation.scss';
import '../sass/components/customCheckbox.scss';
import WorkTypeCheckbox from './WorkTypeCheckbox';
import SearchJobResults from './SearchJobResults'



const MobileFilterSearch = ({activeMobileSearchModal,fetchingJobs,searchTerm,setSearchTerm,isDarkModeActive}) => {
    
    const viewport = UseDimension();
    const [changeBackgroundDarkMode,changeFontDarkMode,getWhiteBG] = useDarkMode();
   

    useEffect(() => {
       
        document.querySelector(".overlay").addEventListener("click",(event) =>{

            if(event.target.classList.contains("overlay"))
                activeMobileSearchModal(); 
     })
  }, [])
    const getStyle = () =>{
       return{
           height:viewport.height
       }
    }
   
        return (
            
            <div className="overlay" style={getStyle()}>
                <div className="mobile-filter-search message-container message-box" style={changeBackgroundDarkMode(isDarkModeActive)} >
                
                <FilterLocation/>

                <div className="line"/>

                <WorkTypeCheckbox typeJob={"Full Time Only"}/>


               < SearchJobResults viewportWidth={viewport.width}/>
                
            </div>  
            </div>
             
        )
    
}
const mapStateToProps = (state) =>{
   console.log(state.jobs);
    return{
        isDarkModeActive: state.isDarkModeActive.isDarkModeActive,
    } 
}

const mapDispatchToProps = dispatch =>{
    return{
        activeMobileSearchModal:() => dispatch(activeMobileSearchModal()),
        fetchingJobs: (event) =>  dispatch(fetchingJobs(event)) ,
     
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MobileFilterSearch);
