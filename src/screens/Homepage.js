import React, { useEffect } from 'react'
import ContactSection from '../home-sections/ContactSection'
import LandingSection from '../home-sections/LandingSection'
import ProjectsSection from '../home-sections/ProjectsSection'
import SectionsNav from '../home-sections/SectionsNav'
import ServicesSection from '../home-sections/ServicesSection'

const Homepage = () => {
    useEffect(() => {
        document.title = "Moussa SAIDI";
    }, []);
    
    return (
        <div className='home'>
            <SectionsNav />
            <LandingSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}

export default Homepage