import './Experience.css';

const experiences = [
    {
        role: 'Web & App Developer',
        company: 'Fiverr (Freelance)',
        period: 'Present',
        description: 'Delivering high-quality web and mobile applications for global clients. Specializing in custom solutions and responsive designs.',
        tags: ['React', 'Node.js', 'Flutter', 'Full Stack']
    },
    {
        role: 'Campus Ambassador',
        company: 'AlgoZenith',
        period: '2025 - 2026',
        description: 'Selected to represent AlgoZenith on campus. Organizing workshops and fostering a strong competitive programming culture.',
        tags: ['Leadership', 'Community', 'Event Mgmt']
    },
    {
        role: 'Frontend Intern',
        company: 'CodeAlpha',
        period: '2024',
        description: 'Developed responsive user interfaces and optimized web performance. Collaborated with senior developers to implement modern UI/UX designs.',
        tags: ['Frontend', 'React', 'Performance']
    }
];

const education = [
    {
        degree: 'B.E. in Computer Engineering',
        institution: 'UPL University of Sustainable Technology',
        period: 'Pursuing',
        description: 'Currently in First Year with a CPI of 9.8. Focusing on core computer science fundamentals and advanced technologies.',
        tags: ['9.8 CPI', 'Computer Science', 'Engineering']
    },
    {
        degree: 'Higher Secondary (12th PCM)',
        institution: 'Jawahar Navodaya Vidyalaya, Bharuch',
        period: 'Completed',
        description: 'Graduated from one of India\'s most reputed residential schools with 84% in Physics, Chemistry, and Math.',
        tags: ['84%', 'PCM', 'Residential School']
    }
];

const Experience = () => {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <h2><span className="gradient-text">Journey</span> & Education</h2>
                    <p>My professional path and academic background.</p>
                </div>

                <div className="experience-grid">
                    {/* Experience Column */}
                    <div className="timeline-column">
                        <h3 className="column-title">💼 Professional Experience</h3>
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

                    {/* Education Column */}
                    <div className="timeline-column">
                        <h3 className="column-title">🎓 Education</h3>
                        <div className="timeline">
                            {education.map((edu, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot edu-dot"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h3>{edu.degree}</h3>
                                            <span className="timeline-company">{edu.institution}</span>
                                        </div>
                                        <span className="timeline-date">{edu.period}</span>
                                        <p>{edu.description}</p>
                                        <div className="timeline-tags">
                                            {edu.tags.map((tag, i) => (
                                                <span key={i}>{tag}</span>
                                            ))}
                                        </div>
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
