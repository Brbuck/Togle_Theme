import React from 'react';
import './style.scss'

function Header({toggleTheme}) {
  return (
      <header className='header'>
          <nav className='nav'>
              <ul>
                  <li>Home</li>
                  <li>Teste</li>
              </ul>
              <button onClick={toggleTheme}> Mudar tema</button>
          </nav>
      </header>
  );
}

export default Header;