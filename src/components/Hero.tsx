import { ArrowRight, Github, Twitter, Linkedin, FileText } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Building the <br />
                        <span className="accent-text">Future Web.</span>
                    </h1>

                    <p className="hero-description"> I like solving problems fast and turning rough ideas into polished products.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-outline tech-btn">
                            View My Work <ArrowRight size={16} className="arrow-icon" />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline tech-btn">
                            Resume <FileText size={16} className="arrow-icon" />
                        </a>
                        <div className="hero-socials-inline">
                            <a href="https://github.com/syntax-error002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://in.linkedin.com/in/shaswatkureel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-composition">
                        <div className="glow-blob blob-1"></div>
                        <div className="glow-blob blob-2"></div>

                        <div className="tech-accents">
                            <span className="accent-cross top-right">+</span>
                            <span className="accent-dot bottom-right"></span>
                            <span className="accent-cross bottom-left">+</span>
                        </div>

                        <div className="image-presentation">
                            <div className="glass-pedestal"></div>
                            <img src="/image.png" alt="Shaswat Profile" className="hero-image" onError={(e) => { (e.target as HTMLImageElement).src = '/rishi_profile.png' }} />
                        </div>

                        <div className="floating-card tech-box">
                            <div className="code-snippet">
                                <div className="code-header">
                                    <span className="dot close"></span>
                                    <span className="dot minimize"></span>
                                    <span className="dot expand"></span>
                                </div>
                                <pre>
                                    <code>
                                        {`const engineer = {
  name: "Shaswat",
  role: "Full-Stack",
  passion: "Speed"
};`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
