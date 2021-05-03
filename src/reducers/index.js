import {combineReducers} from 'redux';
import ActiveDarkModeReducer from './ActiveDarkModeReducer';


const allReducers = combineReducers({
    isDarkModeActive:ActiveDarkModeReducer
})

export default allReducers;

