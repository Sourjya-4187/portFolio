import React from 'react';
import './App.css';
import TitleCard from './components/TitleCard';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Personal from './components/Personal';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className='mainBody'>
        <TitleCard/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Personal/>
        <ContactMe/>
    </div>
    
  );
}

export default App;
