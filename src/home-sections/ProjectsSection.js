import React from 'react'
import { Link } from 'react-router-dom'
import Project from '../components/Project';

/* Icons */
import Figma from '../assets/technologies/figma.svg'
import HTML from '../assets/technologies/html5.svg'
import CSS from '../assets/technologies/css.svg'
import Javascript from '../assets/technologies/javascript.svg'
import ReactIcon from '../assets/technologies/reactjs.svg'
import Nodejs from '../assets/technologies/node-js.svg'
import Expressjs from '../assets/technologies/expressjs.svg'

const ProjectsSection = () => {
    const projects = [
        {
            title: 'My portfolio',
            description: 'I present to you my portfolio design and code, created for a personal website.',
            image: 'https://cdn.dribbble.com/userupload/5397543/file/original-703b47357c2c58b67b420ce0730f1654.jpg',
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
            technologies: [
                {
                    title: 'Figma',
                    icon: Figma
                },
                {
                    title: 'HTML',
                    icon: HTML
                },
                {
                    title: 'CSS',
                    icon: CSS
                },
                {
                    title: 'JavaScript',
                    icon: Javascript
                },
                {
                    title: 'React',
                    icon: ReactIcon
                },
                {
                    title: 'NodeJs',
                    icon: Nodejs
                },
                {
                    title: 'ExpressJs',
                    icon: Expressjs
                }
            ]
        },
        {
            title: 'My portfolio',
            description: 'I present to you my portfolio design and code, created for a personal website.',
            image: 'https://cdn.dribbble.com/userupload/5397543/file/original-703b47357c2c58b67b420ce0730f1654.jpg',
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
            technologies: [
                {
                    title: 'Figma',
                    icon: Figma
                },
                {
                    title: 'HTML',
                    icon: HTML
                },
                {
                    title: 'CSS',
                    icon: CSS
                },
                {
                    title: 'JavaScript',
                    icon: Javascript
                },
                {
                    title: 'React',
                    icon: ReactIcon
                },
                {
                    title: 'NodeJs',
                    icon: Nodejs
                },
                {
                    title: 'ExpressJs',
                    icon: Expressjs
                }
            ]
        },
        {
            title: 'My portfolio',
            description: 'I present to you my portfolio design and code, created for a personal website.',
            image: 'https://cdn.dribbble.com/userupload/5397543/file/original-703b47357c2c58b67b420ce0730f1654.jpg',
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
            technologies: [
                {
                    title: 'Figma',
                    icon: Figma
                },
                {
                    title: 'HTML',
                    icon: HTML
                },
                {
                    title: 'CSS',
                    icon: CSS
                },
                {
                    title: 'JavaScript',
                    icon: Javascript
                },
                {
                    title: 'React',
                    icon: ReactIcon
                },
                {
                    title: 'NodeJs',
                    icon: Nodejs
                },
                {
                    title: 'ExpressJs',
                    icon: Expressjs
                }
            ]
        }
    ];

    return (
        <section className='section section-projects' id='projects-section'>
            <div className='section-projects__content'>
                <div className='section-projects__desc' >
                    <div className='title'>Projects</div>
                    <p>This is a selection of projects that showcase my skills and experience in UI/UX design and WEB development.</p>
                    <Link className='btn' to={'/projects'}>See all projects</Link>
                </div>
                {
                    projects.map((project, index) => <Project project={project} key={index} /> )
                }

            </div>
            
        </section>
    )
}

export default ProjectsSection