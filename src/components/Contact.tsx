import { useState } from 'react';
import QuickConnectModal from './QuickConnectModal';
import './Contact.css';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section className="section contact" id="contact">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-text">
                            <h2>Let's Build Something <span className="gradient-text">Amazing</span></h2>
                            <p>
                                I'm always interested in hearing about new projects and opportunities.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className="contact-info">
                                <a href="mailto:kureelshaswat1@gmail.com" className="contact-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>kureelshaswat1@gmail.com</span>
                                </a>

                                <a href="https://github.com/syntax-error002" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>GitHub</span>
                                </a>

                                <a href="https://www.linkedin.com/in/shaswatkureel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        <div className="contact-cta">
                            <button className="btn btn-primary btn-large" onClick={openModal}>
                                Get In Touch
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <QuickConnectModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default Contact;
