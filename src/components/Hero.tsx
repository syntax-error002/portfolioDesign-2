import { useEffect } from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    useEffect(() => {
        // Load LinkedIn script dynamically
        const script = document.createElement('script');
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        script.type = "text/javascript";
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="hero-section" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="status-pill">
                        <span className="pulsing-dot"></span>
                        Available for new opportunities
                    </div>

                    <h1 className="hero-title">
                        Building the <br />
                        <span className="text-gradient">Future Web</span>
                    </h1>

                    <p className="hero-description">
                        I'm Shaswat Kureel, a software engineer specializing in building exceptional digital experiences.
                        Currently focused on scalable full-stack applications and cloud-native architectures.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary shimmer-btn">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <div className="hero-socials-minimal">
                            <a href="https://github.com/shaswat2005" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="mailto:shaswatkureel05@gmail.com" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-visual-minimal">
                    <div className="linkedin-badge-wrapper">
                        <div
                            className="badge-base LI-profile-badge"
                            data-locale="en_US"
                            data-size="large"
                            data-theme="dark"
                            data-type="HORIZONTAL"
                            data-vanity="shaswatkureel"
                            data-version="v1"
                        >
                            <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/shaswatkureel?trk=profile-badge">
                                Shaswat Kureel
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-bg-3d">
                <div className="bg-grid"></div>
                <div className="bg-gradient-overlay"></div>
            </div>
        </section>
    );
};

export default Hero;
