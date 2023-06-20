import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from "./NavBarComponent.module.scss"
import { useThemeContext } from '../../context/ThemeContext';
import ReactSwitch from 'react-switch';
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Link as LinkScroll} from "react-scroll/modules"

export default function NavBarComponent() {

  const themeContext = useThemeContext();

  const theme = themeContext.theme;
  const setTheme = themeContext.setTheme;
  const toggleTheme = ()=> {
    setTheme((curr:string)=>(curr === "light" ? "dark" : "light"))
  }


  return (
    
      <Navbar className={classes[`NavBarComponent-${theme}`]}>
        <Container className={classes[`NavBarComponent-${theme}-container`]}>
          <LinkScroll activeClass="active" spy={true} smooth={true}
           offset={0} duration={500} className={classes[`NavBarComponent-${theme}-container-brand`]} 
          to="home">Santiago</LinkScroll>
          <Nav className={classes[`NavBarComponent-${theme}-container-nav`]}>
            <LinkScroll activeClass="active" spy={true} smooth={true} 
            offset={0} duration={500} className={classes[`NavBarComponent-${theme}-container-nav-link`]}
             to="home">Home</LinkScroll>
            <LinkScroll activeClass="active" spy={true} smooth={true}
             offset={0} duration={500} className={classes[`NavBarComponent-${theme}-container-nav-link`]} 
            to="services">Services</LinkScroll>
            <LinkScroll activeClass="active" spy={true} smooth={true}
             offset={0} duration={500} className={classes[`NavBarComponent-${theme}-container-nav-link`]} 
            to="experience">Experience</LinkScroll>
            <LinkScroll activeClass="active" spy={true} smooth={true} 
            offset={0} duration={500} className={classes[`NavBarComponent-${theme}-container-nav-link`]}
             to="projects">Projects</LinkScroll>
          </Nav>
          <div>
            <ReactSwitch  
            offColor="#000000"
            onColor="#ffffff"
            borderRadius={6}
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 20,
                  borderRadius:6,
                  backgroundColor:"#000000"
                }}
              >
                
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "black",
                  paddingRight: 2
                }}
              >
                <BsFillMoonStarsFill/>
              </div>
            }
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "white",
                  paddingRight: 2
                }}
              >
                <BsFillBrightnessHighFill/>
              </div>
            }
            onChange={toggleTheme} 
            checked={theme==="dark"}
            
             />
          </div>
        </Container>
      </Navbar>
   
  );
}

