import React, { useState, useEffect } from 'react';
import './Styles/global.scss';

import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Routes from './routes'


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('Theme') === 'true');

  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    localStorage.setItem('Theme', theme);
  }, [theme]);

  return (

    <div className={theme ? `App dark` : `App light`}>
      <Header toggleTheme={toggleTheme} />
      <SideBar  />

      <Routes />
    </div >
  );
}

export default App;
