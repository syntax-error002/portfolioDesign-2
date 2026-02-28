import { useState, useRef, useEffect } from 'react';
import { MessageSquareText, X, Send, Bot } from 'lucide-react';
import './ChatbotWidget.css';

type Message = {
    id: string;
    sender: 'user' | 'bot';
    text: string;
    options?: string[];
};

const KNOWLEDGE_BASE = [
    {
        keywords: ['about shaswat', 'who is', 'background', 'education', 'tell me about'],
        question: 'Tell me about Shaswat',
        answer: "I'm Shaswat Kureel, a 2nd-year engineering student from Bharuch, Gujarat. I love building real-world projects, scalable edtech apps, and AI-driven tools. I focus on turning rough ideas into polished, usable products rather than just talking about them!"
    },
    {
        keywords: ['about work', 'experience', 'internships', 'job', 'work'],
        question: 'What is your work experience?',
        answer: "I've worked on scalable edtech applications, AI-driven tools, and completed job simulations like Deloitte Australia Data Analytics and Goldman Sachs Controllers."
    },
    {
        keywords: ['projects', 'what have you built', 'portfolio', 'drone', 'rift'],
        question: 'What are your top projects?',
        answer: "My top projects include:\n- Drone Vision (Real-Time Animal Detection)\n- RIFT (Financial Forensics Engine)\n- Crop Health Diagnosis\n- Connect (Voice & Video Calling App)\n- SQLeditor_"
    },
    {
        keywords: ['skills', 'technologies', 'tech stack', 'languages', 'programming'],
        question: "What are your technical skills?",
        answer: "My top skills include Competitive Programming, React, React Native, Python, AI/ML, and Cross-functional Team Leadership. I also excel at rapidly learning new technologies to ship products fast."
    },
    {
        keywords: ['achievements', 'awards', 'honors', 'medals', 'competitions'],
        question: 'What are your achievements?',
        answer: "I was awarded Best Student of the Year 2024. I hold 2x Gold in CCP Algozenith, I'm a State Lead at Elite Coders, OS Mentor @SWOC, and a 7x Grand Finalist in various hackathons."
    },
    {
        keywords: ['contact', 'email', 'phone', 'github', 'reach', 'hire'],
        question: 'How can I contact you?',
        answer: "You can email me at kureelshaswat1@gmail.com, or call/WhatsApp me at +91 7862008920. My GitHub username is syntax-error002."
    }
];

const INITIAL_MESSAGE: Message = {
    id: 'init',
    sender: 'bot',
    text: "Hi! I'm Shaswat's virtual assistant. I can answer questions about his background, projects, and skills. What would you like to know?",
    options: KNOWLEDGE_BASE.map(kb => kb.question)
};

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    // Auto scroll when messages change
    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, suggestions]);

    const handleInput = (text: string) => {
        setInputValue(text);
        if (!text.trim()) {
            setSuggestions([]);
            return;
        }

        const lowerText = text.toLowerCase();
        const matches = KNOWLEDGE_BASE.filter(kb =>
            kb.question.toLowerCase().includes(lowerText) ||
            kb.keywords.some(kw => kw.toLowerCase().includes(lowerText))
        ).map(kb => kb.question);

        setSuggestions(matches);
    };

    const handleSend = (question: string) => {
        if (!question) return;

        // Find answer
        const kbMatch = KNOWLEDGE_BASE.find(kb => kb.question === question);

        const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: question };

        const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: kbMatch ? kbMatch.answer : "I couldn't find an exact answer for that. Please choose one of the suggested topics!",
            options: kbMatch ? [] : KNOWLEDGE_BASE.map(kb => kb.question)
        };

        setMessages(prev => [...prev, userMsg, botMsg]);
        setInputValue('');
        setSuggestions([]);
    };

    return (
        <div className="chatbot-widget-container">
            {isOpen && (
                <div className="chatbot-window fade-in-bot">
                    <div className="chatbot-header">
                        <div className="chatbot-header-info">
                            <div className="chatbot-avatar-small">
                                <img src="/chatbot.png" alt="Bot" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('fallback-icon'); }} />
                                <Bot size={20} className="fallback-svg" />
                            </div>
                            <div>
                                <h3>SHCODE Assistant</h3>
                                <span className="status-online"><span className="dot"></span> Online</span>
                            </div>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close Chat">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                                <div className="message-bubble">
                                    {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                                </div>
                                {msg.options && msg.options.length > 0 && (
                                    <div className="message-options">
                                        {msg.options.map((opt, i) => (
                                            <button key={i} className="option-btn" onClick={() => handleSend(opt)}>
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} style={{ height: 1 }} />
                    </div>

                    <div className="chatbot-input-area">
                        {suggestions.length > 0 && (
                            <div className="suggestions-popover">
                                {suggestions.map((sug, i) => (
                                    <button key={i} className="suggestion-item" onClick={() => handleSend(sug)}>
                                        {sug}
                                    </button>
                                ))}
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Type topic (e.g. 'about')..."
                            value={inputValue}
                            onChange={(e) => handleInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && suggestions.length > 0) {
                                    handleSend(suggestions[0]);
                                }
                            }}
                        />
                        <button
                            className="send-btn"
                            disabled={suggestions.length === 0 && !KNOWLEDGE_BASE.find(kb => kb.question.toLowerCase() === inputValue.toLowerCase())}
                            onClick={() => {
                                if (suggestions.length > 0) handleSend(suggestions[0]);
                                else {
                                    const match = KNOWLEDGE_BASE.find(kb => kb.question.toLowerCase() === inputValue.toLowerCase());
                                    if (match) handleSend(match.question);
                                }
                            }}
                            aria-label="Send"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            {!isOpen && (
                <button
                    className={`chatbot-btn float-anim`}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open chat"
                >
                    <div className="chatbot-img-wrapper">
                        <img
                            src="/chatbot.png"
                            alt="Chatbot"
                            className="chatbot-img"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('fallback-icon');
                            }}
                        />
                        <MessageSquareText size={32} className="fallback-svg" />
                    </div>
                </button>
            )}
        </div>
    );
};

export default ChatbotWidget;
