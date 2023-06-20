import React from 'react';
import Home from './Pages/Home';
import './App.scss';
import { ThemeContextProvider } from './context/ThemeContext';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import ServicesComponent from './Components/ServicesComponent/ServicesComponent';
import ExperienceComponent from './Components/ExperienceComponent/ExperienceComponent';
import ProjectsComponent from './Components/ProjectsComponent/ProjectsComponent';
function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<ServicesComponent />} />
          <Route path="/Experience" element={<ExperienceComponent />} />
          <Route path="/Projects" element={<ProjectsComponent />} />
        </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </ThemeContextProvider>
    
  );
}

export default App;
