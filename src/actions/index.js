import axios from 'axios';

export const activeDarkMode = () =>{
  
    return {
        type:'ACTIVE_DARK_MODE'
    }
} 

export const fetchJobs = () =>{
  
    return async (dispatch) =>{
        const response  = await axios("https://cors.bridged.cc/https://jobs.github.com/positions.json");
        console.log(response.data);
        dispatch({type:'FETCH_JOBS',payload:response.data})
    }
}

export const fetchJobsByTitle = (term) =>
{
    console.log("hello");
    return async(dispatch) =>{
        const response = await axios(`https://cors.bridged.cc/https://jobs.github.com/positions.json?search=${term}`)
        console.log(response.data);
        dispatch({type:'FETCH_JOBS_BY_TITLE', payload:response.data})
    }
    
     
}
