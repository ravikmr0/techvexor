# Vercel Environment Variables Setup Guide

## For Contact Form Email Functionality

### Required Environment Variables

Add these to your Vercel project dashboard:

| Variable Name | Description | Example Value |
|---|---|---|
| `HOSTINGER_SMTP_HOST` | Hostinger SMTP server address | `smtp.hostinger.com` |
| `HOSTINGER_SMTP_PORT` | SMTP port number | `465` (secure) or `587` (TLS) |
| `HOSTINGER_SMTP_USER` | Hostinger email account | `noreply@techvexor.com` |
| `HOSTINGER_SMTP_PASS` | Hostinger email password | `your_password_here` |
| `RECEIVER_EMAIL` | Email to receive submissions (optional) | `info@techvexor.com` |

### Step-by-Step Setup

1. **Log in to Vercel**: https://vercel.com/dashboard

2. **Select TechVexor Project** from your project list

3. **Navigate to Settings**: Click "Settings" tab

4. **Go to Environment Variables**: Click "Environment Variables" in left sidebar

5. **Add Each Variable**:
   - Click "Add New" button
   - Enter Variable Name (e.g., `HOSTINGER_SMTP_HOST`)
   - Enter Value
   - Select all environments (Production, Preview, Development)
   - Click "Save"

6. **Verify All Variables Are Added**: You should have all 4-5 variables visible

7. **Redeploy Your Project**:
   - Go to "Deployments" tab
   - Click the "..." menu on latest deployment
   - Select "Redeploy"
   - Choose "Use existing Environment Variables"

### Getting Your Hostinger SMTP Credentials

1. Log in to [Hostinger Control Panel](https://hpanel.hostinger.com)
2. Go to **Email** section
3. Click on your email account
4. Look for **SMTP Settings** or **Mail Server Settings**
5. Copy the SMTP host, port, and authentication details

### Testing After Setup

After adding environment variables and redeploying:

1. Visit your contact page on the deployed site
2. Fill out and submit the contact form
3. Check that you receive both:
   - The contact form submission email
   - Auto-reply email to the user

### Troubleshooting

- **Error: "Server configuration error"** → Environment variables not set or spelled incorrectly
- **Error: "Failed to send email"** → SMTP credentials are wrong or email account is disabled
- **Email not received** → Check the `RECEIVER_EMAIL` is correct, or check spam folder
