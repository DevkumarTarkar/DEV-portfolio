# Dev Kumar Tarkar — Portfolio

This repository contains a React + Vite portfolio website for Dev Kumar Tarkar. The site is a static frontend that reads editable content from `src/data/portfolioData.js` and serves static assets from the `public/` folder.

Quick start
1. Install dependencies:

```bash
npm install
```

2. Run development server with HMR:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

Where to edit content
- Centralized content file: `src/data/portfolioData.js` — update hero text, resume URL, socials, projects, creative cards, achievements, skills, and contact details here.
- Static assets (images, favicon, resume): put them in the `public/` folder.

Contact form behaviour
- The contact form uses a `mailto:` fallback that opens the visitor's mail client with a prefilled message. To enable direct submissions without relying on the visitor's mail client, integrate a service such as EmailJS, Formspree, or a serverless function.

Design tokens and colors
- Theme variables live in `src/index.css` (`:root` variables). Change `--gold` to adjust the yellow accent used across the site.

Deployment
- The app is a static site — host on GitHub Pages, Netlify, Vercel, or any static file host. For Vercel or Netlify, connect the repo and use the default `npm run build` command.

Contributing
- Make edits in a feature branch and open a PR. Keep content changes in `src/data/portfolioData.js` to avoid component edits unless necessary.

License
- This repo contains personal portfolio assets. No license specified.

If you want, I can wire EmailJS or Formspree for server-less contact delivery, or generate additional favicon sizes.

