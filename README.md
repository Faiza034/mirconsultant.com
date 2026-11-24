# MIR Education & Immigration Consultants — Website

React 19 + Vite + Tailwind CSS v4 + React Router + Framer Motion + Lucide.

## Run
    npm install
    npm run dev      # local development
    npm run build    # production build -> dist/

## Edit content
- Company details, nav, WhatsApp, social URLs, image URLs: `src/data/site.js`
- Destinations, services, FAQs, universities, blog, testimonials, opportunities: `src/data/*.js`
- Logo: replace `public/logo.png` (also favicon.png / favicon.ico / og-image.png)

## Before launch checklist
1. Replace Unsplash image URLs in `src/data/site.js` with your own photos in `public/images/` (e.g. `/images/hero.jpg`).
2. Replace placeholder testimonials, blog posts and illustrative opportunities.
3. Verify all country/university information with official sources.
4. Connect the inquiry form to a backend/email service (see comment in `ContactForm.jsx`).
5. Add verified office address (`SITE.address`) and social URLs.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. vercel.com → Add New → Project → import the repo. Framework: Vite (auto-detected), build `npm run build`, output `dist`.
3. Deploy. `vercel.json` already rewrites routes to `index.html` so deep links work.
4. Project → Settings → Domains → add `mireducationconsultants.com` and `www.mireducationconsultants.com`.
5. At your domain registrar set: `A` record `@` → `76.76.21.21` and `CNAME` `www` → `cname.vercel-dns.com` (or use the exact values Vercel shows).
6. After it goes live, submit `https://mireducationconsultants.com/sitemap.xml` in Google Search Console.
