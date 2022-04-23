import Home from '../components/Home/Home'
import AboutMe from '../components/AboutMe/AboutMe';
import Resume from '../components/Resume/Resume';


export const Total_Screens = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },


];

export const Get_Screen_Index = (screen_name) => {

  if(!screen_name) 
    return -1;

  for (let i = 0; i < Total_Screens.length; i++) {
    if (Total_Screens[i].screen_name === screen_name) 
      return i;
  }
    return -1;
}