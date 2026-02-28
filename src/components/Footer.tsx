import { Zap } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <Zap size={20} color="#00ffaa" fill="#00ffaa" />
                            <h3 className="accent-text">SHCODE</h3>
                        </div>
                        <p>Building the future, one line of code at a time.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navigation</h4>
                            <a href="#home">Home</a>
                            <a href="#projects">Projects</a>
                            <a href="#skills">Workbench</a>
                            <a href="#contact">Contact</a>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>
                            <a href="https://github.com/syntax-error002" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://in.linkedin.com/in/shaswatkureel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} SHCODE. All rights reserved.</p>
                    <p>Designed & Built with <span className="accent-text">Precision</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
