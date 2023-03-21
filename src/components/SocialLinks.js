import React from 'react'

const SocialLinks = ({links}) => {
    
    return (
        <div className='social-links'>
            {
                links.map(social => {
                    return (
                        <a className='social-links__link' href={social.link} target='_blank' rel="noopener noreferrer" key={social.title} title={social.title} >
                            <span className={social.icon}></span>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default SocialLinks