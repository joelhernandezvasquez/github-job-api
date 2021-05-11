
const initialState ={
    isFullTimeJob:false
}

const setFullTimeJobReducer = (state=initialState,action) =>
{
    switch (action.type) {
        case 'SET_FULL_TIME_JOB': return {
            ...state,
            isFullTimeJob: !state.isFullTimeJob
        }
      
    
        default:
           return state; 
    }
}

export default setFullTimeJobReducer;