import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import LangSwitcher from './LangSwitcher'

const Header = () => {
    return (
        <header className='app-header' data-aos="fade-down" data-aos-duration="500">
            <Link to='/' className='app-header__logo'>
                <img src={Logo} alt='logo' />
                <span className='app-header__first-name'>Moussa </span>Saidi
            </Link>
            <LangSwitcher />
        </header>
    )
}

export default Header