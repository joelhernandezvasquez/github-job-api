import React from 'react';
import {connect} from 'react-redux';
import {fetchJobsByTitle,activeMobileSearchModal,setSearchTerm} from '../actions/index';
import IconFilter from '../assets/mobile/icon-filter.svg';
import IconFilterPath from '../assets/mobile/Path.svg';
import IconSearch from '../assets/mobile/search.svg';
import IconSearchDesktop from '../assets/desktop/icon-search.svg';
import '../sass/utilities.scss';
import '../sass/components/searchBar.scss';
import useDarkMode from './hooks/useDarkMode';
import MobileFilterSearch from './MobileFilterSearch';

const SearchBar = ({viewVersion,isDarkModeActive,isMobileSearchOpen,fetchJobsByTitle,activeMobileSearchModal,searchTerm,setSearchTerm}) => {
   
    const [changeBackgroundDarkMode] = useDarkMode();
  
  const onHandleSearch = () =>{
      fetchJobsByTitle(searchTerm)
      setSearchTerm("");
  }

  const renderMobileSearchVersion = () =>{
   
    return(
        
        <div className={`search-bar-container ${isDarkModeActive? 'blackBG':''}`}>
        <div className= "container" style={changeBackgroundDarkMode(isDarkModeActive)}> 
         
        <input 
        
        className={`main-input ${isDarkModeActive? 'blackBG':''}`} 
        type="text" 
        placeholder = "Filter by title..."
        value = {searchTerm}
        onChange = {(e)=> setSearchTerm(e.target.value)} 
        />
         
         <img id="icon-filter" 
         src={isDarkModeActive?IconFilterPath: IconFilter} 
         alt="icon"
         onClick={activeMobileSearchModal}
         />
         <div className="icon-search-box-container" onClick={onHandleSearch}>
             <img src={IconSearch} alt="icon search"/>
         </div>
        </div>
        {isMobileSearchOpen? <MobileFilterSearch/>: " "}
     </div>

     
    ) 
  }

  const renderFullScreenSearchVersion = () =>{
      return(
          <div className={`search-bar-fullScreen-container inner-spacing ${isDarkModeActive? 'blackBG': ''}`}>
             
                <img src={IconSearchDesktop} alt="search icon"/>
                <input
                 type="text" 
                 className={`main-input ${isDarkModeActive? 'blackBG': ''}`}
                  placeholder ="Filter by title..."  
                   value = {searchTerm}
                     onChange = {(e)=> setSearchTerm(e.target.value)}  
                     />
          </div>
      )
  }   
        return (
            <div>
               {viewVersion < 768? renderMobileSearchVersion(): renderFullScreenSearchVersion()} 
            </div>
        )
    
}

const mapStateToProps = (state) =>{

    return{
        isDarkModeActive: state.isDarkModeActive.isDarkModeActive,
        isMobileSearchOpen: state.isMobileSearchOpen.isMobileSearchOpen,
        searchTerm: state.searchTerm.searchTerm
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      fetchJobsByTitle: (event) => dispatch(fetchJobsByTitle(event)),
      activeMobileSearchModal: () => dispatch(activeMobileSearchModal()),
      setSearchTerm: (event) => dispatch(setSearchTerm(event))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
