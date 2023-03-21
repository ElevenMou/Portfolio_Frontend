import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Experience from '../components/Experience';
import SocialLinks from '../components/SocialLinks';

const LandingSection = () => {
    const currDate = new Date();
    const experiences = [
        {
            years: currDate.getFullYear() - 2021,
            label: 'Design'
        },
        {
            years: currDate.getFullYear() - 2022,
            label: 'web development'
        }
    ];
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
        <section className='section section-landing' id='landing-section'>
            <div className='section-landing__content'>
                <div className='section-landing__hello'>Hello</div>
                <div className='section-landing__name'>I'm <span>Moussa Saidi</span></div>
                <div className='section-landing__work'>I'm 
                    <TypeAnimation
                        sequence={[
                            'web developer', // Types 'One'
                            2000, // Waits 2s
                            'UI/UX designer', // Deletes 'One' and types 'Two'
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