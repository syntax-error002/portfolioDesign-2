import { useState } from 'react';
import QuickConnectModal from './QuickConnectModal';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
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
                            <h2>Link <span className="accent-text">Established.</span></h2>
                            <p>
                                I'm currently open to new opportunities and exciting collaborations.
                                Whether you have a specific project or just want to connect, my inbox is open.
                            </p>

                            <div className="contact-info">
                                <a href="mailto:kureelshaswat1@gmail.com" className="contact-link">
                                    <Mail size={20} />
                                    <span>kureelshaswat1@gmail.com</span>
                                </a>

                                <a href="tel:+917862008920" className="contact-link">
                                    <MessageSquare size={20} />
                                    <span>+91 7862008920</span>
                                </a>

                                <a href="https://github.com/syntax-error002" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <Github size={20} />
                                    <span>GitHub</span>
                                </a>

                                <a href="https://in.linkedin.com/in/shaswatkureel" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        <div className="contact-cta">
                            <button className="btn btn-outline tech-btn" onClick={openModal}>
                                Initialize Connection
                                <MessageSquare size={18} className="btn-icon" />
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
