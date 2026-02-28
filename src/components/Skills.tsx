import { useState, useEffect } from 'react';
import './Skills.css';

interface Tool {
    name: string;
    logo: string;
    category?: 'code' | 'nocode' | 'ai' | 'design' | 'devops' | 'language';
}

// Column 1: Scrolling Down
const column1Tools: Tool[] = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'code' },
    { name: 'GitHub Copilot', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/GitHub_Copilot_logo.svg', category: 'ai' },
    { name: 'Webflow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg', category: 'nocode' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'code' },
    { name: 'Framer', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Framer_Logomark_Black.svg', category: 'nocode' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'code' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'design' },
    { name: 'Bubble', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Bubble_logo.svg', category: 'nocode' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'code' },
    { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', category: 'ai' },
];

// Column 2: Scrolling Up
const column2Tools: Tool[] = [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'code' },
    { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', category: 'nocode' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'code' },
    { name: 'Claude AI', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_AI_logo.svg', category: 'ai' },
    { name: 'Airtable', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg', category: 'nocode' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'devops' },
    { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg', category: 'nocode' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'code' },
    { name: 'Make', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Make_logo_%282023%29.svg', category: 'nocode' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'code' },
];

// Column 3: Scrolling Down
const column3Tools: Tool[] = [
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'code' },
    { name: 'Retool', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Retool_Logo.png', category: 'nocode' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'code' },
    { name: 'Midjourney', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png', category: 'ai' },
    { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', category: 'nocode' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops' },
    { name: 'Canva', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg', category: 'design' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'devops' },
    { name: 'Wix', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wix.com_website_logo.svg', category: 'nocode' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'code' },
];

// Column 4: Scrolling Up
const column4Tools: Tool[] = [
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', category: 'code' },
    { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg', category: 'nocode' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'code' },
    { name: 'Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', category: 'ai' },
    { name: 'Squarespace', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Squarespace_Logo.svg', category: 'nocode' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'devops' },
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', category: 'nocode' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'code' },
    { name: 'Glide', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Glide_Logo.svg', category: 'nocode' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'devops' },
];

// Languages Known - Static Grid
interface Language {
    name: string;
    logo: string;
    category?: 'language';
}

const languages: Language[] = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'language' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'language' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'language' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'language' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'language' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'language' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'language' },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', category: 'language' },
    { name: 'Expo', logo: 'https://static.expo.dev/static/brand/square-228x228.png', category: 'language' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'language' },
];

const getSkillDescription = (skill: Tool | Language) => {
    const cat = skill.category || 'technology';
    switch (cat) {
        case 'code': return `Advanced proficiency in ${skill.name}. Highly utilized for building scalable architectures and robust web applications.`;
        case 'ai': return `Integrating ${skill.name} to enhance productivity, automate workflows, and develop intelligent front-end features.`;
        case 'nocode': return `Leveraging ${skill.name} for rapid prototyping, visual coding, and accelerating go-to-market strategies without compromising scale.`;
        case 'design': return `Utilizing ${skill.name} to craft intuitive user experiences, mockups, and sleek, modern interfaces before implementation.`;
        case 'devops': return `Deploying and managing infrastructure using ${skill.name} to ensure high availability and streamlined CI/CD pipelines.`;
        case 'language': return `Core programming framework/language: ${skill.name}. Highly experienced in building complex logic and performant systems.`;
        default: return `Extensive experience working with ${skill.name} in professional environments to optimize and scale code.`;
    }
}

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState<Tool | Language | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedSkill) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedSkill]);

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2>Tech <span className="accent-text">Arsenal</span></h2>
                    <p>Coding tools, AI assistants, and no-code platforms I work with</p>
                </div>

                <div className="tools-columns">
                    {/* Column 1: Down */}
                    <div className="tools-column">
                        <div className="tools-track track-down">
                            {[...column1Tools, ...column1Tools].map((tool, index) => (
                                <div
                                    key={`col1-${tool.name}-${index}`}
                                    className="tool-item"
                                    onClick={() => setSelectedSkill(tool)}
                                >
                                    <div className="tool-logo-wrapper">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="tool-logo"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `<div class="tool-logo-fallback">${tool.name.charAt(0)}</div>`;
                                                }
                                            }}
                                        />
                                    </div>
                                    <span className="tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Up */}
                    <div className="tools-column">
                        <div className="tools-track track-up">
                            {[...column2Tools, ...column2Tools].map((tool, index) => (
                                <div
                                    key={`col2-${tool.name}-${index}`}
                                    className="tool-item"
                                    onClick={() => setSelectedSkill(tool)}
                                >
                                    <div className="tool-logo-wrapper">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="tool-logo"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `<div class="tool-logo-fallback">${tool.name.charAt(0)}</div>`;
                                                }
                                            }}
                                        />
                                    </div>
                                    <span className="tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Down */}
                    <div className="tools-column">
                        <div className="tools-track track-down">
                            {[...column3Tools, ...column3Tools].map((tool, index) => (
                                <div
                                    key={`col3-${tool.name}-${index}`}
                                    className="tool-item"
                                    onClick={() => setSelectedSkill(tool)}
                                >
                                    <div className="tool-logo-wrapper">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="tool-logo"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `<div class="tool-logo-fallback">${tool.name.charAt(0)}</div>`;
                                                }
                                            }}
                                        />
                                    </div>
                                    <span className="tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Up */}
                    <div className="tools-column">
                        <div className="tools-track track-up">
                            {[...column4Tools, ...column4Tools].map((tool, index) => (
                                <div
                                    key={`col4-${tool.name}-${index}`}
                                    className="tool-item"
                                    onClick={() => setSelectedSkill(tool)}
                                >
                                    <div className="tool-logo-wrapper">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="tool-logo"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `<div class="tool-logo-fallback">${tool.name.charAt(0)}</div>`;
                                                }
                                            }}
                                        />
                                    </div>
                                    <span className="tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Languages Known - Static Two Row Grid */}
                <div className="languages-section">
                    <h3 className="languages-title">
                        <span className="accent-text">Languages</span> I Code In
                    </h3>
                    <div className="languages-scroller">
                        <div className="languages-track">
                            {[...languages, ...languages, ...languages].map((lang, index) => (
                                <div
                                    key={`${lang.name}-${index}`}
                                    className="language-item"
                                    onClick={() => setSelectedSkill(lang)}
                                >
                                    <div className="language-logo-wrapper">
                                        <img
                                            src={lang.logo}
                                            alt={lang.name}
                                            className="language-logo"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `<div class="language-logo-fallback">${lang.name.charAt(0)}</div>`;
                                                }
                                            }}
                                        />
                                    </div>
                                    <span className="language-name">{lang.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Popup Modal Component */}
            {selectedSkill && (
                <div className="skill-modal-backdrop" onClick={() => setSelectedSkill(null)}>
                    <div className="skill-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="skill-modal-close" onClick={() => setSelectedSkill(null)} aria-label="Close modal">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="skill-modal-body">
                            <div className="skill-modal-icon">
                                <img src={selectedSkill.logo} alt={selectedSkill.name} />
                            </div>
                            <div className="skill-modal-info">
                                <div className="skill-modal-badge">{selectedSkill.category || 'technology'}</div>
                                <h3 className="skill-modal-title">{selectedSkill.name}</h3>
                                <p className="skill-modal-desc">{getSkillDescription(selectedSkill)}</p>

                                <div className="skill-stats">
                                    <div className="stat-bar">
                                        <span className="stat-label">Proficiency Level</span>
                                        <div className="progress-bg">
                                            <div className="progress-fill" style={{ width: `${Math.floor(Math.random() * 15) + 85}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="stat-bar">
                                        <span className="stat-label">Frequency of Use</span>
                                        <div className="progress-bg">
                                            <div className="progress-fill" style={{ width: `${Math.floor(Math.random() * 25) + 75}%`, animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Skills;
