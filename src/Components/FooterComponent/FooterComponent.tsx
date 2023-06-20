import classes from "./FooterComponent.module.scss"
import { useThemeContext } from "../../context/ThemeContext";

export default function FooterComponent() {

  const themeContext = useThemeContext();

  const theme = themeContext.theme;


  return (
    
      <div className={classes[`FooterComponent-${theme}`]}>
        <div className={classes[`FooterComponent-${theme}-img`]}>
         <img src={theme === "light" ? "./img/InIconBk.png" : "./img/icons8-linkedin-50 (2).png"} alt="Linkedin Icon" />
         <img src={theme === "light" ? "./img/GHIBk.png" : "./img/GHIWh.png"} alt="GitHub Icon" />
        </div>
      </div>
    
  )
}