import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';

const SectionsNav = () => {
    const navItems = [
        {
            label: 'section intro',
            icon: 'icon-MenuIntro',
            sectionId: 'landing-section'
        },
        {
            label: 'section services',
            icon: 'icon-MenuServices',
            sectionId: 'services-section'
        },
        {
            label: 'section projects',
            icon: 'icon-MenuProjects',
            sectionId: 'projects-section'
        },
        {
            label: 'section contact',
            icon: 'icon-MenuContact',
            sectionId: 'contact-section'
        }
    ];

    const [activeItem, setActiveItem] = useState('landing-section');

    const scrollToSection = (id) => {
        ReactGA.event({
            category: "navigate",
            action: "scroll to section",
            label: id
        });

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.pageYOffset;
        let currentSection = null;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop - sectionHeight * 0.5 &&
                scrollPosition < sectionTop + sectionHeight * 0.5
            ) {
                currentSection = section.id;
            }
        });

        setActiveItem(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className='sections-nav'>
            {
                navItems.map(item =>
                    <button
                        onClick={() => scrollToSection(item.sectionId)}
                        className={activeItem === item.sectionId ? 'sections-nav__item active' : 'sections-nav__item'}
                        key={item.icon}
                        aria-label={item.label}
                    >
                        <span className={item.icon}></span>
                    </button>
                )
            }
        </nav>
    )
}

export default SectionsNav