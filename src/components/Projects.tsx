import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
    year: string;
    status: 'in-progress' | 'shipped' | 'archived';
    stars: number;
    forks: number;
    isFeatured?: boolean;
    sourceLink?: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: 'Drone Vision - Real-Time Animal Detection',
        description: 'A high-performance mobile application and backend system designed for real-time object detection and tracking using drone camera feeds. Integrates state-of-the-art computer vision with a cinematic interface.',
        tech: ['React Native', 'Expo', 'Python', 'YOLOv8', 'Flask'],
        link: 'https://github.com/syntax-error002/-Drone-Vision---Real-Time-Animal-Detection-System',
        year: '2024',
        status: 'shipped',
        stars: 0,
        forks: 0,
        isFeatured: true,
        sourceLink: 'https://github.com/syntax-error002/-Drone-Vision---Real-Time-Animal-Detection-System'
    },
    {
        id: 2,
        title: 'RIFT Financial Forensics Engine',
        description: 'A comprehensive solution for detecting sophisticated money muling networks, fraud rings, and financial crime patterns. Processes transaction data to identify circular routing, smurfing, and structuring.',
        tech: ['Financial Tech', 'Frontend', 'Backend', 'Data Analysis'],
        link: 'https://github.com/syntax-error002/rift_team_innovax_ps2',
        year: '2024',
        status: 'shipped',
        stars: 0,
        forks: 0,
        sourceLink: 'https://github.com/syntax-error002/rift_team_innovax_ps2'
    },
    {
        id: 3,
        title: 'Crop Health Diagnosis',
        description: 'An AI-in-healthcare hackathon project focusing on crop health diagnosis. Features a React Native mobile frontend and a Python FastAPI backend for AI processing.',
        tech: ['React Native', 'Python', 'FastAPI', 'AI/ML'],
        link: 'https://github.com/syntax-error002/ai-in-healthcare-pu-hackathon',
        year: '2024',
        status: 'shipped',
        stars: 0,
        forks: 0,
        sourceLink: 'https://github.com/syntax-error002/ai-in-healthcare-pu-hackathon'
    },
    {
        id: 4,
        title: 'Connect - Voice & Video Calling App',
        description: 'A sleek, real-time voice and video calling application. Built as a FlutterFlow project optimized for the Flutter stable release to ensure high-performance communication.',
        tech: ['FlutterFlow', 'Flutter', 'WebRTC', 'Dart'],
        link: 'https://github.com/syntax-error002/Connect-Voice_and_Video_calling_app',
        year: '2024',
        status: 'shipped',
        stars: 0,
        forks: 0,
        sourceLink: 'https://github.com/syntax-error002/Connect-Voice_and_Video_calling_app'
    },
    {
        id: 5,
        title: 'SQLeditor_',
        description: 'A modern, interactive SQL editor built with TypeScript. Provides a user-friendly interface to write, execute, and visualize SQL queries with instant feedback and AI features.',
        tech: ['TypeScript', 'SQL', 'Databases', 'AI Tools'],
        link: 'https://github.com/syntax-error002/SQLeditor_',
        year: '2024',
        status: 'in-progress',
        stars: 0,
        forks: 0,
        sourceLink: 'https://github.com/syntax-error002/SQLeditor_'
    }
];

const Projects = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="section projects" id="projects">
            <div className="projects-wrapper">

                <div className="section-header">
                    <h2 className="fade-in-up">Projects</h2>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project) => {
                        const isExpanded = expandedId === project.id;
                        return (
                            <div
                                key={`project-${project.id}`}
                                className={`project-card ${project.isFeatured ? 'featured' : ''} ${isExpanded ? 'expanded' : ''}`}
                                onClick={() => toggleExpand(project.id)}
                            >
                                <div className="project-header-clickable">
                                    <div className="project-title-group">
                                        <h3>{project.title}</h3>
                                        <div className="project-header-meta">
                                            <span className={`featured-badge ${project.isFeatured ? '' : 'hidden'}`}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                                FEATURED
                                            </span>
                                            <span className={`project-status ${project.status}`}>
                                                <span className="status-dot"></span>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="project-meta">
                                        <span className="project-year">{project.year}</span>
                                        <div className="expand-icon">
                                            {isExpanded ? '-' : '+'}
                                        </div>
                                    </div>
                                </div>

                                <div className="project-body">
                                    <div className="project-body-inner">
                                        <div className="project-content">
                                            <p>{project.description}</p>

                                            <div className="project-stats">
                                                <span className="stat">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                    {project.stars}
                                                </span>
                                                <span className="stat">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="18" r="3"></circle>
                                                        <circle cx="6" cy="6" r="3"></circle>
                                                        <circle cx="18" cy="6" r="3"></circle>
                                                        <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path>
                                                        <path d="M12 12v3"></path>
                                                    </svg>
                                                    {project.forks}
                                                </span>
                                            </div>

                                            <div className="project-tech">
                                                {project.tech.map((tech) => (
                                                    <span key={tech} className="tech-tag">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="project-footer-links" onClick={(e) => e.stopPropagation()}>
                                            {project.sourceLink && (
                                                <a href={project.sourceLink} target="_blank" rel="noreferrer" className="footer-link">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                    source
                                                </a>
                                            )}
                                            <a href={project.link} target="_blank" rel="noreferrer" className="footer-link live-link">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                                live
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="projects-footer">
                    <Link to="/all-projects" className="see-all-btn">
                        See All Projects
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
