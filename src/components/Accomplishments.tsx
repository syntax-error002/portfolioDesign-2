import { useState, useEffect } from 'react';
import './Accomplishments.css';

const Accomplishments = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        setCurrentDate(date.toLocaleDateString('en-US', options));
    }, []);

    return (
        <section className="section accomplishments" id="accomplishments">
            <div className="container">
                <div className="section-header">
                    <h2><span className="accent-text">Impact</span> & Milestones</h2>
                </div>

                <div className="bento-grid">
                    {/* Hackathons - Large Hero Card */}
                    <div className="bento-item bento-hero">
                        <div className="bento-content">
                            <div className="bento-icon">🏆</div>
                            <div className="bento-stat">15+</div>
                            <h3>Hackathons Participated</h3>
                            <p>Consistently pushing boundaries by building rapid, scalable solutions under pressure. From AI-driven tools to blockchain innovations, I thrive in competitive coding environments.</p>

                            <div className="bento-tags">
                                <span>🥇 5+ Finalist Wins</span>
                                <span>🎤 2 Hosted & Managed</span>
                                <span>💡 10+ Projects Shipped</span>
                            </div>

                            <div className="hackathon-stack">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Python</span>
                                <span>Solidity</span>
                            </div>

                            <div className="bento-footer">
                                <span className="live-indicator">
                                    <span className="blink">●</span> Live Update: {currentDate}
                                </span>
                            </div>
                        </div>
                        <div className="bento-bg-glow"></div>
                    </div>

                    {/* Academic - Tall Card */}
                    <div className="bento-item bento-tall">
                        <div className="bento-content">
                            <div className="bento-icon">🎓</div>
                            <h3>Academic Excellence</h3>
                            <ul className="bento-list">
                                <li><strong>🥇 Gold Medalist</strong><span>CS Branch Topper</span></li>
                                <li><strong>📜 Academic Scholar</strong><span>Consistent Excellence</span></li>
                                <li><strong>🌟 Student of the Year</strong><span>Overall Performance</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Leadership - Standard Card */}
                    <div className="bento-item">
                        <div className="bento-content">
                            <div className="bento-icon">🚀</div>
                            <h3>Leadership</h3>
                            <p>Tech Community Lead & Campus Ambassador (AZ 2025-26)</p>
                            <div className="bento-chip">📢 CCP Lead</div>
                        </div>
                    </div>

                    {/* Exams - Standard Card */}
                    <div className="bento-item">
                        <div className="bento-content">
                            <div className="bento-icon">🧠</div>
                            <h3>Competitive Exams</h3>
                            <div className="exam-badges">
                                <span className="exam-badge">JEE Mains</span>
                                <span className="exam-badge">IAT (IISERs)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accomplishments;
