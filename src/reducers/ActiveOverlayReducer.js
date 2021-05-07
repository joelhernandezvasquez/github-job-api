
const initialState ={
    isOverlayActive:false
}

const ActiveOverlayReducer = (state=initialState,action) =>
{
    switch (action.type) {
        case 'ACTIVE_OVERLAY': return {
            ...state,
            isOverlayActive: !state.isOverlayActive
        }
      
    
        default:
           return state; 
    }
}

export default ActiveOverlayReducer;