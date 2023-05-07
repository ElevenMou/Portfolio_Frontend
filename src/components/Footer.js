import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import SocialLinks from './SocialLinks'

const Footer = () => {
    const { t } = useTranslation();
    const socials = [
        {
            title: 'Github',
            icon: 'icon-github',
            link: 'https://github.com/ElevenMou'
        },
        {
            title: 'LinkedIn',
            icon: 'icon-linkedin',
            link: 'https://www.linkedin.com/in/moussasaidi/'
        },
        {
            title: 'Behance',
            icon: 'icon-behance',
            link: 'https://www.behance.net/moussasaidi'
        },
        {
            title: 'Dribble',
            icon: 'icon-dribble',
            link: 'https://dribbble.com/elevenmou'
        },
    ];

    return (
        <footer className='app-footer'>
            <Link to='/' className='app-footer__logo' data-aos="fade-up">
                <img src={Logo} alt='logo' />
                <span className='app-footer__first-name'>Moussa </span>Saidi
            </Link>
            <h3 className='app-footer__title' data-aos="fade-up">
                <span>{t("footer.findme")}</span> {t("footer.in")}
            </h3>
            <SocialLinks links={socials} />
        </footer>
    )
}

export default Footer