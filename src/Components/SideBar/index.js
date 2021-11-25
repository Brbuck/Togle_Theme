import React from 'react';
import './styles.scss'

import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

function SideBar() {
    const { click, setClick } = useAuth()
    function changeSidebar() {
        setClick(!click)
    }
    return (
        <div onClick={changeSidebar} className={click ? 'sidebar' : 'sidebar active'} >
            <ul >
                <li className='close' >&#10006;</li>
                <li> <Link to='/'>Página Home</Link></li>
                <li> <Link to='/teste'>Página Teste</Link></li>
            </ul>
        </div>
    );
}

export default SideBar;