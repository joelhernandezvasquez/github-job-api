
const useDarkMode = () => {

    const activeDarkModeBackground = (element) =>{
       
         if(!element.current.classList.contains("blackBG"))
            element.current.classList.add("blackBG");   
    }

    const removeDarkModeBackground = (element) =>{
        if(element.current === undefined)
        { 
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