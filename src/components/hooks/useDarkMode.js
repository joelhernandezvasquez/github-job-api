
const useDarkMode = () => {


    const activeDarkModeBackground = (element) =>{
       
        element.current.classList.toggle("blackBG");
        //console.log("from the active")
       // console.log(element);
       
    }

    const removeDarkModeBackground = (element) =>{
        if(element.current === undefined)
        { 
           return;
        }
       
         element.current.classList.toggle("blackBG");
         //console.log("from the remove") 
    }


    return [activeDarkModeBackground,removeDarkModeBackground];
}

export default useDarkMode;