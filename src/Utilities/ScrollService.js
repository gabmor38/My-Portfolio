import { Total_Screens } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static ScrollHandle = new ScrollService();

  static currentScreenBoradcaster = new Subject();

  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener('scroll', this.checkCurrentScreenViewport);
  }

  
}