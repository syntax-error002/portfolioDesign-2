import { useState } from 'react';
import './Experience.css';

const experiences = [
    {
        role: 'State Lead Gujarat',
        company: 'Elite Coders',
        period: 'Jan 2026 - Present',
        description: 'Driving coding initiatives across Gujarat by leading state-level programs, mentoring developers, organizing hackathons/workshops, and building a strong tech community while representing Elite Coders at the regional level.',
        tags: ['Leadership', 'Community Building', 'Mentoring']
    },
    {
        role: 'Mentor',
        company: 'Social Winter of Code (SWOC)',
        period: 'Dec 2025 - Present',
        description: 'Bridging the gap with contributors and admins, and encouraging true potential in open-source development.',
        tags: ['Mentoring', 'Open Source', 'Community']
    },
    {
        role: 'Contributor',
        company: 'Elite Coders Winter of Code (ECWoC)',
        period: 'Dec 2025 - Present',
        description: 'Contributing to open-source projects, collaborating with developers, and shipping high-quality code features.',
        tags: ['Open Source', 'Collaboration', 'Development']
    },
    {
        role: 'Campus Ambassador',
        company: 'Elite Coders',
        period: 'Dec 2025 - Present',
        description: 'Representing Elite Coders on campus by organizing coding events, promoting hackathons/workshops, mentoring peers, and building a vibrant student developer community.',
        tags: ['Event Management', 'DevRel', 'Networking']
    },
    {
        role: 'Campus Ambassador',
        company: 'AlgoZenith',
        period: 'Aug 2025 - Present',
        description: 'Promoting AlgoZenith’s coding platform on campus by organizing outreach activities, engaging peers in contests and learning modules, and fostering a strong coding culture.',
        tags: ['Leadership', 'Tech Education', 'Outreach']
    },
    {
        role: 'Fullstack Freelancer',
        company: 'Freelance',
        period: 'Jan 2025 - Nov 2025',
        description: 'Delivering custom web and mobile applications to clients. Specialized in full-stack development, bringing ideas to reality with scalable architectures.',
        tags: ['React', 'Node.js', 'Full-Stack', 'Mobile Dev']
    },
    {
        role: 'Frontend Developer',
        company: 'Fiverr',
        period: 'Mar 2024 - Dec 2025',
        description: 'Freelance frontend development focusing on clean, modern web apps for real clients, prioritizing speed, clarity, and building with purpose.',
        tags: ['Frontend', 'UI/UX', 'Freelance']
    },
    {
        role: 'Frontend Developer Intern',
        company: 'CodeAlpha',
        period: 'Nov 2024 - Dec 2024',
        description: 'Created many real-world projects that help others and improve my skills, building responsive user interfaces and modern web capabilities.',
        tags: ['Frontend', 'React', 'Internship']
    }
];

const education = [
    {
        degree: 'Bachelor of Engineering - BE, Computer Engineering',
        institution: 'UPL University of Sustainable Technology',
        period: 'Sep 2024 - Nov 2028',
        description: 'Pursuing B.E in Computer Engineering. Focused on software development, algorithms, and emerging technologies.',
        achievement: '9.8 CPI (1st Year)'
    },
    {
        degree: '6th - 12th science (Maths) schooling',
        institution: 'Jawahar Navodaya Vidyalaya',
        period: 'Graduated 2023',
        description: 'Completed senior secondary education from one of India\'s most reputed residential schools with focus on Mathematics and Sciences.',
        achievement: '84% in PCM'
    }
];

const ExperienceItem = ({ exp }: { exp: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`bento-card ${isOpen ? 'expanded' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="bento-header-clickable">
                <div className="bento-title-group">
                    <h3>{exp.role}</h3>
                    <span className="bento-company">{exp.company}</span>
                    <span className="bento-date">{exp.period}</span>
                </div>
                <div className="bento-meta">
                    <span className="expand-icon">{isOpen ? '−' : '+'}</span>
                </div>
            </div>

            <div className="bento-body">
                <div className="bento-body-inner">
                    <p>{exp.description}</p>
                    <div className="bento-tags">
                        {exp.tags.map((tag: string, i: number) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const EducationItem = ({ edu }: { edu: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`bento-card education-card ${isOpen ? 'expanded' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="bento-header-clickable">
                <div className="bento-title-group">
                    <h3>{edu.degree}</h3>
                    <span className="bento-company">{edu.institution}</span>
                    <span className="bento-date">{edu.period}</span>
                </div>
                <div className="bento-meta">
                    <span className="expand-icon">{isOpen ? '−' : '+'}</span>
                </div>
            </div>

            <div className="bento-body">
                <div className="bento-body-inner">
                    <span className="bento-achievement">{edu.achievement}</span>
                    <p>{edu.description}</p>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <h2><span className="accent-text">Journey</span> & Background</h2>
                    <p>My professional experience and academic achievements.</p>
                </div>

                <div className="experience-wrapper">
                    <h3 className="section-subtitle">Professional Experience</h3>

                    {/* Professional Experience Grid Wrapper */}
                    <div className="experience-grid-container">

                        {/* Decorative Curved SVG Line (Desktop Only) */}
                        <div className="experience-path-overlay">
                            <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
                                <path
                                    className="animated-trace"
                                    d="M 150 50 
                                       C 350 50, 450 60, 500 60 
                                       C 650 60, 750 60, 850 60
                                       C 900 60, 900 120, 850 150
                                       C 750 200, 600 250, 500 280
                                       C 400 300, 250 300, 150 300
                                       C 100 300, 100 400, 150 450
                                       C 300 550, 500 550, 800 550"
                                    fill="none"
                                    stroke="url(#trace-gradient)"
                                    strokeWidth="3"
                                    strokeDasharray="10 15"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(0, 255, 170, 0.1)" />
                                        <stop offset="50%" stopColor="rgba(0, 255, 170, 0.8)" />
                                        <stop offset="100%" stopColor="rgba(0, 255, 170, 0.1)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="bento-grid">
                            {experiences.map((exp, index) => (
                                <ExperienceItem key={index} exp={exp} />
                            ))}
                        </div>
                    </div>

                    <h3 className="section-subtitle education-subtitle">Education Background</h3>
                    <div className="bento-grid">
                        {education.map((edu, index) => (
                            <EducationItem key={index} edu={edu} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
