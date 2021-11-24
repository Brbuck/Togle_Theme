import React, { useState } from 'react';
import './Styles/global.scss';

import Header from './Components/Header'
import Routes from './routes'

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme) 
  }

  return (
    <div className={theme ? `App ${'dark'}` : `App ${'light'}`}>
      <Header toggleTheme={toggleTheme} />
      <Routes />
    </div >
  );
}

export default App;
