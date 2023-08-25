import React from 'react';
import './project.css';

interface ProjectProps{
    imgUrl: string;
    title: string;
    description: string;
}

const Project: React.FC<ProjectProps> = ({ imgUrl, title, description }) => {
    return (
        <div className="portfolio__project-container_article">
            <div className="portfolio__project-container_article-image">
                <img src={imgUrl} alt="project" />
            </div>
            <div className="portfolio__project-container_article-content">
                <div>
                    <h3>{title}</h3>
                    <h5>{description}</h5>
                </div>
            </div>
        </div>
    )
}

export default Project;