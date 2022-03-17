import { Total_Screens } from "./commonUtils";
import { Subject } from "rxjs";
import { getElementById } from "domutils";

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

  
  
}