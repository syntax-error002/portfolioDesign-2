import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';


const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!hero || !cursor || !cursorDot) return;

        // Custom cursor movement
        const handleMouseMove = (e: MouseEvent) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
            cursorDot.style.left = `${x}px`;
            cursorDot.style.top = `${y}px`;
        };

        // Show/hide cursor
        const handleMouseEnter = () => {
            cursor.style.opacity = '1';
            cursorDot.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            cursor.style.opacity = '0';
            cursorDot.style.opacity = '0';
        };

        // Cursor hover effects
        const handleLinkHover = () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        };

        const handleLinkLeave = () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        const links = hero.querySelectorAll('a, .service-item');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkHover);
            link.addEventListener('mouseleave', handleLinkLeave);
        });

        hero.addEventListener('mousemove', handleMouseMove);
        hero.addEventListener('mouseenter', handleMouseEnter);
        hero.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
            hero.removeEventListener('mouseenter', handleMouseEnter);
            hero.removeEventListener('mouseleave', handleMouseLeave);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            {/* Custom Cursor */}
            <div className="custom-cursor" ref={cursorRef}></div>
            <div className="custom-cursor-dot" ref={cursorDotRef}></div>

            {/* 3D Background */}
            <div className="hero-bg-3d">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="floating-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="hero-container">
                {/* Left Side - Services */}
                <div className="hero-left">
                    <div className="services-section">
                        <h3 className="section-label">SERVICES</h3>
                        <div className="services-list">
                            <div className="service-item">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Web Design</span>
                            </div>
                            <div className="service-item">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span>UI/UX Design</span>
                            </div>
                            <div className="service-item">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Product Design</span>
                            </div>
                            <div className="service-item">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Branding</span>
                            </div>
                            {/* Duplicate for seamless loop on mobile */}
                            <div className="service-item service-duplicate">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Web Design</span>
                            </div>
                            <div className="service-item service-duplicate">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span>UI/UX Design</span>
                            </div>
                            <div className="service-item service-duplicate">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Product Design</span>
                            </div>
                            <div className="service-item service-duplicate">
                                <svg className="service-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Branding</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center - Image */}
                <div className="hero-center">
                    <div className="hero-image-wrapper">
                        <div className="hero-image">
                            <img
                                src="img2.png"
                                alt="Professional portrait"
                            />
                        </div>
                    </div>
                    <div className="hero-title-section">
                        <p className="hero-role">Software Engineer & Designer</p>
                        <div className="availability">
                            <span className="status-dot"></span>
                            <span>Inspect my resume & let's work together</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - CTA & Social */}
                <div className="hero-right">
                    <div className="cta-section">
                        <p className="cta-question">Have a project in mind?</p>
                        <Link to="/collab" className="cta-button">
                            <span>Let's Work Together</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    <div className="social-section">
                        <h3 className="section-label">CONNECT</h3>
                        <div className="social-links">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
