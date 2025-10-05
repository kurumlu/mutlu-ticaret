# Deployment Guide - Turkish Enterprise Website

This guide will help you deploy your Turkish enterprise website to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at https://vercel.com)
- Git installed on your computer

## Step 1: Initialize Git Repository

If you haven't already initialized a Git repository, run these commands in your project directory:

\`\`\`bash
git init
git add .
git commit -m "Initial commit: Turkish enterprise website"
\`\`\`

## Step 2: Push to GitHub

1. Create a new repository on GitHub (https://github.com/new)
2. Don't initialize it with README, .gitignore, or license
3. Copy the repository URL
4. Run these commands:

\`\`\`bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git branch -M main
git push -u origin main
\`\`\`

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js settings
5. Click "Deploy"

### Option B: Using Vercel CLI

1. Install Vercel CLI:
\`\`\`bash
npm i -g vercel
\`\`\`

2. Login to Vercel:
\`\`\`bash
vercel login
\`\`\`

3. Deploy:
\`\`\`bash
vercel
\`\`\`

4. Follow the prompts to complete deployment

## Step 4: Configure Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard for content management
│   ├── api/               # API routes for content and products
│   ├── urunler/           # Products pages
│   └── page.tsx           # Homepage
├── components/            # React components
├── data/                  # JSON files for content (editable)
│   ├── products.json      # Product data
│   └── site-content.json  # Site content (hero, about, contact)
├── lib/                   # Utility functions
└── public/                # Static assets

\`\`\`

## Content Management

### Updating Content Without Code

1. Visit `/admin` on your deployed site
2. Edit content directly in the admin panel
3. Changes are saved to JSON files

### Manual Content Updates

Edit these files directly:
- `data/site-content.json` - Homepage content, contact info
- `data/products.json` - Product listings and details

After editing, commit and push:
\`\`\`bash
git add .
git commit -m "Update content"
git push
\`\`\`

Vercel will automatically redeploy.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Turkish language support
- ✅ Product catalog with filtering
- ✅ Contact form with WhatsApp integration
- ✅ Embedded Google Maps
- ✅ Admin dashboard for content management
- ✅ SEO optimized
- ✅ Fast loading with Next.js 15

## Support

For issues or questions:
- Check Vercel documentation: https://vercel.com/docs
- Review Next.js documentation: https://nextjs.org/docs

## Environment Variables

This project doesn't require any environment variables for basic functionality. All content is managed through JSON files.

## Performance Tips

- Images are optimized automatically by Next.js
- The site uses static generation where possible
- Admin panel is client-side only for simplicity

## Updating the Site

To make changes:
1. Edit files locally
2. Test with `npm run dev`
3. Commit changes: `git commit -am "Your message"`
4. Push to GitHub: `git push`
5. Vercel automatically deploys the changes
