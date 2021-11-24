import React from 'react';
import './styles.scss'

import {Link} from 'react-router-dom'

function Teste() {
  return (
      <div className='teste'>
          <h1>Teste</h1>
          <p>TESTE</p>
          <Link to='/'>Página Home</Link>
      </div>
  );
}

export default Teste;