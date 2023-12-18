import { useState } from 'react';
import './App.css';
import TitleCard from './components/TitleCard';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

 let darkModeLogo = require('./images/dark-mode.png');

// const BackgroundImage = () => {
//   return (
//     <div className='backgroundImage'>
//       <img src={Logo} alt="My" />
//     </div>
//   );
// };

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
    </div>
    
  );
}

export default App;
