# My Portfolio

Personal portfolio site of Abasifreke Smart Monday, a front-end developer. It showcases projects, background and skills, and has a contact form and a downloadable CV.

## Tech stack

- React 19 + Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- react-router-dom 7 for routing
- framer-motion for animations
- lucide-react for icons
- Formspree (`@formspree/react`) for the contact form

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Structure

```
index.html
vite.config.js
public/             CV PDF, favicon, icons
src/
  main.jsx          entry point
  App.jsx           Router, Navbar and routes
  ControlRoom/
    Navbar.jsx      site-wide navigation
    Home.jsx        /          hero and highlights
    About.jsx       /About     background, skills, stack
    Project.jsx     /Project   project cards with live links
    Contact.jsx     /contact   Formspree-powered contact form
```

## Featured projects

- TradeFrame: trading journal and performance platform
- Skyview Hotels: booking and property management
- Preshy Bare & Bloom: online storefront
- Student Hub Platform
- PrismView: personal finance dashboard
- AI Forex Market Analysis Platform
- This portfolio

Project data lives in the `Project.jsx` array.

## Deployment

Static Vite build, deployable to Vercel or any static host. Client-side routing needs a fallback rewrite to `index.html`.
