import { useThemeContext } from "../../context/ThemeContext";
import classes from "./ExperienceComponent.module.scss"

export default function ExperienceComponent(){

  const themeContext = useThemeContext();

  const theme = themeContext.theme;

  return(
    <div style={{height:"80vh"}} id="experience">
       <div  className={classes[`ExperienceComponent-${theme}`]}>
        <div className={classes[`ExperienceComponent-${theme}-text`]}>
          <span className={classes[`ExperienceComponent-${theme}-text-1`]}>
            About my
          </span>         
          <span className={classes[`ExperienceComponent-${theme}-text-2`]}>
            Services
          </span>
          <span className={classes[`ExperienceComponent-${theme}-text-description`]}>
            As Front End React.Js and IOT Developer I enjoy creating new Front End features for websites
            and creating innovating gadgets for companies and for myself.
          </span>
        </div>
        <div className={classes[`ExperienceComponent-${theme}-img`]}>
          <img src="./img/NicePng_wormhole-png_2306418.png" alt="" />
        </div>
      </div>
    </div>
  )
  }