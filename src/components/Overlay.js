import React, { Component } from 'react';
import UseDimension from './hooks/useDimension';
import Error from './/Error';
import '../sass/utilities.scss';

 const Overlay = ({childComponent}) => {

    const viewport = UseDimension();

    const getStyle = () =>{
       return{
           height:viewport.height
       }
    }
    
        return (
          
           <div className="overlay" style={getStyle()}> 
             {childComponent}
           </div>
        )
    
}
export default Overlay;
