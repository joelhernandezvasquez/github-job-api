import {combineReducers} from 'redux';
import ActiveOverlayReducer from'./ActiveOverlayReducer';
import ActiveDarkModeReducer from './ActiveDarkModeReducer';
import ActiveMobileSearchReducer from './ActiveMobileSearchReducer';
import FetchJobsReducer from './FetchJobsReducer';
import setSearchTermReducer from './SetSearchTermReducer';
import setLocationReducer from './SetLocationReducer';
import  setFullTimeJobReducer from './SetFullTimeJobReducer';


const allReducers = combineReducers({
    isOverlayActive:ActiveOverlayReducer,
    isDarkModeActive:ActiveDarkModeReducer,
    isMobileSearchOpen:ActiveMobileSearchReducer,
    jobs:FetchJobsReducer,
    searchTerm:setSearchTermReducer,
    location:setLocationReducer,
    isFullTimeJob:setFullTimeJobReducer
})

export default allReducers;

