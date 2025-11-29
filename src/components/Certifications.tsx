import { useState, useEffect } from 'react';
import './Certifications.css';

interface Certification {
    title: string;
    issuer: string;
    date: string;
    credentialLink: string;
    logo: string;
}

const certifications: Certification[] = [
    {
        title: 'Controllers Job Simulation',
        issuer: 'Goldman Sachs',
        date: 'Nov 2025',
        credentialLink: '#',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg'
    },
    {
        title: 'Data Analytics Job Simulation',
        issuer: 'Deloitte',
        date: 'Nov 2025',
        credentialLink: '#',
        logo: 'https://th.bing.com/th/id/OIP.o19BG46ZQEO95vgH4HMz5gHaHa?w=170&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
    },
    {
        title: 'AWS Fundamentals',
        issuer: 'Coursera',
        date: '2024',
        credentialLink: '#',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg'
    },
    {
        title: 'Google UX Design Professional',
        issuer: 'Coursera',
        date: '2023',
        credentialLink: '#',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg'
    }
];

const Certifications = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <section className="section certifications" id="certifications">
            <div className="container">
                <div className="section-header">
                    <h2><span className="gradient-text">Certifications</span> & Badges</h2>
                    <p>Professional qualifications and milestones achieved</p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <a
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card"
                            key={index}
                        >
                            <div className="cert-icon-wrapper">
                                <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
                            </div>
                            <div className="cert-content">
                                <h3>{cert.title}</h3>
                                <div className="cert-details">
                                    <span className="cert-issuer">{cert.issuer}</span>
                                    <span className="cert-dot">•</span>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                            </div>
                            <div className="cert-arrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="cert-gallery-header">
                    <h3>Verified <span className="gradient-text">Credentials</span></h3>
                </div>

                <div className="cert-gallery">
                    {[
                        'cert_goldman.png',
                        'cert_deloitte.png',
                        'CERTIFICATE_LANDING_PAGE~6862C2VR8O9Y.jpeg',
                        'CERTIFICATE_LANDING_PAGE~7XN439BR9KNJ.jpeg',
                        'CERTIFICATE_LANDING_PAGE~OMRZXE1W0885.jpeg',
                        'CERTIFICATE_LANDING_PAGE~OP7GT4FGAUZF.jpeg',
                        'CERTIFICATE_LANDING_PAGE~SVCGJVGTJQQ7.jpeg',
                        'CERTIFICATE_LANDING_PAGE~YFHUVWP79JWM.jpeg',
                        'CERTIFICATE_LANDING_PAGE~Z50FG7LFHFCA.jpeg',
                        'CERTIFICATE_LANDING_PAGE~ZSP1UJXXGCG8.jpeg'
                    ].map((img, index) => (
                        <div
                            key={index}
                            className="cert-image-card"
                            onClick={() => setSelectedImage(`/${img}`)}
                        >
                            <img src={`/${img}`} alt="Certificate" loading="lazy" />
                            <div className="cert-image-overlay">
                                <span>View Full Screen</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Screen Image Modal */}
            {selectedImage && (
                <div className="cert-modal" onClick={() => setSelectedImage(null)}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="cert-modal-close" onClick={() => setSelectedImage(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <img src={selectedImage} alt="Certificate Full View" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
