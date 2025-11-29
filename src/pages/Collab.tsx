import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailConfig';
import './Collab.css';

interface FormData {
    name: string;
    email: string;
    company: string;
    budget: string;
    projectType: string;
    message: string;
}

const Collab = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        budget: '',
        projectType: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Send email using EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                company: formData.company || 'Not specified',
                project_type: formData.projectType,
                budget: formData.budget || 'Not specified',
                message: formData.message,
            };

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.COLLAB_TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Collab form email sent successfully!');
            setSubmitStatus('success');

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    budget: '',
                    projectType: '',
                    message: '',
                });
                setSubmitStatus('idle');
            }, 3000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 4000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="collab-page">
            <div className="collab-container">
                <div className="collab-header">
                    <h1>Let's Work <span className="gradient-text">Together</span></h1>
                    <p>Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
                </div>

                <div className="collab-content">
                    <div className="collab-info">
                        <div className="info-card">
                            <div className="info-icon">💼</div>
                            <h3>Hire Me For</h3>
                            <ul>
                                <li>Full-Stack Development</li>
                                <li>Frontend Development</li>
                                <li>Mobile App Development</li>
                                <li>UI/UX Design</li>
                                <li>Technical Consulting</li>
                            </ul>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">⚡</div>
                            <h3>What I Offer</h3>
                            <ul>
                                <li>Clean, Modern Code</li>
                                <li>Responsive Design</li>
                                <li>Fast Turnaround</li>
                                <li>Regular Updates</li>
                                <li>Post-Launch Support</li>
                            </ul>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">🎯</div>
                            <h3>My Process</h3>
                            <ul>
                                <li>Discovery & Planning</li>
                                <li>Design & Prototyping</li>
                                <li>Development & Testing</li>
                                <li>Launch & Optimization</li>
                                <li>Maintenance & Support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="collab-form-wrapper">
                        <form className="collab-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company / Organization</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="projectType">Project Type *</label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="web">Web Development</option>
                                        <option value="mobile">Mobile App</option>
                                        <option value="fullstack">Full-Stack Project</option>
                                        <option value="design">UI/UX Design</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="budget">Budget Range</label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Budget</option>
                                        <option value="<5k">Less than $5,000</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-50k">$25,000 - $50,000</option>
                                        <option value=">50k">$50,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Project Details *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Sent!' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    Thank you! I'll get back to you within 24 hours.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="error-message">
                                    Failed to send message. Please try again or contact me directly via email.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collab;
