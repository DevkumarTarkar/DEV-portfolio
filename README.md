# Dev Kumar Tarkar — Portfolio

A modern personal portfolio built with React and Vite. This project showcases Dev Kumar Tarkar’s experience in AI, machine learning, data science, and frontend development through a polished, responsive website.

## Live Demo

- Production: https://dev-portfolio-alpha-lyart.vercel.app

## Tech Stack

- React 19
- Vite
- CSS custom properties for theming
- GitHub + Vercel deployment workflow

## Key Features

- Responsive, mobile-first portfolio layout
- Centralized content configuration in `src/data/portfolioData.js`
- Static asset handling through `public/`
- Contact form with `mailto:` integration
- Deployment-ready for Vercel and static hosts

## Getting Started

Clone the repository:

```bash
git clone https://github.com/DevkumarTarkar/DEV-portfolio.git
cd DEV-portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production output:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Customize Content

All editable portfolio content lives in:

- `src/data/portfolioData.js`

Update these sections there:

- Hero text, roles, description
- Resume link and social profiles
- About section copy, timeline, stats, and tags
- Skills and certifications
- Project entries and creative highlights
- Achievements and contact details

## Assets

Static files and images are stored in the `public/` folder. Common assets include:

- `public/hero-photo.jpg`
- `public/profile-photo.jpeg`
- `public/favicon.svg`

## Deployment

This site is optimized for static deployment on Vercel.

### Vercel Deployment

1. Connect the repository to Vercel.
2. Use the default root directory.
3. Set the build command to:

```bash
npm run build
```

4. Set the output directory to `dist`.

## Git Workflow

Recommended branch workflow:

```bash
git checkout -b feature/your-change
# make updates
npm run build
git add .
git commit -m "Your descriptive message"
git push origin feature/your-change
```

Then open a pull request to merge into `main`.

## Styling and Theme

Theme variables are defined in `src/index.css` using CSS custom properties. Update the color palette there to adjust the site’s visual style.

## Notes

- Prefer content edits in `src/data/portfolioData.js`.
- Avoid changing component structure unless necessary for design updates.
- Use `public/` for static assets only.

## Contact

For updates or live deployment changes, push to the `main` branch and Vercel will redeploy the latest commit.
