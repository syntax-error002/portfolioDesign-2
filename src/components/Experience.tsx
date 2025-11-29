import './Experience.css';

const experiences = [
    {
        role: 'Web & App Development Freelancer',
        company: 'Fiverr',
        period: '2023 - Present',
        description: 'Delivering custom web and mobile applications to global clients. Specialized in full-stack development with React, Node.js, and mobile frameworks, maintaining a 5-star rating.',
        tags: ['React', 'Node.js', 'Full-Stack', 'Mobile Dev']
    },
    {
        role: 'Frontend Development Intern',
        company: 'CodeAlpha',
        period: '2024',
        description: 'Contributed to building responsive and dynamic user interfaces. Worked with modern frontend technologies and collaborated with cross-functional teams to deliver high-quality products.',
        tags: ['Frontend', 'React', 'UI/UX', 'Team Collaboration']
    },
    {
        role: 'Campus Ambassador',
        company: 'AlgoZenith (AZ)',
        period: '2025 - 2026',
        description: 'Selected as Campus Ambassador for the 2025-26 tenure. Promoting tech education, organizing coding workshops, and bridging the gap between industry and academia.',
        tags: ['Leadership', 'Community Building', 'Event Management']
    }
];

const education = [
    {
        degree: 'Bachelor of Engineering (B.E) - Computer Engineering',
        institution: 'UPL University of Sustainable Technology',
        period: '2023 - Present',
        description: 'Pursuing B.E in Computer Engineering with an outstanding 9.8 CPI in the first year. Focused on software development, algorithms, and emerging technologies.',
        achievement: '9.8 CPI (1st Year)'
    },
    {
        degree: 'Higher Secondary (12th) - PCM',
        institution: 'Jawahar Navodaya Vidyalaya, Bharuch',
        period: '2023',
        description: 'Completed senior secondary education from one of India\'s most reputed residential schools with 84% in Physics, Chemistry, and Mathematics.',
        achievement: '84% in PCM'
    }
];

const Experience = () => {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <h2><span className="gradient-text">Journey</span> & Background</h2>
                    <p>My professional experience and academic achievements.</p>
                </div>

                <div className="experience-grid">
                    {/* Experience Section */}
                    <div className="experience-column">
                        <h3 className="column-title">Professional Experience</h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h3>{exp.role}</h3>
                                            <span className="timeline-company">{exp.company}</span>
                                        </div>
                                        <span className="timeline-date">{exp.period}</span>
                                        <p>{exp.description}</p>
                                        <div className="timeline-tags">
                                            {exp.tags.map((tag, i) => (
                                                <span key={i}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="experience-column">
                        <h3 className="column-title">Education Background</h3>
                        <div className="timeline">
                            {education.map((edu, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot education-dot"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h3>{edu.degree}</h3>
                                            <span className="timeline-achievement">{edu.achievement}</span>
                                        </div>
                                        <span className="timeline-company">{edu.institution}</span>
                                        <span className="timeline-date">{edu.period}</span>
                                        <p>{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
