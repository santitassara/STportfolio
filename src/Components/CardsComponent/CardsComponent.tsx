import { useThemeContext } from "../../context/ThemeContext";
import classes from "./CardsComponent.module.scss"
import { CardsInterface, PropsInterface } from "../interfaces/Interfaces";

export default function ServicesComponent(props:CardsInterface){

  console.log(props);
  
  const themeContext = useThemeContext();

  const theme = themeContext.theme;

  return(
    <div >
      <div className={classes[`CardContainer-${theme}`]}>
        <img className={classes[`CardContainer-${theme}-img`]} src={props.imgSrc} alt="cardImage" />
        <h5 className={classes[`CardContainer-${theme}-title`]} >{props.title}</h5>
        <p className={classes[`CardContainer-${theme}-text`]} >{props.text}</p>
        <button className={classes[`CardContainer-${theme}-button`]} >{props.buttonText}</button> 
      </div>
    </div>
  )
  }