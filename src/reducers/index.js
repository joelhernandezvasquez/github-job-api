import {combineReducers} from 'redux';
import ActiveOverlayReducer from'./ActiveOverlayReducer';
import ActiveDarkModeReducer from './ActiveDarkModeReducer';
import ActiveMobileSearchReducer from './ActiveMobileSearchReducer';
import FetchJobsReducer from './FetchJobsReducer';


const allReducers = combineReducers({
    isOverlayActive:ActiveOverlayReducer,
    isDarkModeActive:ActiveDarkModeReducer,
    isMobileSearchOpen:ActiveMobileSearchReducer,
    jobs:FetchJobsReducer
})

export default allReducers;

