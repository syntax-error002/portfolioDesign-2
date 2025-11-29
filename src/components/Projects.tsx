import { Link } from 'react-router-dom';
import './Projects.css';

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
    width: 'small' | 'medium' | 'large';
}

// Row 1: Moving Right to Left
const row1Projects: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-stack solution with real-time inventory',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: '#',
        width: 'large',
    },
    {
        id: 2,
        title: 'AI Dashboard',
        description: 'ML insights and analytics',
        tech: ['Next.js', 'Python'],
        link: '#',
        width: 'medium',
    },
    {
        id: 3,
        title: 'Cloud Infra',
        description: 'Microservices on AWS',
        tech: ['Docker', 'K8s'],
        link: '#',
        width: 'small',
    },
    {
        id: 4,
        title: 'Mobile Banking',
        description: 'Secure banking with biometric auth',
        tech: ['React Native', 'Firebase'],
        link: '#',
        width: 'large',
    },
    {
        id: 5,
        title: 'DevOps Tools',
        description: 'CI/CD automation',
        tech: ['Jenkins', 'Terraform'],
        link: '#',
        width: 'medium',
    },
];

// Row 2: Moving Left to Right
const row2Projects: Project[] = [
    {
        id: 6,
        title: 'Social Platform',
        description: 'Real-time messaging and posts',
        tech: ['Vue.js', 'GraphQL'],
        link: '#',
        width: 'medium',
    },
    {
        id: 7,
        title: 'Analytics Engine',
        description: 'Big data processing',
        tech: ['Spark', 'Kafka'],
        link: '#',
        width: 'small',
    },
    {
        id: 8,
        title: 'Design System',
        description: 'Component library and docs',
        tech: ['React', 'Storybook'],
        link: '#',
        width: 'large',
    },
    {
        id: 9,
        title: 'API Gateway',
        description: 'Microservices routing',
        tech: ['Kong', 'Redis'],
        link: '#',
        width: 'medium',
    },
    {
        id: 10,
        title: 'ML Pipeline',
        description: 'Automated training',
        tech: ['TensorFlow', 'Airflow'],
        link: '#',
        width: 'small',
    },
];

// Row 3: Moving Right to Left
const row3Projects: Project[] = [
    {
        id: 11,
        title: 'Blockchain Wallet',
        description: 'Crypto wallet with DeFi',
        tech: ['Web3', 'Solidity'],
        link: '#',
        width: 'large',
    },
    {
        id: 12,
        title: 'IoT Dashboard',
        description: 'Device monitoring',
        tech: ['MQTT', 'InfluxDB'],
        link: '#',
        width: 'small',
    },
    {
        id: 13,
        title: 'Video Platform',
        description: 'Streaming with CDN',
        tech: ['HLS', 'FFmpeg'],
        link: '#',
        width: 'medium',
    },
    {
        id: 14,
        title: 'CMS Platform',
        description: 'Headless content management',
        tech: ['Strapi', 'PostgreSQL'],
        link: '#',
        width: 'large',
    },
    {
        id: 15,
        title: 'Search Engine',
        description: 'Full-text search',
        tech: ['Elasticsearch'],
        link: '#',
        width: 'medium',
    },
];

const Projects = () => {
    return (
        <section className="section projects" id="projects">
            <div className="projects-wrapper">
                <div className="section-header">
                    <h2>Featured <span className="gradient-text">Projects</span></h2>
                    <p>A showcase of innovative solutions across different domains</p>
                </div>

                {/* Row 1: Right to Left */}
                <div className="projects-row">
                    <div className="projects-track track-rtl">
                        {[...row1Projects, ...row1Projects].map((project, index) => (
                            <div
                                key={`row1-${project.id}-${index}`}
                                className={`project-card ${project.width}`}
                            >
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.link} className="project-link">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10h12m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Left to Right */}
                <div className="projects-row">
                    <div className="projects-track track-ltr">
                        {[...row2Projects, ...row2Projects].map((project, index) => (
                            <div
                                key={`row2-${project.id}-${index}`}
                                className={`project-card ${project.width}`}
                            >
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.link} className="project-link">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10h12m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3: Right to Left */}
                <div className="projects-row">
                    <div className="projects-track track-rtl">
                        {[...row3Projects, ...row3Projects].map((project, index) => (
                            <div
                                key={`row3-${project.id}-${index}`}
                                className={`project-card ${project.width}`}
                            >
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.link} className="project-link">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10h12m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
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
