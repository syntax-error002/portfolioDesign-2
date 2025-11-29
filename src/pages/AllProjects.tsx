import { useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import './AllProjects.css';

const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-projects-page">
            <div className="all-projects-container">
                <div className="projects-header">
                    <h1>All <span className="gradient-text">Projects</span></h1>
                    <p>A complete archive of things I've built, broken, and fixed.</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-minimal"
                            key={index}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="card-image">
                                <img
                                    src={`https://placehold.co/600x400/1a1a1a/00ff88?text=${encodeURIComponent(project.name)}&font=montserrat`}
                                    alt={project.name}
                                    loading="lazy"
                                />
                                <div className="card-overlay">
                                    <div className="external-link">
                                        View Project
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="card-header-row">
                                    <h3>{project.name}</h3>
                                    <div className="project-level">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`star ${i < project.level ? 'filled' : ''}`}>★</span>
                                        ))}
                                    </div>
                                </div>
                                <p>{project.description || project.oneLiner}</p>
                            </div>

                            <div className="card-tech">
                                {project.toolsUsed && project.toolsUsed.length > 0 ? (
                                    project.toolsUsed.map((tool, i) => (
                                        <span key={i} className="tech-badge">{tool}</span>
                                    ))
                                ) : (
                                    <span className="tech-badge">Code</span>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
