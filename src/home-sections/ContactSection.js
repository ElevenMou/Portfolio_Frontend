import React from 'react'
import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact';

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section className='section section-contact' id='contact-section'>
            <div className='section-contact__content'>
                <div className='section-contact__msg'>
                    <h2 className='title'>{t('contact.title')}</h2>
                    <p className=''>{t('contact.body')}</p>
                </div>
                <Contact />
            </div>
        </section>
    )
}

export default ContactSection