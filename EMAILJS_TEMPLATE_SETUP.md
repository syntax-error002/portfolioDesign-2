# 📧 EmailJS Template Configuration Guide

## ⚠️ IMPORTANT: Update Your Templates

You're only receiving the message because your EmailJS templates need to include ALL the variable names. Follow these exact steps:

---

## 🔧 Template 1: Quick Connect Modal

**Template ID:** `template_evz6thl`

### Go to EmailJS Dashboard → Email Templates → Edit `template_evz6thl`

### Subject Line:
```
New Quick Connect from {{from_name}}
```

### Email Body (HTML or Plain Text):
```
You have a new quick connect message from your portfolio!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{from_name}}

📧 Email: {{from_email}}

💬 Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this person at: {{from_email}}
```

### Variables Being Sent:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{message}}` - User's message

---

## 🔧 Template 2: Collab Form

**Template ID:** `template_c3tt9ce`

### Go to EmailJS Dashboard → Email Templates → Edit `template_c3tt9ce`

### Subject Line:
```
New Collaboration Request from {{from_name}}
```

### Email Body (HTML or Plain Text):
```
You have a new collaboration request from your portfolio!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{from_name}}

📧 Email: {{from_email}}

🏢 Company: {{company}}

📋 Project Type: {{project_type}}

💰 Budget: {{budget}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Project Details:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this person at: {{from_email}}
```

### Variables Being Sent:
- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email address
- `{{company}}` - Company/Organization (shows "Not specified" if empty)
- `{{project_type}}` - Selected project type (web, mobile, fullstack, design, consulting, other)
- `{{budget}}` - Budget range (shows "Not specified" if empty)
- `{{message}}` - Project details and requirements

---

## 📝 Step-by-Step Instructions:

### For Each Template:

1. **Login to EmailJS Dashboard**
   - Go to https://dashboard.emailjs.com/

2. **Navigate to Email Templates**
   - Click on "Email Templates" in the left sidebar

3. **Edit the Template**
   - Find the template by its ID
   - Click "Edit" button

4. **Update Subject Line**
   - Copy the subject line from above
   - Paste it in the "Subject" field

5. **Update Email Body**
   - Copy the email body from above
   - Paste it in the "Content" field
   - Make sure you're using the **exact variable names** with double curly braces: `{{variable_name}}`

6. **Save the Template**
   - Click "Save" button
   - Test the template using EmailJS's test feature

---

## ✅ Verification Checklist:

### Quick Connect Template (`template_evz6thl`):
- [ ] Subject includes `{{from_name}}`
- [ ] Body includes `{{from_name}}`
- [ ] Body includes `{{from_email}}`
- [ ] Body includes `{{message}}`

### Collab Template (`template_c3tt9ce`):
- [ ] Subject includes `{{from_name}}`
- [ ] Body includes `{{from_name}}`
- [ ] Body includes `{{from_email}}`
- [ ] Body includes `{{company}}`
- [ ] Body includes `{{project_type}}`
- [ ] Body includes `{{budget}}`
- [ ] Body includes `{{message}}`

---

## 🎨 Optional: HTML Email Template

If you want a nicer looking email, you can use HTML in the Content field:

### HTML Template Example (for Collab Form):

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #00FF88; margin-bottom: 20px;">🎉 New Collaboration Request!</h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong>👤 Name:</strong> {{from_name}}</p>
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> <a href="mailto:{{from_email}}" style="color: #00FF88;">{{from_email}}</a></p>
            <p style="margin: 10px 0;"><strong>🏢 Company:</strong> {{company}}</p>
            <p style="margin: 10px 0;"><strong>📋 Project Type:</strong> {{project_type}}</p>
            <p style="margin: 10px 0;"><strong>💰 Budget:</strong> {{budget}}</p>
        </div>
        
        <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; border-left: 4px solid #00FF88;">
            <h3 style="margin-top: 0; color: #333;">📝 Project Details:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center;">
            <a href="mailto:{{from_email}}" style="display: inline-block; padding: 12px 30px; background-color: #00FF88; color: black; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to {{from_name}}</a>
        </div>
    </div>
</div>
```

---

## 🧪 Testing Your Templates:

1. **Use EmailJS Test Feature:**
   - In the template editor, click "Test it" button
   - Fill in sample values for each variable
   - Send a test email to yourself

2. **Test from Your Website:**
   - Fill out the Quick Connect modal
   - Fill out the Collab form
   - Check your email inbox

---

## 🐛 Troubleshooting:

### Still only receiving the message?
1. **Check variable names** - They must match EXACTLY (case-sensitive)
2. **Use double curly braces** - `{{variable_name}}` not `{variable_name}`
3. **Save the template** - Make sure you clicked Save after editing
4. **Clear cache** - Try clearing your browser cache and testing again

### Variables showing as blank?
- This means the variable name in the template doesn't match what's being sent
- Double-check spelling and capitalization

---

## 📞 Need Help?

If you're still having issues:
1. Check the browser console for errors
2. Verify the template IDs match in `emailConfig.ts`
3. Make sure all variables use the exact names listed above
4. Test using EmailJS's built-in test feature first

---

**Once you update both templates with ALL the variables, you'll receive complete information in your emails!** ✅
