<div align="center">

<img src="images/logo.webp" alt="Webvzard IT Solutions logo" width="120" />

# Webvzard IT Solutions — Website

**Websites and marketing that build trust.**
The official website of Webvzard IT Solutions, a digital marketing and web agency in Jaipur, Rajasthan.

`HTML` · `CSS` · `Vanilla JavaScript` · `No build step` · `No outside servers`

</div>

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Project structure](#project-structure)
- [Run it locally](#run-it-locally)
- [Common edits](#common-edits)
- [Brand and theme](#brand-and-theme)
- [PDF viewers (Course and Portfolio)](#pdf-viewers-course-and-portfolio)
- [Images and logos](#images-and-logos)
- [Deploy to GitHub Pages](#deploy-to-github-pages)
- [Before you go live](#before-you-go-live)
- [Updating the site without cache problems](#updating-the-site-without-cache-problems)
- [Security and performance](#security-and-performance)
- [Accessibility](#accessibility)
- [Contact](#contact)
- [License](#license)

---

## Overview

A fast, single-page marketing site that explains what Webvzard does, shows its pricing openly, presents the founder, and makes it easy to get in touch by phone, email or WhatsApp.

It is plain HTML, CSS and JavaScript. There is nothing to install, compile or build: open `index.html` in a browser and it works. Fonts, the 3D library and all images are included in this folder, so the site does not rely on any third-party server.

## Features

| Area | What it does |
| --- | --- |
| **Intro animation** | Logo reveal that plays once per browser visit. |
| **Hero** | Headline, calls to action and an animated 3D globe (loaded only on tablets and larger, to save phone data). |
| **Services** | Six service cards: web development, SEO, social media marketing, graphic design, video editing and digital marketing. |
| **At a glance** | Four animated counters. |
| **Pricing** | Three open website price plans. |
| **Course** | Digital Marketing with AI course facts plus an in-page slide viewer for the course PDF. |
| **Portfolio** | Full-screen slide viewer for the portfolio PDF (opened from **View Portfolio** in the menu). |
| **About** | Founder photo, quote and message. |
| **Contact** | Phone, email, address, and an enquiry form that sends the message to WhatsApp. |
| **WhatsApp chat box** | Floating chat button that opens on hover or click. |
| **Light and dark mode** | Follows the visitor's device setting. |
| **Responsive** | Designed mobile-first, with a collapsing menu on small screens. |

## Project structure

```text
webvzard-site/
├── index.html                  All page content. Each section has a labelled comment.
├── css/
│   └── styles.css              Colours, fonts, layout and animation (numbered sections).
├── js/
│   ├── main.js                 Menu, scroll effects, PDF viewers, WhatsApp (sections A to I).
│   └── vendor/                 three.js (3D globe) and its licence.
├── images/
│   ├── logo.webp               Logo mark: header, intro, WhatsApp avatar.
│   ├── logo-full.webp          Logo mark: footer.
│   ├── favicon.png             Browser tab icon.
│   ├── apple-touch-icon.png    Phone home-screen icon.
│   ├── og-image.jpg            Link preview image (WhatsApp, Facebook, X).
│   ├── kuldeep-singh-shekhawat.webp   Founder photo.
│   └── services/               One graphic per service card (800×533 WebP).
├── docs/
│   ├── webvzard-digital-marketing-with-ai-course.pdf
│   ├── webvzard-portfolio.pdf
│   ├── course/                 Course page images used by the viewer (page-01.webp ...).
│   └── portfolio/              Portfolio page images used by the viewer (page-01.webp ...).
├── fonts/                      Bricolage Grotesque and DM Sans (self-hosted).
├── _headers                    Security and caching rules for Netlify / Cloudflare Pages.
├── .htaccess                   The same rules for Apache hosts (Hostinger, GoDaddy, cPanel).
├── .nojekyll                   Tells GitHub Pages to serve every file as is.
├── .well-known/security.txt    Security contact.
├── robots.txt
└── README.md
```

> Keep this folder structure. Moving files breaks the links between them.

## Run it locally

**Quickest:** double-click `index.html`.

**Recommended** (fonts and the PDF viewers behave exactly as they do online):

```bash
# from inside the project folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Edit any file in a text editor such as VS Code, save, and refresh the browser.

> The intro animation plays once per browser visit. Open a new tab or a private window to see it again.

## Common edits

| I want to change... | Where |
| --- | --- |
| Prices or plan features | `index.html`, section **PRICING** |
| A service card (text, tags, graphic) | `index.html`, section **SERVICES** (one `<article class="sc">` per service; copy one to add another) |
| A service graphic | Replace the file in `images/services/`. Keep the name, a 3:2 shape and about 800×533 WebP. |
| The four counters | `index.html`, section **AT A GLANCE** (`data-to` is the number) |
| Course facts | `index.html`, section **COURSE** |
| Founder photo, quote or message | `index.html`, section **ABOUT** (photo file: `images/kuldeep-singh-shekhawat.webp`) |
| Phone, email or address | `index.html`, section **CONTACT** |
| WhatsApp number | Search for `919887133425` in `index.html` and `js/main.js` |
| Colours and fonts | `css/styles.css`, section 1 (design tokens) |
| PDF links | `js/main.js`, section **B** (`PDFS` list) |

## Brand and theme

The colour scheme comes straight from the logo: bright cyan, royal blue and deep navy. All colours are CSS variables at the top of `css/styles.css`, so changing one value updates the whole site.

| Token | Value | Used for |
| --- | --- | --- |
| `--hero` | `#061638` | Deep navy: header, hero, intro screen |
| `--ink` | `#082056` | Navy: headings and dark surfaces |
| `--violet` | `#0f72d6` | Royal blue: main brand colour (the name is historical) |
| `--cyan` | `#13c4ff` | Bright cyan: highlights, buttons |
| `--amber` | `#5fd8ff` | Light sky blue: accents (the name is historical) |
| `--bg` / `--surface` | `#f2f8fe` / `#ffffff` | Light mode page and cards |
| `--text` / `--muted` | `#0c1f45` / `#4d6285` | Body and secondary text |

Dark mode values are defined right below the light ones in the same file.

**Fonts:** Bricolage Grotesque (headings) and DM Sans (body), both self-hosted in `fonts/`.

**Logo style:** the logo is used flat, with no glow, shadow or outline behind it. Please keep it that way when adding new pages.

## PDF viewers (Course and Portfolio)

The **Course** and **View Portfolio** links open a smooth full-screen slide viewer (arrow keys, swipe, dots and an **Open PDF** button). The viewer shows page images, and the PDF itself opens in a new tab.

Both viewers are configured in `js/main.js`:

1. `PDFS` (section B) holds the link to each PDF.
2. `CFG` (section B2) holds each viewer's page folder, page count, title and the description (alt text) of every page.

**To replace the portfolio with a new PDF:**

1. Export each page as an image, 1500 px wide, WebP, named `page-01.webp`, `page-02.webp`, ... and place them in `docs/portfolio/` (delete the old ones).
2. Save the new PDF as `docs/webvzard-portfolio.pdf` (try to keep it under about 5 MB).
3. In `js/main.js`, update `N` (page count) and the `alts` list under `portfolio` in `CFG`.

**To add another PDF viewer:** add a link such as `<a href="#" data-pdf="brochure">`, add `brochure` to `PDFS`, and copy the `course` block in `CFG`.

## Images and logos

- **Logo files:** the logo mark has a transparent background. Replace `logo.webp`, `logo-full.webp`, `favicon.png` and `apple-touch-icon.png` and keep the same file names. The Apple icon should have a solid (white) background.
- **Link preview (`og-image.jpg`):** 1200×630 px. Remember that WhatsApp, Facebook and X keep old previews for a long time.
- **Founder photo:** 4:5 portrait (for example 800×1000 px). It is cropped to fit that shape.
- **Format:** use WebP for photos and graphics. It keeps pages fast on slow mobile connections.

## Deploy to GitHub Pages

1. Create a repository on GitHub and upload **everything** in this folder, including hidden files (`.nojekyll`, `.htaccess`, `.well-known`).
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then **Save**.
4. Wait about a minute. GitHub shows the live address on the same page.

**Using your own domain (for example `webvzarditsolutions.com`):**

1. In **Settings → Pages → Custom domain**, enter the domain and save. GitHub creates a `CNAME` file for you.
2. At your domain provider, add the DNS records GitHub lists (A records for the main domain, or a CNAME record for `www`).
3. Tick **Enforce HTTPS** once it becomes available.

> **Note:** GitHub Pages ignores `_headers` and `.htaccess`. The site still has its own security policy inside the `<head>` of `index.html`, so it stays protected. Those two files matter only if you later move to Netlify, Cloudflare Pages or an Apache host.

## Before you go live

- [ ] Replace `YOUR-DOMAIN.in` with your real web address in `index.html` (canonical link, `og:url`, `og:image`, `twitter:image`, structured data), `robots.txt` and `.well-known/security.txt`. Until you do, link previews will not show the image.
- [ ] Confirm the phone number, email, address and WhatsApp number are correct.
- [ ] Turn on HTTPS.
- [ ] Open the site on a real phone and check the menu, enquiry form, both PDF viewers and the WhatsApp button.
- [ ] Add a `sitemap.xml` and reference it in `robots.txt` once the domain is set.

## Updating the site without cache problems

Browsers and GitHub Pages keep copies of CSS, JavaScript and images, so visitors can keep seeing an old version after you upload a new one.

`index.html` links the main files with a version tag, for example:

```html
<link rel="stylesheet" href="css/styles.css?v=20261026" />
<script src="js/main.js?v=20261026" defer></script>
```

**Whenever you change `styles.css`, `main.js` or an image, change that `?v=` number** (a new date works well) in `index.html`. Browsers then download the new file. After deploying, do a hard refresh (`Ctrl + Shift + R`, or a private tab on a phone) to check.

## Security and performance

- **Content Security Policy:** set in `index.html` (and in `_headers` / `.htaccess` for hosts that support them). Only files from this site are allowed. If you add an outside script, font or embed, it will be blocked until you allow it in the policy.
- **No tracking or third-party requests** by default.
- **Self-hosted fonts and libraries**, so pages load without waiting on other servers.
- **Light assets:** WebP images, lazy-loaded below-the-fold images, and the 3D globe loaded only on larger screens.
- **Security contact:** `.well-known/security.txt`.

## Accessibility

- Semantic headings and landmarks, with a visible keyboard focus outline.
- Descriptive alt text on images, including every PDF viewer page.
- PDF viewers can be used fully by keyboard (arrow keys, Tab, Esc) and announce the current page to screen readers.
- Animations respect the visitor's **reduce motion** setting.
- Light and dark colour schemes with readable contrast.

## Contact

**Webvzard IT Solutions**
39A Shekhawati Nagar, near Vaidya ji ka Chauraha, Nivaaru Road, Jaipur, Rajasthan, India

- Phone / WhatsApp: [+91 98871 33425](https://wa.me/919887133425)
- Email: [Webvzarditsolutions@gmail.com](mailto:Webvzarditsolutions@gmail.com)

## License

© 2026 Webvzard IT Solutions. All rights reserved. The text, logo, photos and designs on this site may not be copied or reused without permission.

Third-party software: [three.js](https://threejs.org) (MIT licence, see `js/vendor/LICENSE-three.txt`). Fonts: Bricolage Grotesque and DM Sans (SIL Open Font License).
