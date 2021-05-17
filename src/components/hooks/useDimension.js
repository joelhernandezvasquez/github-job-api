import {useState,useEffect} from 'react';

const useDimension = () => {
    
    const [windowScreen,setWindowScreen] =  useState({
        width:undefined,
        height:undefined
    })

    const handleResize = () =>{
        
       setTimeout(()=>{
        setWindowScreen({
            width:window.screen.width,
            height:window.screen.height 
         })   
       },100)
       
    }
    
    useEffect(()=>{
        
        window.addEventListener("load",handleResize);
        window.addEventListener("resize",handleResize);
        
        handleResize();

        return () =>{
           window.removeEventListener("resize",handleResize); 
        }

    },[])

   return windowScreen;
}

export default useDimension


