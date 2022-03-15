import React from 'react';
import { Total_Screens } from '../Utilities/commonUtils';


export default function PortfolioContainer() {

  const mapAllScreens = () => {
    return (
      Total_Screens.map((screen) => (
        (screen.component) ? <screen.component screenName={ screen.screen_name } 
        key={ screen.screen_name} 
        id={screen.screen_name} /> : <div key={ screen.screen_name }></div>
      ))
    )
  }

  return (

      <div className="profile_container"> {mapAllScreens()}</div>

  );
}
