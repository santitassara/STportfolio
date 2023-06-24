import { useEffect } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import classes from "./ExperienceComponent.module.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link as LinkScroll } from "react-scroll/modules"
import data from "../../Data/data.json"

export default function ExperienceComponent() {

  useEffect(() => {
    AOS.init({ duration: 2000 })

  }, [])

  console.log(Object.values(data.props.FEProps.languages));
  const feLangs = Object.values(data.props.FEProps.languages).slice()
  const iotLangs = Object.values(data.props.IOTProps.languages)
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
          <div className={classes[`ExperienceComponent-${theme}-text-div`]} >

            <LinkScroll activeClass="active" spy={true} smooth={true}
              offset={0} duration={500} className={classes[`ExperienceComponent-${theme}-text-div-button`]}
              to="contact">Hire Me!</LinkScroll>
          </div>

        </div>
          <div className={classes[`ExperienceComponent-${theme}-img`]}>
            <div className={classes[`ExperienceComponent-${theme}-img-jsMix`]}>
              {feLangs.slice(2,4).map((e) => <div className={classes[`ExperienceComponent-${theme}-img-jsMix-js`]} data-aos="fade-right" data-aos-duration="500" ><img src={e.Img} alt={e.Alt} /></div>)}
            </div>
            <div className={classes[`ExperienceComponent-${theme}-img-jsMix`]}>
              {feLangs.slice(0,2).map((e) => <div className={classes[`ExperienceComponent-${theme}-img-jsMix-js`]} data-aos="fade-right" data-aos-duration="500" ><img src={e.Img} alt={e.Alt} /></div>)}
            </div>
            <div className={classes[`ExperienceComponent-${theme}-img-arduinoMix`]}>
            {iotLangs.map((e) => <div className={classes[`ExperienceComponent-${theme}-img-jsMix-js`]} data-aos="fade-right" data-aos-duration="500" ><img src={e.Img} alt={e.Alt} /></div>)}

            </div>
          </div>
      </div>
    </div>
  )
}

{/* <div className={classes[`ExperienceComponent-${theme}-img-jsMix`]}>
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
          </div> */}