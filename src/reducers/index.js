import {combineReducers} from 'redux';
import ActiveOverlayReducer from'./ActiveOverlayReducer';
import ActiveDarkModeReducer from './ActiveDarkModeReducer';
import FetchJobsReducer from './FetchJobsReducer';


const allReducers = combineReducers({
    isOverlayActive:ActiveOverlayReducer,
    isDarkModeActive:ActiveDarkModeReducer,
    jobs:FetchJobsReducer
})

export default allReducers;

