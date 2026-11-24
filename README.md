<div align="center">

<img src="public/logo.png" alt="MIR Consultants logo" width="140" />

# MIR Education & Immigration Consultants

**Your journey to international education starts with MIR.**

A modern, fast and mobile-friendly website that helps students explore study-abroad destinations, universities and admission support.

[Live Website]( https://mirconsultant-com-rho.vercel.app/) · [Instagram](https://www.instagram.com/mireducationconsultancy/) · [WhatsApp](https://wa.me/923008605180)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## About the Project

MIR Education & Immigration Consultants guides students through every step of studying abroad: choosing a destination, understanding admission requirements, preparing applications and moving forward with confidence.

This website is the company's online home. It builds trust with students and parents, showcases services and destinations, and makes it easy to get in touch within one tap.

## What the Website Covers

| Page | What visitors find |
|------|--------------------|
| **Home** | Hero section, about preview, featured destinations, services overview, testimonials, FAQs and a clear call to action |
| **About Us** | Who we are, our mission and how our team supports students |
| **Study Destinations** | Country guides for popular study-abroad options such as the UK, Germany, Cyprus and Italy, with a dropdown menu for quick access |
| **Our Services** | Admission guidance, application preparation, documentation support and visa assistance |
| **Universities** | Partner and recommended universities with key information |
| **Blog** | Helpful articles and updates for students planning to study abroad |
| **Contact Us** | Inquiry form, phone numbers, WhatsApp button and office details |

## Key Features

- **Fully responsive design** that works smoothly on mobile, tablet and desktop
- **One-tap WhatsApp chat** with a pre-filled message, plus a floating chat button
- **Click-to-call** phone links for instant contact
- **Inquiry form** so students can request free guidance
- **Smooth animations** using Framer Motion
- **Elegant brand design** in deep forest green and gold, with a serif and sans-serif font pairing
- **SEO ready**, with sitemap, robots.txt and page-level meta tags
- **Smart image fallback** that shows a branded placeholder if an image fails to load
- **Single-file configuration**: update company details in one place and the whole site changes

## Tech Stack

- **React 19** for the user interface
- **Vite** for fast development and optimized builds
- **Tailwind CSS v4** for styling
- **React Router** for page navigation
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vercel** for hosting and automatic deployments

## Project Structure

```
├── public/
│   ├── images/          # Your own photos (about.jpg, hero.jpg, ...)
│   ├── logo.png         # Company logo
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/      # Navbar, Footer, ContactForm, SmartImage, ...
│   ├── pages/           # Home, About, Destinations, Services, ...
│   ├── data/            # site.js and content files (editable)
│   └── main.jsx
├── vercel.json          # SPA routing rules for Vercel
└── package.json
```

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Faiza034/mirconsultant.com.git
cd mirconsultant.com

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Create a production build
npm run build
```

## Editing Content

| What to change | Where |
|----------------|-------|
| Company name, phones, WhatsApp, social links, address, image URLs | `src/data/site.js` |
| Destinations, services, FAQs, universities, blog posts, testimonials | `src/data/*.js` |
| Logo and favicon | `public/logo.png`, `public/favicon.png`, `public/favicon.ico` |
| Social share image | `public/og-image.png` |

## Before Launch Checklist

- [ ] Replace Unsplash image URLs in `src/data/site.js` with your own photos in `public/images/`
- [ ] Replace placeholder testimonials, blog posts and sample opportunities
- [ ] Verify all country and university information with official sources
- [ ] Connect the inquiry form to a backend or email service (see comment in `ContactForm.jsx`)
- [ ] Add the verified office address (`SITE.address`) and social media URLs

## Deploy to Vercel

1. Push this project to a GitHub repository (make sure `node_modules` is in `.gitignore`).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** and import the repo. Framework: **Vite**, build command `npm run build`, output directory `dist`.
3. Click **Deploy**. The included `vercel.json` rewrites routes to `index.html`, so deep links like `/about` work on refresh.
4. Open **Settings → Domains** and add `mireducationconsultants.com` and `www.mireducationconsultants.com`.
5. At your domain registrar, set an `A` record `@` → `76.76.21.21` and a `CNAME` record `www` → `cname.vercel-dns.com` (or use the exact values Vercel shows).
6. Once live, submit `https://mireducationconsultants.com/sitemap.xml` in **Google Search Console**.

## Get Google Visibility

- Verify the domain in Google Search Console and submit the sitemap
- Create and verify a Google Business Profile with the real office address
- Publish blog articles regularly on visa, admission and scholarship topics
- Link the website from Instagram, Facebook and WhatsApp business profiles

## Contact

**MIR Education & Immigration Consultants**

- Phone / WhatsApp: 0300 860 5180 · 0300 860 5280
- Website: [https://mirconsultant-com-rho.vercel.app/](https://mirconsultant-com-rho.vercel.app/)
- Instagram: [@mireducationconsultancy](https://www.instagram.com/mireducationconsultants.co?fqnt=MWN0MHdqeGV6ZmhlYw==)

---

<div align="center">

Made with care to help students turn their study-abroad dreams into reality.

</div>