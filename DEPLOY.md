# Privacy Chick — GitHub Pages Deployment Guide

## What's in this package

```
privacychick/
├── index.html              ← Homepage
├── 2fa.html                ← Two-Factor Authentication guide
├── passwords.html          ← Passwords guide
├── email.html              ← Email guide
├── browser.html            ← Browser guide
├── search.html             ← Search Engine guide
├── social.html             ← Social Media guide
├── text.html               ← Text Messaging guide
├── credit.html             ← Credit Freeze guide
├── pwned.html              ← Data Breaches guide
├── vpn.html                ← VPN guide
├── ai.html                 ← AI Assistants guide
├── about.html              ← About page
├── contact.html            ← Contact page
├── privacy.html            ← Privacy Policy
├── css/
│   └── style.css           ← All styles
├── js/
│   └── main.js             ← Navigation + tabs + dynamic year
└── images/
    ├── topics/             ← 11 topic card/hero images
    └── logos/              ← Product logos (Proton, Bitwarden, etc.)
```

---

## Deploying to GitHub Pages

### Option A — Deploy to your existing privacychick.github.io repository

1. **Clone your existing repository** (if you don't have it locally):
   ```bash
   git clone https://github.com/privacychick/privacychick.github.io
   cd privacychick.github.io
   ```

2. **Back up your existing files** (optional but recommended):
   ```bash
   git checkout -b backup-old-site
   git push origin backup-old-site
   git checkout main
   ```

3. **Replace the site files** with the new ones from this package:
   - Delete all existing `.html` files, `css/`, `js/`, and `images/` folders
   - Copy all files from this package into the repository root

4. **Commit and push**:
   ```bash
   git add -A
   git commit -m "Redesign: new Privacy Chick site"
   git push origin main
   ```

5. **Your site will be live** at `https://privacychick.io` within 1–2 minutes.

---

### Option B — Deploy to a new repository

1. **Create a new GitHub repository** named `privacychick.github.io`
   - Go to https://github.com/new
   - Name it exactly: `privacychick.github.io`
   - Set it to Public
   - Do NOT initialize with a README

2. **Upload the files**:
   ```bash
   cd /path/to/privacychick/   # the folder from this package
   git init
   git add -A
   git commit -m "Initial commit: Privacy Chick redesign"
   git branch -M main
   git remote add origin https://github.com/privacychick/privacychick.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** (if not already enabled):
   - Go to your repository → Settings → Pages
   - Under "Source", select `main` branch, `/ (root)` folder
   - Click Save

4. **Your site will be live** at `https://privacychick.github.io` (or your custom domain if configured).

---

## Setting up a custom domain (privacychick.io)

If you have a custom domain configured:

1. Add a file named `CNAME` (no extension) to the repository root containing just:
   ```
   privacychick.io
   ```

2. In your domain registrar's DNS settings, ensure these records exist:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  privacychick.github.io.
   ```

3. In GitHub repository Settings → Pages, enter `privacychick.io` as your custom domain and check "Enforce HTTPS".

---

## Contact form

The contact page uses a form with `data-netlify="true"` attribute. This works automatically if you host on **Netlify** instead of GitHub Pages. 

If staying on GitHub Pages, you have two options:
- **Formspree** (free tier): Replace the `<form>` action with `https://formspree.io/f/YOUR_ID`
- **EmailJS**: A free JavaScript-based form submission service

---

## Keeping the site updated

The copyright year updates automatically via JavaScript — no changes needed each year.

For content updates, edit the relevant `.html` file directly. Each page follows the same structure:
- The **Quick Guide** content is inside `<div id="quick-guide" class="tab-panel active">`
- The **Learn More** content is inside `<div id="learn-more" class="tab-panel">`

---

*Built April 2026. All images are AI-generated originals. All external links verified at time of build.*
