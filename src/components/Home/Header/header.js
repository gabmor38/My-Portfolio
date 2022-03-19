import { useState, useEffect } from 'react';
import { Total_Screens, Get_Screen_Index  } from '../../../Utilities/commonUtils';
import ScrollService from '../../../Utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
// import { isFulfilled } from 'q';



const Header = () =>  {

  const [selectedScreen, setSelectedScreen]  = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  //function to updateScreen
  const UpdateCurrentScreen = (currentScreen) => {
    if(!currentScreen || !currentScreen.screenInView)
      return;
    let screenIndex = Get_Screen_Index(currentScreen.screenInView)
     if(screenIndex < 0)
     return;
  }

  let currentScreenSubscription = ScrollService.currentScreenBoradcaster.subscribe(UpdateCurrentScreen)

  //function to update navbar names dynamically

  const getHeaderOptions = () => {
    return (
      Total_Screens.map((screen, i) => {
        <div 
          key={screen.screen_name}
          className={getHeaderOptionsClass(i)}
          onClick={()=> switchScreen(i, screen)}>
            <span>{screen.screen_name}</span>
        </div>
      })
    )
  }

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < Total_Screens.length -1)
    classes += "header-option-seperator"

    if( selectedScreen === index)
    classes += "selected-header-option";
    return
  }


  const switchScreen = (index, screen) => {

    let screenComponent = document.getElementById(screen.screen_name)
    if(!screenComponent)
      return
      screenComponent.scrollIntoView({ behavior: "smooth"});
      setSelectedScreen(index);
      setShowHeaderOptions(false);
  };

  return (
    <>
    <div className='header-option' onClick = {() => setShowHeaderOptions(!showHeaderOptions)}>
        <div className="header-parent">
          <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars}/>
          </div>
          <div className='header-logo'>
            <span>GMR</span>
          </div>
          <div className={showHeaderOptions ? "header-options show-hamburger-options" : "header-options"}>
            {getHeaderOptions}
          </div>

        </div>

    </div>
    
    </>
  );
}
export default Header;
