import React from 'react';
import DarkToggleMode from './DarkToggleMode';
import useDimension from './hooks/useDimension';
import logo from '../assets/desktop/logo.svg';
import mobileHeaderBG from '../assets/mobile/bg-pattern-header.svg';
import tabletHeaderBG from '../assets/tablet/bg-pattern-header.svg';
import desktopHeaderBG from '../assets/desktop/bg-pattern-header.svg';
import '../sass/main.scss';
import '../sass/main-header.scss';

const Header = () => {
    
  const viewportSize = useDimension()

  const getBackground = () =>{
    
    if(viewportSize.width < 767)
    {
      return{
        backgroundImage:`url('${mobileHeaderBG}')`,
        height:'136px'
      }
    }

    if(viewportSize.width === 768)
    {
      return{
        backgroundImage:`url('${tabletHeaderBG}')`,
        height:'160px'
       
      }
    }

    if(viewportSize.width >768)
    {
      return{
        backgroundImage:`url('${desktopHeaderBG}')`,
        height:'160px'
      }
    }

    
  }

  return (
        <div className="main-header" style={getBackground()}>
          <div className="container">
            <img src={logo} alt="logo"/>
            <DarkToggleMode/>
          </div>
         
        </div>
    )
}

export default Header;
