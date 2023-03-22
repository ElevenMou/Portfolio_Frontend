import React from 'react'
import Contact from '../components/Contact';

const ContactSection = () => {
    return (
        <section className='section section-contact' id='contact-section'>
            <div className='section-contact__content'>
                <div className='section-contact__msg'>
                    <h2 className='title'>Let's work </h2>
                    <p className=''>I would love to hear from you!</p>
                </div>
                <Contact />
            </div>
        </section>
    )
}

export default ContactSection