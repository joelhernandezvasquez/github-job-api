import React, { useEffect } from 'react';
import Error from './Error';
import UseDimension from './hooks/useDimension';
import '../sass/utilities.scss';

 const Overlay = () => {

    const viewport = UseDimension();
   
    const getStyle = () =>{
       return{
           height:viewport.height
       }
    }
    
        return (
          
           <div className="overlay" style={getStyle() }> 
            <Error/>
           </div>
        )
    
}
export default Overlay;
