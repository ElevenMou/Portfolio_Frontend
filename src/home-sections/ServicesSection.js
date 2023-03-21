import React from 'react'
import WebDevIcon from '../assets/services-svg/web-dev.svg'
import DesignIcon from '../assets/services-svg/design.svg'
import MaintenanceIcon from '../assets/services-svg/maintenance.svg'
import SeoIcon from '../assets/services-svg/seo.svg'
import BrandingIcon from '../assets/services-svg/branding.svg'
import MailIcon from '../assets/services-svg/email.svg'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
    const services = [
        {
            title: 'Web development',
            icon: WebDevIcon,
            link: '#'
        },
        {
            title: 'UI/UX design',
            icon: DesignIcon,
            link: '#'
        },
        {
            title: 'Web maintenance',
            icon: MaintenanceIcon,
            link: '#'
        },
        {
            title: 'SEO',
            icon: SeoIcon,
            link: '#'
        },
        {
            title: 'Branding',
            icon: BrandingIcon,
            link: '#'
        },
        {
            title: 'Emails development',
            icon: MailIcon,
            link: '#'
        }
    ];

    return (
        <section className='section section-services' id='services-section'>
            <div className='title'>Services</div>
            <div className='section-services__content'>
                {
                    services.map(service =>
                        <a href={service.link} className='section-services__service' key={service.title} >
                            <div className='section-services__service-icon' >
                                <img src={service.icon} alt='service icon' />
                            </div>
                            <div className='section-services__service-title' >
                                {service.title}
                            </div>
                        </a>
                    )
                }
            </div>
            <Link className='btn' to={'/services'}>See all services</Link>
        </section>
    )
}

export default ServicesSection