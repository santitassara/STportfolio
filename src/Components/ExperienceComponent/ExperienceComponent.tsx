import { useEffect } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import classes from "./ExperienceComponent.module.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function ExperienceComponent() {

  useEffect(() => {
    AOS.init({ duration: 2000 })

  }, [])

  const themeContext = useThemeContext();

  const theme = themeContext.theme;

  return (
    <div style={{ height: "100vh" }} id="experience">
      <div className={classes[`ExperienceComponent-${theme}`]}>
        <div className={classes[`ExperienceComponent-${theme}-text`]}>
          <span className={classes[`ExperienceComponent-${theme}-text-1`]}>
            I work with this
          </span>
          <span className={classes[`ExperienceComponent-${theme}-text-2`]}>
            tools & languages
          </span>
          <span className={classes[`ExperienceComponent-${theme}-text-description`]}>
            These are the main tools, frameworks, programming languages...
            that I use every day.
          </span>
        </div>
        <div className={classes[`ExperienceComponent-${theme}-img`]}>
          <div className={classes[`ExperienceComponent-${theme}-img-jsMix`]}>
            <div className={classes[`ExperienceComponent-${theme}-img-jsMix-js`]} data-aos="fade-right" data-aos-duration="500">
              <img src="./img/JSLOGO.png" alt="jslogo" />
            </div>
            <div className={classes[`ExperienceComponent-${theme}-img-jsMix-ts`]} data-aos="fade-left" data-aos-duration="500" >
              <img src="./img/TypescriptLogo.png" alt="Tslogo" />
            </div>
          </div>
          <div className={classes[`ExperienceComponent-${theme}-img-reactMix`]}>
            <div className={classes[`ExperienceComponent-${theme}-img-reactMix-react`]} data-aos="fade-right" data-aos-duration="500"  >
              <img src="./img/reactLogo.png" alt="reactlogo" />
            </div>
            <div className={classes[`ExperienceComponent-${theme}-img-reactMix-redux`]} data-aos="fade-left" data-aos-duration="500">
              <img src="./img/ReduxLogo.png" alt="reduxlogo" />
            </div>
          </div>
          <div className={classes[`ExperienceComponent-${theme}-img-arduinoMix`]}>
            <div className={classes[`ExperienceComponent-${theme}-img-arduinoMix-cpp`]} data-aos="fade-right" data-aos-duration="500">
              <img src="./img/cppLogo.png" alt="c++logo-" />
            </div>
            <div className={classes[`ExperienceComponent-${theme}-img-arduinoMix-arduino`]} data-aos="fade-left" data-aos-duration="500">
              <img src="./img/arduino-logo.png" alt="arduinologo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}