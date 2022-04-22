import {useEffect} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if(screen.fadeScreen !== props.id) 
      return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const screenConstants = {
    description: "Description about yourself",
    highlights: {
      bullets: [
        "1",
        "2",
        "3",
        "4",
      ],
      heading: "Title of highlights"
    }
  }

  const renderHighlights= () => {
    return (
      screenConstants.highlights.bullets.map((value, i) =>{ 
        <div className="highlight" key={i} >
          <div className="highlight-blob"> 
            <span>{value}</span>
          </div>
        </div>
      } )
    ) 
  }



  return (
    <>
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
        <div className="about-me-card">
          <div className="about-me-profile">
            <div className="about-me-details">
              <span className="about-me-description">{screenConstants.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
