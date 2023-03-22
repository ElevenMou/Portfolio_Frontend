import React, { useState } from 'react'
import Popup from './Popup'
import SocialLinks from './SocialLinks';


const Project = ({ project }) => {
    const [showDetails, setShowDetails] = useState(false);

    const togglePopup = () => {
        setShowDetails(prev => !prev);
    }

    const renderTechs = () => project.technologies.map(tech => <img src={tech.icon} alt='technology logo' title={tech.title} key={tech.title} />)

    return (
        <>
            <div className='project' onClick={togglePopup} >
                <img src={project.image} alt='project' />
                <div className='project__content'>
                    <h3 className='project__title'> {project.title} </h3>
                </div>
            </div>
            <Popup isOpen={showDetails} closePopup={() => togglePopup}>
                <div className='project__details'>
                    <img src={project.image} alt='project' />
                    <div className='project__details-container'>
                        <h2 className='title-dark'>{project.title}</h2>
                        <p> {project.description} </p>
                        <div>
                            <h3 className='subtitle'>Technologies used</h3>
                            <div className='technologies'>
                                {renderTechs()}
                            </div>
                        </div>
                        <div>
                            <h3 className='subtitle'>Find on</h3>
                            <SocialLinks links={project.links} />
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Project