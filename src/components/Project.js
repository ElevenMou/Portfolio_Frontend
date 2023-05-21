import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Popup from './Popup'
import SocialLinks from './SocialLinks';

/* Icons */
import Figma from '../assets/technologies/figma.svg'
import HTML from '../assets/technologies/html5.svg'
import CSS from '../assets/technologies/css.png'
import Javascript from '../assets/technologies/javascript.svg'
import ReactIcon from '../assets/technologies/reactjs.svg'
import Nodejs from '../assets/technologies/node-js.svg'
import Expressjs from '../assets/technologies/expressjs.svg'
import Sass from '../assets/technologies/sass.svg'
import Laravel from '../assets/technologies/Laravel.svg'
import PHP from '../assets/technologies/php.svg'
import ReactGA from 'react-ga4';

const Project = ({ project, index }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { t } = useTranslation();

    const togglePopup = () => {
        setShowDetails(prev => !prev);
        ReactGA.event({
            category: "project",
            action: "view project details",
            label: project.title
        });
    }

    const getIcon = (title) => title === "Figma" ? Figma
        : title === "HTML" ? HTML
            : title === "CSS" ? CSS
                : title === "JavaScript" ? Javascript
                    : title === "React" ? ReactIcon
                        : title === "NodeJs" ? Nodejs
                            : title === "ExpressJs" ? Expressjs
                                : title === "Sass" ? Sass
                                    : title === "Laravel" ? Laravel
                                        : title === "PHP" ? PHP
                                            : ReactIcon;

    const renderTechs = () => project.technologies.map((tech, index) => <img src={getIcon(tech)} alt='technology logo' title={tech.title} key={index} />)

    return (
        <>
            <div
                className='project'
                onClick={togglePopup}
                data-aos="zoom-in-right"
                data-aos-delay={(index + 1) * 400}
                data-aos-duration="400"
            >
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
                            <h3 className='subtitle'>{t('projects.popup.techs')}</h3>
                            <div className='technologies'>
                                {renderTechs()}
                            </div>
                        </div>
                        <div>
                            <h3 className='subtitle'>{t('projects.popup.findon')}</h3>
                            <SocialLinks links={project.links} />
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Project