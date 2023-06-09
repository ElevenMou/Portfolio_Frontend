import React from 'react'
import WebDevIcon from '../assets/services-svg/web-dev.svg'
import DesignIcon from '../assets/services-svg/design.svg'
import MaintenanceIcon from '../assets/services-svg/maintenance.svg'
import SeoIcon from '../assets/services-svg/seo.svg'
import BrandingIcon from '../assets/services-svg/branding.svg'
import MailIcon from '../assets/services-svg/email.svg'
import { useTranslation } from 'react-i18next'
import ReactGA from 'react-ga4';

const ServicesSection = () => {
    const { t } = useTranslation();
    const services = [
        {
            title: t('services.webdev'),
            icon: WebDevIcon,
            link: '#'
        },
        {
            title: 'UI/UX design',
            icon: DesignIcon,
            link: '#'
        },
        {
            title: t('services.webmaintenance'),
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
            title: t('services.emailsdev'),
            icon: MailIcon,
            link: '#'
        }
    ];

    const scrollToSection = (id, title) => {
        ReactGA.event({
            category: "services",
            action: "service click",
            label: title
        });

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='section section-services' id='services-section' data-aos="fade-right">
            <div className='title'>{t('services.title')}</div>
            <div className='section-services__content'>
                {
                    services.map((service, index) =>
                        <div
                            className='section-services__service'
                            key={service.title}
                            onClick={() => scrollToSection('contact-section', service.title)}
                            data-aos="zoom-in"
                            data-aos-delay={index * 300}
                            data-aos-duration="300"
                        >
                            <div className='section-services__service-icon' >
                                <img src={service.icon} alt='service icon' />
                            </div>
                            <div className='section-services__service-title' >
                                {service.title}
                            </div>
                        </div>
                    )
                }
            </div>
            {/* <Link className='btn' to={'/services'}>See all services</Link> */}
        </section>
    )
}

export default ServicesSection