import {useState,useRef,useEffect } from 'react';
import {connect} from 'react-redux';
import UseDimension from './hooks/useDimension';
import useDarkMode from './hooks/useDarkMode';
import {activeMobileSearchModal,fetchingJobs} from '../actions/index';
import IconLocation from '../assets/desktop/icon-location.svg';
import "../sass/utilities.scss";
import '../sass/components/filterLocation.scss';
import '../sass/components/customCheckbox.scss';


const MobileFilterSearch = ({activeMobileSearchModal,fetchingJobs,term,setTerm,isDarkModeActive}) => {
    
    const [location,setLocation] = useState("");
    const [isFullTime,setIsFullTime] = useState(false);
    const viewport = UseDimension();
    const [changeBackgroundDarkMode,changeFontDarkMode,getWhiteBG] = useDarkMode();
   

    useEffect(() => {
        document.querySelector(".overlay").addEventListener("click",(event) =>{
        
        
          if(event.target.classList.contains("overlay"))
          {
            
            activeMobileSearchModal(); 
          }
       
     })
  }, [])
    const getStyle = () =>{
       return{
           height:viewport.height
       }
    }

    
     const onHandleSearch = () =>{

        fetchingJobs([term,location,isFullTime]);
        setTerm("");
        activeMobileSearchModal();
           
     }
        return (
            
            <div className="overlay" style={getStyle()}>
                <div className="mobile-filter-search message-container message-box" style={changeBackgroundDarkMode(isDarkModeActive)} >
                
                <div className="filter-location-container inner-spacing">
                    <img src={IconLocation} alt="icon location"/>
                    <input type="text" 
                     className={`main-input ${isDarkModeActive? 'blackBG': ''}`}
                    
                     placeholder ="Filter by location..." 
                     value={location}
                     onChange={(e)=> setLocation(e.target.value)}
                     
                    />
                </div>

                <div className="line"/>

                <div className="checkbox-container inner-spacing">
                    <label className="checkbox">
                        <span class="checkbox__input">
                        <input type="checkbox" name="checkbox"  onChange={(e)=>setIsFullTime(!isFullTime)} />
                        <span className="checkbox__control" style={getWhiteBG(isDarkModeActive)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                <path
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke="#FFF"
                                    stroke-width="2"
                                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                                    />
                                </svg>
                            </span>
                        </span>
                        <span class="radio__label" style={changeFontDarkMode(isDarkModeActive)}>Full Time Only </span>
                </label> 

          </div>


                <button className="btn default-btn" onClick={()=> onHandleSearch()}>Search</button>
                
            </div>  
            </div>
             
        )
    
}
const mapStateToProps = (state) =>{
   console.log(state.jobs);
    return{
        isDarkModeActive: state.isDarkModeActive.isDarkModeActive
    } 
}

const mapDispatchToProps = dispatch =>{
    return{
        activeMobileSearchModal:() => dispatch(activeMobileSearchModal()),
        fetchingJobs: (event) =>  dispatch(fetchingJobs(event)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MobileFilterSearch);
