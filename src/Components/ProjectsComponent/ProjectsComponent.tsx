import { useThemeContext } from "../../context/ThemeContext";
import classes from "./ProjectsComponent.module.scss"

export default function ProjectsComponent(){

  const themeContext = useThemeContext();

  const theme = themeContext.theme;

  return(
    <div style={{height:"80vh"}} id="projects">
       <div  className={classes[`ProjectsComponent-${theme}`]}>
        <div className={classes[`ProjectsComponent-${theme}-text`]}>
          <span className={classes[`ProjectsComponent-${theme}-text-1`]}>
            About my
          </span>         
          <span className={classes[`ProjectsComponent-${theme}-text-2`]}>
            Services
          </span>
          <span className={classes[`ProjectsComponent-${theme}-text-description`]}>
            As Front End React.Js and IOT Developer I enjoy creating new Front End features for websites
            and creating innovating gadgets for companies and for myself.
          </span>
        </div>
        <div className={classes[`ProjectsComponent-${theme}-img`]}>
          <img src="./img/NicePng_wormhole-png_2306418.png" alt="" />
        </div>
      </div>
    </div>
  )
  }