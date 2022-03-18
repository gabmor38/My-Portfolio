import React from 'react';
import { Total_Screens, Get_Screen_Index  } from '../../../Utilities/commonUtils';
import ScrollService from '../../../Utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import { isFulfilled } from 'q';

export default function Header() {

  const [selectedScreen, setSelectedScreen]  = useState(0);
  const [showHeaderOptions, setHeaderOptions] = useState(false);

  //function to updateScreen
  const UpdateCurrentScreen = (currentScreen) => {
    if(!currentScreen || !currentScreen.screenInView)
      return;
    let screenIndex = Get_Screen_Index(currentScreen.screenInView)
     if(screenIndex < 0)
     return;
  }

  let currentScreenSubscription = ScrollService.currentScreenBoradcaster.subscribe(UpdateCurrentScreen)

  return (
    <>
    <div>

    </div>
    
    </>
  );
}
