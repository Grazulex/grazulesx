# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for **grazulex.be**, a professional portfolio and consulting website for Jean-Marc Strauven, a Laravel expert with 15+ years of experience.

**Purpose:** Convert GitHub package visitors into consulting/freelance clients.

**Tech Stack:** Pure HTML5/CSS3/Vanilla JavaScript - no frameworks, no build tools, 100% static.

## Architecture

### File Structure

```
grazulex/
├── index.html      # Single-page application with all content
├── styles.css      # All styles including dark/light mode
├── script.js       # Dark mode toggle & interactions
└── README.md       # Deployment & maintenance instructions
```

### Key Design Decisions

1. **No frameworks:** Pure HTML/CSS/JS for maximum performance and simplicity
2. **Developer-focused design:** Dark mode by default, targeting Laravel developers
3. **Single-page layout:** All content on one page with smooth scroll navigation
4. **Static site:** No backend, no build process - deploy anywhere
5. **Mobile-first responsive:** Works perfectly on all screen sizes

### CSS Architecture

- CSS variables for theming (`:root` and `.dark-mode`)
- Mobile-first responsive design with media queries
- No CSS preprocessors (SASS/LESS) - vanilla CSS only
- Transitions and animations for smooth UX

### JavaScript Features

- Dark/light mode toggle with `localStorage` persistence
- System theme preference detection
- Smooth scroll for anchor links
- Fade-in animations on scroll (IntersectionObserver)
- Keyboard shortcuts (Ctrl/Cmd + D for theme toggle)

## Content Updates

### Updating Package Statistics

When package download numbers change, update in `index.html`:

1. **Hero stats** (lines 45-60): Total downloads, packages, years, stars
2. **Package cards** (lines 79, 101, 123): Individual package download counts

### Adding a New Package

Copy an existing `.package-card` block (lines 76-96) and modify:
- Package icon emoji
- Package name
- Download stats
- Description
- GitHub link

### Updating Services

Service cards are in lines 158-262. Each `.service-card` includes:
- Icon emoji
- Service name and description
- Feature list (`<ul class="service-details">`)
- Pricing (`<div class="service-pricing">`)

### Updating Experience Timeline

Timeline items are in lines 300-320. Each `.timeline-item` has:
- Year range
- Job title
- Company and description

## Deployment Commands

**Test locally:**
```bash
python3 -m http.server 8000
# or
php -S localhost:8000
```

**Deploy to Netlify:**
```bash
# Via Netlify Drop: Just drag & drop the folder
# Or via CLI:
npm i -g netlify-cli
netlify deploy
```

**Deploy to Vercel:**
```bash
npm i -g vercel
vercel
```

**Deploy to GitHub Pages:**
```bash
git init
git add .
git commit -m "Deploy grazulex.be"
git branch -M main
git remote add origin https://github.com/Grazulex/grazulex.git
git push -u origin main
# Then enable GitHub Pages in repo settings
```

## Maintenance Tasks

### Regular Updates (Monthly)

1. Update package download statistics from Packagist
2. Check for broken GitHub links
3. Update experience section if job changes
4. Verify all contact links work

### Performance Monitoring

Site should maintain:
- Load time < 2 seconds
- Lighthouse score > 90
- Mobile-friendly (Google Mobile-Friendly Test)

### SEO Tasks

- Submit sitemap to Google Search Console
- Update meta descriptions if needed
- Monitor backlinks from GitHub packages
- Verify Open Graph tags work on social media

## Color Scheme

**Accent color:** `#FF2D20` (Laravel red)

**Dark mode (default):**
- Background: `#0d1117` (GitHub dark)
- Secondary: `#161b22`
- Text: `#e6edf3`

**Light mode:**
- Background: `#ffffff`
- Secondary: `#f8f9fa`
- Text: `#1a1a1a`

## Important Constraints

1. **Freelance context:** All services are done in evenings/weekends (full-time job at BNP Paribas Fortis)
2. **Response time:** Mention 48-72h response time
3. **Languages:** Site primarily in French, but developer is trilingual (FR/EN/NL)
4. **Target audience:** Laravel developers discovering the packages on GitHub

## Future Enhancements (Not Yet Implemented)

- Blog section for Laravel tutorials
- Testimonials from clients
- Newsletter signup
- Case studies
- Dark mode transition animations
- More package showcase (currently showing top 3)

## Common Modifications

### Change accent color
Edit CSS variable `--accent` in `:root` (line 9 in styles.css)

### Add a new section
1. Add HTML in index.html
2. Add anchor link in hero CTAs or header
3. Style the section in styles.css
4. Ensure responsive design works

### Minify for production
```bash
npx cleancss -o styles.min.css styles.css
npx terser script.js -o script.min.js
# Update <link> and <script> tags in index.html
```

## Contact Information

- **Owner:** Jean-Marc Strauven
- **Email:** jms@grazulex.be
- **GitHub:** github.com/Grazulex
- **Domain:** grazulex.be

## Testing Checklist

Before deploying changes:
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on mobile (iPhone/Android)
- [ ] Test dark/light mode toggle
- [ ] Verify all external links work
- [ ] Check responsive breakpoints (768px, 480px)
- [ ] Test smooth scroll navigation
- [ ] Validate HTML (validator.w3.org)
- [ ] Check Lighthouse performance score
- [ ] Verify no console errors
