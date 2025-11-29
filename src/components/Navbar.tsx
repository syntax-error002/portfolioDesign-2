import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import './HireMeButton.css';

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
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        <span className="gradient-text">{'</>'}</span>
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
                                <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
                                <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
                                <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                            </>
                        ) : (
                            <>
                                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                                <Link to="/#projects" onClick={closeMobileMenu}>Projects</Link>
                                <Link to="/#skills" onClick={closeMobileMenu}>Skills</Link>
                            </>
                        )}
                        <Link to="/collab" className="btn btn-primary btn-small hire-me-btn" onClick={closeMobileMenu}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <span>Hire Me</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
