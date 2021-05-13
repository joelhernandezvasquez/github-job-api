import React, { useEffect,useRef } from 'react';
import {connect} from 'react-redux';
import Error from './Error';
import {activeOverlay} from '../actions';
import UseDimension from './hooks/useDimension';

import '../sass/utilities.scss';

 const Overlay = ({activeOverlay}) => {

    const viewport = UseDimension();


    useEffect(() => {
         
      document.querySelector(".overlay").addEventListener("click",(event) =>{
          
            if(event.target.classList.contains("overlay"))
            {
               activeOverlay();
            }
         
       })
    }, [])
   
    const getStyle = () =>{
       return{
           height:viewport.height
       }
    }
    
        return (
          
           <div  className="overlay" style={getStyle()  }> 
            <Error/>
           </div>
        )
    
}
const mapStateToProps = (state) =>{
   return{}
}

const mapDispatchToProps = (dispatch) =>{
  return{
     activeOverlay : () => dispatch(activeOverlay())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Overlay);
