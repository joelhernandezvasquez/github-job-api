
const useDarkMode = () => {

    const activeDarkModeBackground = (element) =>{
       
      //console.log(element.current);
         if(!element.current.classList.contains("blackBG"))
            element.current.classList.add("blackBG");   
    }

    const removeDarkModeBackground = (element) =>{
        
      
      if(element.current === undefined)
        { 
         // console.log(element.current);
         return;

        }
       
        if(element.current.classList.contains("blackBG"))
        {
           element.current.classList.remove("blackBG");
           return;
        }
        
    }

    return [activeDarkModeBackground,removeDarkModeBackground];
}

export default useDarkMode;