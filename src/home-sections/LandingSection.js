import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Experience from '../components/Experience';
import SocialLinks from '../components/SocialLinks';
import { useTranslation } from 'react-i18next';
import { getSocials } from '../data/getData';

const LandingSection = () => {
    const [ t ] = useTranslation();
    const currDate = new Date();
    const experiences = [
        {
            years: currDate.getFullYear() - 2021,
            label: t('landing.experience.design')
        },
        {
            years: currDate.getFullYear() - 2022,
            label: t('landing.experience.dev')
        }
    ];
    const [socials, setSocials] = useState([]);

    useEffect(()=> {
        const fetchSocials = async () => {
            const socialsData = await getSocials();
            setSocials(socialsData);
        }
        fetchSocials();
    }, [])

    return (
        <section className='section section-landing' id='landing-section'>
            <div className='section-landing__content'>
                <div className='section-landing__hello'>{t('landing.greeting')}</div>
                <div className='section-landing__name'>{t('landing.Iam')} <span>Moussa Saidi</span></div>
                <div className='section-landing__work'>{t('landing.Iam')}
                    <TypeAnimation
                        sequence={[
                            t('landing.developer'), // Types 'One'
                            2000, // Waits 2s
                            t('landing.designer'), // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </div>
                <div className='section-landing__experiences'>
                    {
                        experiences.map(experience => <Experience years={experience.years} label={experience.label} key={experience.label} />)
                    }
                </div>
                <SocialLinks links={socials} />
            </div>
        </section>
    )
}

export default LandingSection