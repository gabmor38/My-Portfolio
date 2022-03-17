import { Total_Screens } from "./commonUtils";
import { Subject } from "rxjs";
import { getElementById } from "domutils";
import { object } from "prop-types";

export default class ScrollService {
  static ScrollHandle = new ScrollService();

  static currentScreenBoradcaster = new Subject();

  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener('scroll', this.checkCurrentScreenViewport);
  }

  ScrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me")
    if(!contactMeScreen)  return;
      contactMeScreen.scrollIntoView({behavior: "smooth"})
  }

  ScrollToHome = () => {
    let homeScreen = document.getElementById("Contact Me")
    if(!homeScreen)  return;
      homeScreen.scrollIntoView({behavior: "smooth"})
  }

  isElementinView = (element, type) => {
    let rec = element.getBoundingClientReact();
    let elementTop = rec.elementTop;
    let elementBottom = rec.elementBottom;
    let partiallyVisible = elementTop < window.innerHeight && elementBottom >=0;
    let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch(type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;
          default:
            return false
    }
  }


  checkCurrentScreenViewport = (event) => {
    if(!event || object.keys(event).length < 1)
      return;
    for (let screen of Total_Screens ) {
      let screenFromDom = document.getElementById(screen.screen_name)
      if(!screenFromDom)
        continue;

        let fullyVisible = this.isElementinView(screenFromDom, "complete");
        let partiallyVisible = this.isElementinView(screenFromDom, "partial");

        if (fullyVisible || partiallyVisible) {
          if(partiallyVisible && !screen.alreadyRendered) {
            
          }

        }
      
    }
  }
}