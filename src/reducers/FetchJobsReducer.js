
const initialState = {
  jobs:[]
}

const FetchJobsReducer = (state =initialState,action) =>
{
   switch (action.type) {
       case 'FETCH_JOBS': return {
       ...state,
        jobs:action.payload
       }

       case 'FETCH_JOBS_BY_TITLE': return{
         ...state,
         jobs:action.payload
       }

       case 'FETCHING_JOBS':return{
         ...state,
         jobs:action.payload
       }
        
       

       default:
           return state;
   }
}

export default FetchJobsReducer;