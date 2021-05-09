import React, {useRef,useState } from 'react';
import {connect} from 'react-redux';
import {fetchJobsByTitle,activeMobileSearchModal} from '../actions/index';
import IconFilter from '../assets/mobile/icon-filter.svg';
import IconFilterPath from '../assets/mobile/Path.svg';
import IconSearch from '../assets/mobile/search.svg';
import IconSearchDesktop from '../assets/desktop/icon-search.svg';
import '../sass/utilities.scss';
import '../sass/components/searchBar.scss';
import useDarkMode from './hooks/useDarkMode';
import MobileFilterSearch from './MobileFilterSearch';

const SearchBar = ({viewVersion,isDarkModeActive,isMobileSearchOpen,fetchJobsByTitle,activeMobileSearchModal}) => {
   
    const refContainer = useRef();
    const refSearchBarContainer = useRef();
    const inputRef = useRef();
    const [activeDarkModeBackground,removeDarkModeBackground] = useDarkMode();
    const [searchTerm,setSearchTerm] = useState("");
  
  const onHandleSearch = () =>{
      fetchJobsByTitle(searchTerm)
      setSearchTerm("");
  }

  const renderMobileSearchVersion = () =>{
   
    return(
        

        <div ref={refSearchBarContainer} className={`search-bar-container  ${isDarkModeActive? activeDarkModeBackground(refSearchBarContainer): removeDarkModeBackground(refSearchBarContainer)}`}>
        <div ref={refContainer} className={`container ${isDarkModeActive? activeDarkModeBackground(refContainer): removeDarkModeBackground(refContainer)}`} > 
         
        <input 
        ref={inputRef} 
        className={`main-input ${isDarkModeActive? activeDarkModeBackground(inputRef): removeDarkModeBackground(inputRef)}`} 
        type="text" 
        placeholder ="Filter by title..."
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
        {isMobileSearchOpen? <MobileFilterSearch term = {searchTerm} setTerm = {setSearchTerm}/>: " "}
     </div>

     
    ) 
  }

  const renderFullScreenSearchVersion = () =>{
      return(
          <div className="search-bar-fullScreen-container inner-spacing">
             
                <img src={IconSearchDesktop} alt="search icon"/>
                <input type="text"  className="main-input" placeholder ="Filter by title..."/>   
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
        isMobileSearchOpen: state.isMobileSearchOpen.isMobileSearchOpen
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      fetchJobsByTitle: (event) => dispatch(fetchJobsByTitle(event)),
      activeMobileSearchModal: () => dispatch(activeMobileSearchModal())
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
