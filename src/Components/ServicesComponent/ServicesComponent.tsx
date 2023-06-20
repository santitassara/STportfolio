import { useThemeContext } from "../../context/ThemeContext";
import CardsComponent from "../CardsComponent/CardsComponent";
import classes from "./ServicesComponent.module.scss"
import data from "../../Data/data.json"
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css'

export default function ServicesComponent() {

  useEffect(() => {
    AOS.init({duration:2000})
    
  }, [])
  
  
  const { props } = data;
  const themeContext = useThemeContext();
  
  const theme = themeContext.theme;
  console.log(props)


  return (
    <div style={{ height: "150vh" }} id="services">
      <div className={classes[`ServicesComponent-${theme}`]}>
        <div className={classes[`ServicesComponent-${theme}-text`]}>
          <span className={classes[`ServicesComponent-${theme}-text-1`]}>
            About my
          </span>
          <span className={classes[`ServicesComponent-${theme}-text-2`]}>
            Services
          </span>
          <span className={classes[`ServicesComponent-${theme}-text-description`]}>
            As Front End React.Js and IOT Developer I enjoy creating new Front End features for websites
            and creating innovating gadgets for companies and for myself.
          </span>
        </div>
        <div className={classes[`ServicesComponent-${theme}-cards`]}>
          <div className={classes[`ServicesComponent-${theme}-cards-fe`]} data-aos="fade-left" >
            <CardsComponent {...props.FEProps} />
          </div>
          <div className={classes[`ServicesComponent-${theme}-cards-iot`]} data-aos="fade-left" >
            <CardsComponent {...props.IOTProps} />
          </div>
        </div>
      </div>
    </div>
  )
}