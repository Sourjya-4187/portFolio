import { useState } from 'react';
import './App.css';
import TitleCard from './components/TitleCard';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Personal from './components/Personal';
import ContactMe from './components/ContactMe';

 let darkModeLogo = require('./images/dark-mode.png');

function App() {
  const [isdarkModeEnabled,setIsDarkModeEnabled] = useState(true);
  return (
    <div className={isdarkModeEnabled ? 'mainBodyDark' : 'mainBodyWhite'}>
        <img 
          className='dark-mode-icons' 
          src={darkModeLogo} 
          alt='Dark Mode Logo' 
          onClick={()=>(isdarkModeEnabled === true)?setIsDarkModeEnabled(false):setIsDarkModeEnabled(true)}/>
        <TitleCard darkMode={isdarkModeEnabled}/>
        <AboutMe darkMode={isdarkModeEnabled}/>
        <Skills/>
        <Projects/>
        <Personal/>
        <ContactMe/>
    </div>
    
  );
}

export default App;
