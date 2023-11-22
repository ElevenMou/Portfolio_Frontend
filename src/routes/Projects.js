import React, { useEffect, useState } from "react";
import { getProjects } from "../data/getData";
import Project from "../components/Project";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from "react-i18next";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { t } = useTranslation();

    /************************* Initialize **************************/
    useEffect(() => {
        document.title = "Projects";
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
        const fetchProjects = async () => {
            const projectsData = await getProjects(1);
            setProjects(projectsData);
        }
        fetchProjects();
    }, []);

    /************************* Infinite scroll **************************/
    const nextPage = () => {
        setPage(prev => prev + 1);
    }

    useEffect(() => {
        if (page > 1) {
            const fetchProjects = async () => {
                const projectsData = await getProjects(page);
                if (projectsData.length < 30) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
                setProjects((prev) => [...prev, ...projectsData]);
            }
            fetchProjects();
        }

    }, [page])


    return (
        <div className="screen projects-screen">
            <h1 className="title">{t('projects.title')}</h1>
            <InfiniteScroll
                dataLength={projects.length} //This is important field to render the next data
                next={nextPage}
                hasMore={hasMore}
                loader={<h4 className='loading'>&nbsp;</h4>}
                endMessage={<h4 className='empty-data'> {projects.length !== 0 ? t('projects.nomore') : t('projects.empty')} </h4>}
            >
                {projects && projects.map((project) =>
                    <Project project={project} key={project.id} />
                )}
            </InfiniteScroll>
        </div>
    );
};

export default Projects;
