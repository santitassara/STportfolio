import React from "react";
import classes from "./HomeComponent.module.scss"
import { useThemeContext } from "../../context/ThemeContext";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import ServicesComponent from "../ServicesComponent/ServicesComponent";
import ProjectsComponent from "../ProjectsComponent/ProjectsComponent";
import ContactComponent from "../ContactComponent/ContactComponent";
import { Link as LinkScroll} from "react-scroll/modules"
export default function HomeComponent() {

  const themeContext = useThemeContext();

  const theme = themeContext.theme;
  const setTheme = themeContext.setTheme;
  console.log(theme)


  return (
    <div id="home" >

      <div  className={classes[`HomeComponent-${theme}`]}>
        <div className={classes[`HomeComponent-${theme}-text`]}>
          <span className={classes[`HomeComponent-${theme}-text-1`]}>
            Hi! I'm
          </span>         
          <span className={classes[`HomeComponent-${theme}-text-2`]}>
            Santiago Tassara
          </span>
          <span className={classes[`HomeComponent-${theme}-text-description`]}>
            A Front End React.Js and IOT Developer and I have been researching computers since the day I was born.
            When I'm not in front the computer I like to play piano and rehearse with my music band.
            I'm also a FIDE Chess player with FIDE ELO and a soccer player.
          </span>
          <div className={classes[`HomeComponent-${theme}-text-div`]} >
            
          <LinkScroll activeClass="active" spy={true} smooth={true}
           offset={0} duration={500} className={classes[`HomeComponent-${theme}-text-div-button`]} 
          to="contact">Hire Me!</LinkScroll>
            
          </div>
        </div>
        <div className={classes[`HomeComponent-${theme}-img`]}>
          <img src="./img/NicePng_wormhole-png_2306418.png" alt="" />
        </div>
        
      </div>
      <ServicesComponent/>
      <ExperienceComponent/>
      <ProjectsComponent/>
      <ContactComponent/>

    </div>
  )
}