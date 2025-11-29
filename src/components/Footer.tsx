import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3 className="gradient-text">{'<DEV/>'}</h3>
                        <p>Building the future, one line of code at a time.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navigation</h4>
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} All rights reserved.</p>
                    <p>Designed & Built with <span className="gradient-text">❤</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
