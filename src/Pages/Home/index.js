import React from 'react';
import './styles.scss'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <h1>Home</h1>
      <p>Hello world</p>
      < Link to='/teste'>Página 2</ Link>
    </div>
  );
}

export default Home;