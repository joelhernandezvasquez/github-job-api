

const initialState = {
    isDarkModeActive:false
}

const activeDarkModeReducer = (state = initialState,action) =>
{
    switch (action.type) {
        case 'ACTIVE_DARK_MODE': return{
               ...state,
               isDarkModeActive: ! state.isDarkModeActive
           }
    
        default:
            return state;
    }
}

export default activeDarkModeReducer;

