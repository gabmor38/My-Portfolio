import Home from '../components/Home/Home'


export const Total_Screens = [
  {
    screen_name: "Home",
    component: Home,
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