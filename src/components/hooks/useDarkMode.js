

const useDarkMode = () => {

  const changeBackgroundDarkMode = (isDarkModeActive) =>{
   
    if(isDarkModeActive)
      return{
          background:'#19202D',
          borderRadius:'6px',
          color:'#ffffff'
          
      }
  
  }

  const changeFontDarkMode = (isDarkModeActive) =>{
      if(isDarkModeActive)
      return{
        color:'#ffffff'
      }
  }

 

  const getWhiteBG = (isDarkModeActive) =>{
    if(isDarkModeActive)
      return{
        background:'#ffffff'
      }
  }

  
    return[changeBackgroundDarkMode,changeFontDarkMode,getWhiteBG];
}



export default useDarkMode;