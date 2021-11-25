import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom'

import { useAuth } from '../../context/authContext'

function Header({ toggleTheme }) {
    const { click, setClick } = useAuth()

    function changeSidebar() {
        setClick(!click)
    }
    return (
        <header className='header'>
            <nav className='nav'>
                <ul>
                    <li className='menu' onClick={changeSidebar}>☰</li>
                    <li> <Link to='/'>Página Home</Link></li>
                    <li> <Link to='/teste'>Página Teste</Link></li>
                </ul>
               <span onClick={toggleTheme}>&#128161;</span>
            </nav>
        </header>
    );
}

export default Header;