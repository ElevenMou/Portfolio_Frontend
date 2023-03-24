import React from 'react'
import { Link } from 'react-router-dom'
import Project from '../components/Project';

import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
    const { t } = useTranslation();
    const projects = [
        {
            title: 'My portfolio',
            description: 'I present to you my portfolio design and code, created for a personal website.',
            image: 'https://cdn.dribbble.com/userupload/5397543/file/original-703b47357c2c58b67b420ce0730f1654.jpg',
            isMain: true,
            links: [
                {
                    title: 'Github',
                    icon: 'icon-github',
                    link: 'https://github.com/ElevenMou'
                },
                {
                    title: 'Dribble',
                    icon: 'icon-dribble',
                    link: 'https://dribbble.com/shots/20932873-Portfolio-design'
                },
                {
                    title: 'Behance',
                    icon: 'icon-behance',
                    link: 'https://www.behance.net/gallery/166153759/My-portfoloio'
                },
            ],
            technologies: ['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJs', 'ExpressJs']
        },
        {
            title: 'My portfolio',
            description: 'I present to you my portfolio design and code, created for a personal website.',
            image: 'https://cdn.dribbble.com/userupload/5397543/file/original-703b47357c2c58b67b420ce0730f1654.jpg',
            isMain: true,
            links: [
                {
                    title: 'Github',
                    icon: 'icon-github',
                    link: 'https://github.com/ElevenMou'
                },
                {
                    title: 'Dribble',
                    icon: 'icon-dribble',
                    link: 'https://dribbble.com/shots/20932873-Portfolio-design'
                },
                {
                    title: 'Behance',
                    icon: 'icon-behance',
                    link: 'https://www.behance.net/gallery/166153759/My-portfoloio'
                },
            ],
            technologies: ['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJs', 'ExpressJs']
        },
        {
            title: 'My portfolio',
            description: 'I present to you my portfolio design and code, created for a personal website.',
            image: 'https://cdn.dribbble.com/userupload/5397543/file/original-703b47357c2c58b67b420ce0730f1654.jpg',
            isMain: true,
            links: [
                {
                    title: 'Github',
                    icon: 'icon-github',
                    link: 'https://github.com/ElevenMou'
                },
                {
                    title: 'Dribble',
                    icon: 'icon-dribble',
                    link: 'https://dribbble.com/shots/20932873-Portfolio-design'
                },
                {
                    title: 'Behance',
                    icon: 'icon-behance',
                    link: 'https://www.behance.net/gallery/166153759/My-portfoloio'
                },
            ],
            technologies: ['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJs', 'ExpressJs']
        }
    ];
    return (
        <section className='section section-projects' id='projects-section'>
            <div className='section-projects__content'>
                <div className='section-projects__desc' >
                    <div className='title'>{t('projects.title')}</div>
                    <p>{t('projects.body')}</p>
                    <Link className='btn' to={'/projects'}>{t('projects.seeall')}</Link>
                </div>
                {
                    projects.map((project, index) => <Project project={project} key={index} />)
                }

            </div>

        </section>
    )
}

export default ProjectsSection