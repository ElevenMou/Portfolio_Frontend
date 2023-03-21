import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='app-header'>
            <Link to='/' className='app-header__logo'>
                <img src={Logo} alt='logo' />
                <span className='app-header__first-name'>Moussa </span>Saidi
            </Link>
            <Link to='/' className='app-header__link'>
                Blog
            </Link>
        </header>
    )
}

export default Header