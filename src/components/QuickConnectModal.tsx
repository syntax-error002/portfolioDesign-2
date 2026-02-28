import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailConfig';
import './QuickConnectModal.css';

interface QuickConnectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

const QuickConnectModal = ({ isOpen, onClose }: QuickConnectModalProps) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                message: formData.message,
            };

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.QUICK_CONNECT_TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Quick connect email sent successfully!');
            setSubmitStatus('success');

            // Reset and close after success
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                setSubmitStatus('idle');
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="modal-header">
                    <h2>Quick <span className="accent-text">Connect</span></h2>
                    <p>Send me a quick message and I'll get back to you soon!</p>
                </div>

                <form className="quick-connect-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="quick-name">Your Name *</label>
                        <input
                            type="text"
                            id="quick-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            disabled={isSubmitting || submitStatus === 'success'}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quick-email">Email Address *</label>
                        <input
                            type="email"
                            id="quick-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            disabled={isSubmitting || submitStatus === 'success'}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quick-message">Message *</label>
                        <textarea
                            id="quick-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Hi! I'd love to discuss..."
                            disabled={isSubmitting || submitStatus === 'success'}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                        disabled={isSubmitting || submitStatus === 'success'}
                    >
                        {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Sent!' : 'Send Message'}
                    </button>

                    {submitStatus === 'success' && (
                        <div className="success-message">
                            Message sent! I'll get back to you soon.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="error-message">
                            Failed to send message. Please try again or email me directly.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default QuickConnectModal;
