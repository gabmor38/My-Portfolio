import React from 'react';
import { Total_Screens, Get_Screen_Index  } from '../../../Utilities/commonUtils';
import ScrollService from '../../../Utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import { isFulfilled } from 'q';

export default function Header() {

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
        <div className={getHeaderOptions(i)}
          key={screen.screen_name}
          onClick={()=> switchScreen(i, screen)}
          >
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
    classes += "selected-header-option"
    return
  }

  const swithScreen = (index, screeen) => {
    let screenComponent = document.getElementById(screeen.screen_name);
    if(!screenComponent)
      return;

      screenComponent.scrollIntoView({ behavior: "smooth"});
      setSelectedScreen(index);
      setShowHeaderOptions(false);
  };

  return (
    <>
    <div>
      
    </div>
    
    </>
  );
}
