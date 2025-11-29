# Email Integration Setup Guide

## ✅ What's Been Implemented

Both forms in your portfolio now have EmailJS integration:

1. **Quick Connect Modal** (Contact section → "Get In Touch" button)
2. **Collab Page Form** (/collab page)

## 📧 EmailJS Setup Instructions

Follow these steps to enable email functionality:

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection wizard
5. Copy the **Service ID** (you'll need this later)

### Step 3: Create Email Templates

You need to create **TWO** email templates:

#### Template 1: Quick Connect (for the modal form)

1. Go to **Email Templates** → **Create New Template**
2. Name it: `quick_connect_template`
3. Set up the template with these variables:

**Subject:** New Quick Connect from {{from_name}}

**Body:**
```
You have a new quick connect message!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save and copy the **Template ID**

#### Template 2: Collab Form (for the /collab page)

1. Create another template
2. Name it: `collab_form_template`
3. Set up with these variables:

**Subject:** New Collaboration Request from {{from_name}}

**Body:**
```
You have a new collaboration request!

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Project Type: {{project_type}}
Budget: {{budget}}

Project Details:
{{message}}
```

4. Save and copy the **Template ID**

### Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy it

### Step 5: Update Configuration File

Open `src/config/emailConfig.ts` and replace the placeholders:

```typescript
export const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_public_key_here',  // From Step 4
    SERVICE_ID: 'your_service_id_here',  // From Step 2
    COLLAB_TEMPLATE_ID: 'collab_form_template_id',  // From Step 3 (Template 2)
    QUICK_CONNECT_TEMPLATE_ID: 'quick_connect_template_id',  // From Step 3 (Template 1)
};
```

### Step 6: Test the Forms

1. Fill out the Quick Connect modal
2. Fill out the Collab page form
3. Check your email inbox for the messages!

## 🎯 Form Fields Mapping

### Quick Connect Modal
- `from_name` → User's name
- `from_email` → User's email
- `message` → User's message

### Collab Form
- `from_name` → User's full name
- `from_email` → User's email
- `company` → Company/Organization (optional)
- `project_type` → Selected project type
- `budget` → Selected budget range (optional)
- `message` → Project details

## 🔧 Troubleshooting

### Emails not sending?
1. Check browser console for errors
2. Verify all IDs in `emailConfig.ts` are correct
3. Make sure template variable names match exactly
4. Check EmailJS dashboard for quota limits (free tier: 200 emails/month)

### Getting errors?
- Error messages will appear below the form
- Check console logs for detailed error information
- Verify your EmailJS account is active

## 💡 Tips

- **Test Mode**: EmailJS has a test mode in the dashboard
- **Email Quota**: Free tier gives you 200 emails/month
- **Custom Domain**: You can set up a custom "from" email address
- **Auto-Reply**: You can set up automatic replies to users

## 📝 Notes

- Forms will show loading state while sending
- Success message appears after successful send
- Error message appears if sending fails
- Forms reset automatically after successful submission

---

**Need Help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
