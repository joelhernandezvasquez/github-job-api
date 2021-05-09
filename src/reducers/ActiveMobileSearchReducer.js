
const initialState = {
    isMobileSearchOpen:false
}


const ActiveMobileSearchReducer = (state=initialState,action) =>
{
    switch (action.type) {
        case 'ACTIVE_MOBILE_SEARCH_MODAL':return{
          ...state,
          isMobileSearchOpen: !state.isMobileSearchOpen
        }
    
        default:
            return state;
    }
}

export default ActiveMobileSearchReducer;