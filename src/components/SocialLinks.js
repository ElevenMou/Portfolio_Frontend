import React from 'react'
import ReactGA from 'react-ga4';

const SocialLinks = ({links}) => {

    const linkClicked = (link) => {
        ReactGA.event({
            category: "visit_external",
            action: "social visit",
            label: link
        });
    }
    
    return (
        <div className='social-links'>
            {
                links.map(social => {
                    return (
                        <a className='social-links__link' href={social.link} target='_blank' rel="noopener noreferrer" key={social.title} title={social.title} onClick={() => linkClicked(social.link)} >
                            <span className={social.icon}></span>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default SocialLinks