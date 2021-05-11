import axios from 'axios';


export const activeOverlay = () =>{
  return{
      type:'ACTIVE_OVERLAY'
  }
}

export const setSearchTerm = (term) =>{
    return{
        type:'SET_SEARCH_TERM',
        payload:term
    }
}

export const setLocation = (term) =>{
    return{
        type:'SET_LOCATION',
        payload:term
    }
}

export const setFullTimeJob = () =>{
    return{
        type:'SET_FULL_TIME_JOB',
       
    }
}




export const activeDarkMode = () =>{
  
    return {
        type:'ACTIVE_DARK_MODE'
    }
} 

export const activeMobileSearchModal = () =>{
    return {
        type:'ACTIVE_MOBILE_SEARCH_MODAL'
    }
}

export const fetchJobs = () =>{
  
    return async (dispatch) =>{
        const response  = await axios("https://cors.bridged.cc/https://jobs.github.com/positions.json");
       
        dispatch({type:'FETCH_JOBS',payload:response.data})
    }
}

export const fetchJobsByTitle = (term) =>
{
    
    return async(dispatch) =>{
        const response = await axios(`https://cors.bridged.cc/https://jobs.github.com/positions.json?search=${term}`)
         
        if(response.data.length > 0)
            dispatch({type:'FETCH_JOBS_BY_TITLE', payload:response.data})
        
            else
            dispatch({type:'ACTIVE_OVERLAY'})
    }   
}

export const fetchingJobs = (data) =>{
 
    const [term,location,isFullTime] = data;
    
     return async (dispatch) =>{
         const response = await axios.get('https://cors.bridged.cc/https://jobs.github.com/positions.json',{
             params:{
                 description: term,
                 full_time:isFullTime,
                 location:location
             }
         })

         console.log(response.data);
         
        if(response.data.length > 0)
          dispatch({type:"FETCHING_JOBS", payload:response.data})
          
          else
          dispatch({type:'ACTIVE_OVERLAY'});
     }

  
}


