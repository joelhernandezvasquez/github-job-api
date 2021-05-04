
const useDarkMode = () => {


    const activeDarkModeBackground = (element) =>{
       
        element.current.classList.toggle("blackBG");
       
    }

    const removeDarkModeBackground = (element) =>{
        if(element.current === undefined)
        {
           return;
        }
         element.current.classList.toggle("blackBG");
    }


    return [activeDarkModeBackground,removeDarkModeBackground];
}

export default useDarkMode;