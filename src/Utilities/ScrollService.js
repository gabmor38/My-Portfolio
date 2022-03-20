import { Total_Screens } from "./commonUtils";
import { Subject } from "rxjs";


export default class ScrollService {

  static ScrollHandler = new ScrollService();

  static currentScreenBoradcaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
  }

  ScrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  // ScrollToHome = () => {
  //   let homeScreen = document.getElementById("Contact Me")
  //   if(!homeScreen)  return;
  //     homeScreen.scrollIntoView({behavior: "smooth"})
  // }

  isElementinView = (element, type) => {
    let rec = element.getBoundingClientReact();
    let elementTop = rec.elementTop;
    let elementBottom = rec.elementBottom;

    let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;

      default:
        return false;
    }
  };


  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1)
      return;

    for (let screen of Total_Screens) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM)
        continue;

      let fullyVisible = this.isElementinView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementinView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {

          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name
          });
          screen['alreadyRendered'] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBoradcaster.next({
            screenInView: screen.screen_name
          });
          break;
        }
      }
    }
  };
}