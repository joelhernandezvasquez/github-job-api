import {combineReducers} from 'redux';
import ActiveDarkModeReducer from './ActiveDarkModeReducer';
import FetchJobsReducer from './FetchJobsReducer';


const allReducers = combineReducers({
    isDarkModeActive:ActiveDarkModeReducer,
    jobs:FetchJobsReducer
})

export default allReducers;

