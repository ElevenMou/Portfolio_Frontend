import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Project from '../components/Project';
import { getHomeProjects } from '../data/getData';

import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        const fetchProjects = async () => {
            const projectsData = await getHomeProjects();
            setProjects(projectsData);
        }
        fetchProjects();
    }, [])

    return (
        <section className='section section-projects' id='projects-section'>
            <div className='section-projects__content'>
                <div className='section-projects__desc' data-aos="zoom-in-right" data-aos-duration="400">
                    <div className='title'>{t('projects.title')}</div>
                    <p>{t('projects.body')}</p>
                    <Link className='btn' to={'/projects'}>{t('projects.seeall')}</Link>
                </div>
                {
                    projects.map((project, index) => <Project project={project} index={index} key={project.id} />)
                }

            </div>

        </section>
    )
}

export default ProjectsSection