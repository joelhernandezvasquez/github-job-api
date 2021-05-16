

const useDate = () => {
   
    const getTimePassed = (createdTime) =>
     {
         const ONE_DAY = 86400000;
         const today = new Date();
         const dayCreated = new Date(createdTime);

         const dateTimePassed = Math.round((today - dayCreated) / ONE_DAY);

         return( dateTimePassed!=0? getDaysPassedToString(dateTimePassed): getTimePassedToString(today - dayCreated));
     }
     
     const getTimePassedToString = (timePassed) =>{
       
        return timePassed >= 3600000? `${Math.trunc(timePassed/3600000)}h ago`: `${Math.trunc((timePassed/1000) / 60)}min ago`
     }

     const getDaysPassedToString = (dateTimePassed) =>{
       
        
        if(dateTimePassed > 0 && dateTimePassed < 7) // days
        {
           return `${dateTimePassed}d ago`;
        }

        if(dateTimePassed >= 7 & dateTimePassed <=30 ) // weeks
        {
          return `${Math.trunc(dateTimePassed / 7)}w ago`;
        } 

        return `${Math.trunc(dateTimePassed / 30)}mo ago`;
     }

     return getTimePassed;
}

export default useDate
