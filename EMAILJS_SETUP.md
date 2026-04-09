# EmailJS Setup Guide for Roopak Technologies Contact Form

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click **"Sign Up"** → Create a free account
3. Verify your email

### Step 2: Get Your Credentials
After signing up:

#### A) Get Service ID:
1. Go to **Admin Panel** → **Email Services**
2. Click **"Add Service"**
3. Select **Gmail** (or your email provider)
4. Follow the connection steps
5. Copy your **Service ID** (looks like: `service_xxxxxxxxxx`)

#### B) Get Template ID:
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Use this template:

```
Name: Contact Form Template
Subject: New Contact Message from {{from_name}}

Email Template:
---
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
---
```

4. Click **"Save"**
5. Copy your **Template ID** (looks like: `template_xxxxxxxxxx`)

#### C) Get Public Key:
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxx`)

### Step 3: Configure Your Project

#### Option A: Using Environment Variables (Recommended)
Create a `.env.local` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
VITE_RECIPIENT_EMAIL=raghavb1979@gmail.com
```

#### Option B: Direct Configuration
Edit `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_xxxxxxxxxx",
  TEMPLATE_ID: "template_xxxxxxxxxx",
  PUBLIC_KEY: "xxxxxxxxxxxxxxxx",
};
```

### Step 4: Test Your Setup
1. Run development server: `npm run dev`
2. Go to your website
3. Click "Contact Us" button
4. Fill out the form and submit
5. Check your email for the message

## 📧 How It Works

**Before (using mailto):**
- ❌ Opens user's email client
- ❌ Security warnings
- ❌ May not work on all devices

**After (using EmailJS):**
- ✅ Sends email directly from browser
- ✅ No authentication issues
- ✅ Works everywhere
- ✅ Professional delivery

## 🎯 Email Flow

1. Customer fills contact form
2. Clicks "Send Message"
3. EmailJS sends email directly to your inbox
4. You receive professional formatted email with:
   - Customer Name
   - Customer Email
   - Phone Number
   - Full Message

## 🆓 Free Tier Limits

- **200 emails per month** (free tier)
- Upgrade anytime for more
- Perfect for small to medium businesses

## ✅ Verification Checklist

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] Credentials copied to `.env.local`
- [ ] Development server running (`npm run dev`)
- [ ] Contact form tested successfully
- [ ] Test email received

## 🆘 Troubleshooting

### "Authentication is locked" error:
- ✅ Fixed! Now using EmailJS instead of mailto

### Email not sending:
1. Check `.env.local` file exists
2. Verify all credentials are correct (no extra spaces)
3. Check browser console for errors
4. Restart dev server after adding `.env.local`

### Emails going to spam:
1. Update EmailJS template email address
2. Add SPF/DKIM records (optional advanced setup)

## 📚 Resources

- EmailJS Docs: https://www.emailjs.com/docs/
- Dashboard: https://dashboard.emailjs.com/
- Support: support@emailjs.com

---

**After following these steps, your contact form will work seamlessly! 🎉**
