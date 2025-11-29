// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template for each form
// 4. Get your Public Key from Account > API Keys
// 5. Replace the values below with your actual credentials

export const EMAILJS_CONFIG = {
    // Your EmailJS Public Key (from Account > API Keys)
    PUBLIC_KEY: 'QQm2u4wBOFkr6tzho',

    // Service ID (from Email Services)
    SERVICE_ID: 'service_b9c42g4',

    // Template IDs
    COLLAB_TEMPLATE_ID: 'template_c3tt9ce',  // For the Collab page form
    QUICK_CONNECT_TEMPLATE_ID: 'template_evz6thl',  // For the Quick Connect modal
};

// Template Variables Guide:
//
// For Collab Form Template, use these variables:
// - {{from_name}} - User's full name
// - {{from_email}} - User's email
// - {{company}} - Company/Organization
// - {{project_type}} - Type of project
// - {{budget}} - Budget range
// - {{message}} - Project details
//
// For Quick Connect Template, use these variables:
// - {{from_name}} - User's name
// - {{from_email}} - User's email
// - {{message}} - User's message
//
// Example Email Template:
// Subject: New Contact from {{from_name}}
//
// Body:
// You have a new message from your portfolio!
//
// Name: {{from_name}}
// Email: {{from_email}}
// Message: {{message}}
