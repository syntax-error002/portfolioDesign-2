import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Twitter, Linkedin, Zap } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        closeMobileMenu();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="logo-container" onClick={closeMobileMenu}>
                        <div className="logo-icon">
                            <Zap size={16} color="#00ffaa" fill="#00ffaa" />
                        </div>
                        <span className="logo-text">SHCODE</span>
                    </Link>

                    <button
                        className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Backdrop Overlay */}
                    {mobileMenuOpen && (
                        <div className="nav-backdrop" onClick={closeMobileMenu}></div>
                    )}

                    <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        {isHome ? (
                            <>
                                <a href="#home" className="active-link" onClick={() => scrollToSection('home')}>
                                    <span className="bracket">&gt;</span> HOME
                                </a>
                                <a href="#projects" onClick={() => scrollToSection('projects')}>PROJECTS</a>
                                <a href="#skills" onClick={() => scrollToSection('skills')}>WORKBENCH</a>
                                <a href="#blog" onClick={() => scrollToSection('blog')}>BLOG</a>
                            </>
                        ) : (
                            <>
                                <Link to="/" onClick={closeMobileMenu}>HOME</Link>
                                <Link to="/#projects" onClick={closeMobileMenu}>PROJECTS</Link>
                                <Link to="/#skills" onClick={closeMobileMenu}>WORKBENCH</Link>
                                <Link to="/#blog" onClick={closeMobileMenu}>BLOG</Link>
                            </>
                        )}
                    </div>

                    <div className="nav-right">
                        <div className="nav-socials">
                            <a href="https://github.com/syntax-error002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={16} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={16} />
                            </a>
                            <a href="https://in.linkedin.com/in/shaswatkureel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={16} />
                            </a>
                        </div>

                        <div className="status-badge">
                            <span className="status-dot"></span>
                            status: building
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
