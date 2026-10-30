<div align="center">

<img src="images/logo.webp" alt="Webvzard IT Solutions logo" width="120" />

# Webvzard IT Solutions: Website

**Websites and marketing that build trust.**
The official website of Webvzard IT Solutions, a digital marketing and web agency in Jaipur, Rajasthan.

`HTML` · `CSS` · `Vanilla JavaScript` · `No build step` · `No third-party servers`

[webvzarditsolutions.com](https://webvzarditsolutions.com)

</div>

---

## Table of contents

1. [Overview](#overview)
2. [Features](#features)
3. [Project structure](#project-structure)
4. [Run it locally](#run-it-locally)
5. [Common edits](#common-edits)
6. [Brand and theme](#brand-and-theme)
7. [Map and exact location pin](#map-and-exact-location-pin)
   - [Google reviews](#google-reviews)
8. [PDF viewers: Course and Portfolio](#pdf-viewers-course-and-portfolio)
9. [Images and logos](#images-and-logos)
10. [Deploy to GitHub Pages](#deploy-to-github-pages)
11. [Deploy to Cloudflare Pages](#deploy-to-cloudflare-pages)
12. [Deploy to regular web hosting](#deploy-to-regular-web-hosting-hostinger-godaddy-cpanel)
13. [Before you go live](#before-you-go-live)
14. [Updating the site without cache problems](#updating-the-site-without-cache-problems)
15. [Troubleshooting](#troubleshooting)
16. [Security and performance](#security-and-performance)
17. [Accessibility](#accessibility)
18. [Contact](#contact)
19. [License](#license)

---

## Overview

A fast, single-page marketing site. It explains what Webvzard does, shows its pricing openly, presents the founder and past client work, and makes it easy to get in touch by phone, email or WhatsApp.

It is plain HTML, CSS and JavaScript. There is nothing to install, compile or build: open `index.html` in a browser and it works. Fonts, the 3D library and all images live in this folder, so the site never depends on an outside server (the only exception is the optional Google Map, which loads only when a visitor taps **Show map**).

## Features

| Area | What it does |
| --- | --- |
| **Intro animation** | Logo reveal that plays once per browser visit. |
| **Hero** | Headline, calls to action and an animated 3D globe (loaded only on tablets and larger, to save phone data). |
| **Services** | Six service cards: web development, SEO, social media marketing, graphic design, video editing and digital marketing. |
| **At a glance** | Four animated counters. |
| **Pricing** | Three open website price plans. |
| **Course** | Digital Marketing with AI course facts, plus an in-page slide viewer for the course PDF. |
| **Portfolio** | Full-screen slide viewer for the portfolio PDF, opened from **View Portfolio** in the menu. |
| **About** | Founder photo, quote and message. |
| **Contact** | Phone, email, address, and an enquiry form that sends the message to WhatsApp. |
| **Client reviews** | Five-star reviews copied from your Google listing, with a link to all reviews. Optional live mode through the Google Places API. |
| **Map** | Click-to-load Google Map of the office, with an **Open in Google Maps** button. |
| **WhatsApp chat box** | Floating chat button that opens on hover or click. |
| **Light and dark mode** | Follows the visitor's device setting. |
| **Responsive** | Designed mobile-first, with a collapsing menu on small screens. |

## Project structure

```text
Webvzard/
├── index.html                  All page content. Every section has a labelled comment.
├── css/
│   └── styles.css              Colours, fonts, layout and animation (numbered sections).
├── js/
│   ├── main.js                 Menu, scroll effects, PDF viewers, map, WhatsApp.
│   └── vendor/                 three.js (3D globe) and its licence.
├── images/
│   ├── logo.webp               Logo mark: header, intro screen, WhatsApp avatar.
│   ├── logo-full.webp          Logo mark: footer.
│   ├── favicon.png             Browser tab icon.
│   ├── apple-touch-icon.png    Phone home-screen icon.
│   ├── og-image.jpg            Link preview image (WhatsApp, Facebook, X).
│   ├── kuldeep-singh-shekhawat.webp   Founder photo.
│   └── services/               One graphic per service card (800×533 WebP).
├── docs/
│   ├── webvzard-digital-marketing-with-ai-course.pdf
│   ├── webvzard-portfolio.pdf
│   ├── course/                 Course page images for the viewer (page-01.webp ...).
│   └── portfolio/              Portfolio page images for the viewer (page-01.webp ...).
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

**Recommended** (fonts, PDF viewers and the map behave exactly as they do online):

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
| Phone, email or address | `index.html`, section **CONTACT** (the address also appears in the **MAP** section) |
| The map pin | `index.html`, section **MAP**, the `data-src` value (see [below](#map-and-exact-location-pin)) |
| WhatsApp number | Search for `919887133425` in `index.html` and `js/main.js` |
| Colours and fonts | `css/styles.css`, section 1 (design tokens) |
| PDF links | `js/main.js`, the `PDFS` list |

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

Dark mode values sit right below the light ones in the same file.

**Fonts:** Bricolage Grotesque (headings) and DM Sans (body), both self-hosted in `fonts/`.

**Logo style:** the logo is shown flat, with no glow, shadow or outline behind it. Please keep it that way on any new page.

## Map and exact location pin

The **Visit our office** section shows a Google Map. To keep the page fast and private, the map does not load until a visitor taps **Show map**. The **Open in Google Maps** button next to it opens your Google Maps listing in a new tab.

The map is controlled by one line in `index.html`, section **MAP**:

```html
<div class="map" id="map" data-src="https://www.google.com/maps?q=Webvzard+IT+Solutions,+38,+Shree+Ram+Nagar+Rd,+Shri+Ram+Nagar,+Sindhi+Colony,+Jhotwara,+Jaipur,+Rajasthan+302012&z=17&hl=en&output=embed">
```

By default the map searches for the business name and address. If the pin lands slightly off, set the exact spot yourself. Either method works:

**Method 1: Google's embed link (most accurate)**

1. Open your business in Google Maps (your `maps.app.goo.gl` link works).
2. Click **Share → Embed a map**.
3. Copy only the link inside `src="..."` from the code Google shows. It starts with `https://www.google.com/maps/embed?pb=`.
4. Paste it as the value of `data-src` in the **MAP** section.

**Method 2: Exact coordinates**

1. In Google Maps, right-click the exact spot of your office and click the numbers at the top of the menu (for example `26.9124, 75.7873`) to copy them.
2. Use them in `data-src`:

```html
data-src="https://www.google.com/maps?q=26.9124,75.7873&z=17&output=embed"
```

(Use your own numbers. Those are only an example.)

> The page's security policy already allows maps from `https://www.google.com`. If you ever use a different map provider, you must allow it in the `frame-src` part of the policy (in `index.html`, `_headers` and `.htaccess`).

## Google reviews

The **Loved by our clients** section uses the same dark band, lattice pattern and glass cards as the pricing section. The middle card is highlighted in blue and the highlight moves as the cards slide. The cards advance by themselves every few seconds (there is a pause button, and it stops once a visitor swipes, clicks or hovers; it is off for people who prefer reduced motion). Visitors can also use the arrows, the dots, or swipe on a phone. Each card carries the Google logo, five stars and a **Read more** button for long reviews. The reviews were copied from your Google listing, so the section needs no Google Cloud account, no API key and no billing, and cannot break. A **See all reviews on Google** button links visitors to your full listing.

**Add, edit or remove a review**

In `index.html`, section **REVIEWS**, every review is one `<article class="r2">` card. To add one, copy a whole card, then change the name, the first letter in the circle and the text. To remove one, delete its card. Only paste real reviews, word for word. If a review was translated by Google, keep the "translated from Hindi by Google" note.

### Optional: live reviews from Google (needs billing)

If you later get a Google Cloud billing account working, the site can pull reviews straight from Google instead, using the **Places API (New)**. Fill in `data-place-id` and `data-api-key` on the `<section id="reviews">` line and the live reviews replace the hand-copied ones. Reviews then load only when a visitor scrolls near the section.

**Setup (about 10 minutes)**

1. In [Google Cloud Console](https://console.cloud.google.com), pick or create a project and make sure **billing is enabled**.
2. Go to **APIs & Services → Library**, search **Places API (New)** and click **Enable**.
3. Go to **APIs & Services → Credentials → Create credentials → API key**, then open the new key and set:
   - **Application restrictions: Websites**, and add your addresses, for example `https://webvzarditsolutions.com/*`, `https://www.webvzarditsolutions.com/*` and any demo address such as `https://yourname.pages.dev/*`.
   - **API restrictions: Restrict key**, and choose only **Places API (New)**.
4. Find your **Place ID** with Google's [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id): search your business and copy the ID (it starts with `ChIJ`).
5. In `index.html`, section **REVIEWS**, fill in the two values:

```html
<section id="reviews" ... hidden data-place-id="ChIJ..." data-api-key="AIza...">
```

6. Upload the site again. The live reviews replace the hand-copied ones once they load.

**Protect your budget**

- In **Billing → Budgets & alerts**, create a small monthly budget with an email alert.
- In **APIs & Services → Places API (New) → Quotas**, set a daily request limit so a traffic spike cannot run up the bill.
- Each time the section loads for a visitor, one request is billed. Check Google's current Places pricing before launch.

**Good to know**

- The API returns at most **5 reviews** (Google chooses which). The total count and average rating are the real numbers.
- The API key is visible in the page source. That is normal for website keys, which is why the referrer and API restrictions in step 3 matter. Never use an unrestricted key.
- Google's rules require the reviews to be shown as they are, with attribution. The section already says "Reviews from Google" and links to your Google listing, so do not edit or filter the text.
- If the key, Place ID or billing is wrong, the hand-copied reviews simply stay on screen. Open the browser console (F12) to see the error.
- Want zero per-visitor cost? A small Cloudflare Worker can fetch and briefly cache the reviews and keep the key private. Ask for it when you need it.

## PDF viewers: Course and Portfolio

The **Course** and **View Portfolio** links open a smooth full-screen slide viewer (arrow keys, swipe, dots and an **Open PDF** button). The viewer shows page images, and the PDF itself opens in a new tab.

Both viewers are configured in `js/main.js`:

1. `PDFS` holds the link to each PDF.
2. `CFG` holds each viewer's page folder, page count (`N`), title and the description (alt text) of every page.

**To update the portfolio with a new PDF:**

1. Export each page as an image, 1500 px wide, WebP, named `page-01.webp`, `page-02.webp`, ... and put them in `docs/portfolio/` (delete the old ones).
2. Save the new PDF as `docs/webvzard-portfolio.pdf`. Try to keep it under about 5 MB so it opens quickly on phones.
3. In `js/main.js`, set `N` to the new page count and update the `alts` list under `portfolio` so there is one description per page.
4. Change the `?v=` number in `index.html` (see [cache problems](#updating-the-site-without-cache-problems)).

**To add another PDF viewer:** add a link such as `<a href="#" data-pdf="brochure">`, add `brochure` to `PDFS`, and copy the `course` block in `CFG`.

## Images and logos

- **Logo files:** the logo mark has a transparent background. Replace `logo.webp`, `logo-full.webp`, `favicon.png` and `apple-touch-icon.png` and keep the same file names. The Apple icon should have a solid (white) background.
- **Link preview (`og-image.jpg`):** 1200×630 px. WhatsApp, Facebook and X keep old previews for a long time.
- **Founder photo:** 4:5 portrait (for example 800×1000 px).
- **Format:** use WebP for photos and graphics. It keeps pages fast on slow mobile connections.

## Deploy to GitHub Pages

1. Create a repository on GitHub and upload **everything** in this folder, including hidden files (`.nojekyll`, `.htaccess`, `.well-known`).
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then **Save**.
4. Wait about a minute. GitHub shows the live address on the same page. You can watch progress under the **Actions** tab.

**Using your own domain (for example `webvzarditsolutions.com`):**

1. In **Settings → Pages → Custom domain**, enter the domain and save. GitHub creates a `CNAME` file for you.
2. At your domain provider, add the DNS records GitHub lists (A records for the main domain, or a CNAME record for `www`).
3. Tick **Enforce HTTPS** once it becomes available.

> **Note:** GitHub Pages ignores `_headers` and `.htaccess`. The site still carries its own security policy inside the `<head>` of `index.html`, so it stays protected. Those two files matter only if you later move to Netlify, Cloudflare Pages or an Apache host.

## Deploy to regular web hosting (Hostinger, GoDaddy, cPanel)

This is the setup to use if you want the **original full-size portfolio PDF** (about 157 MB), because GitHub (100 MB) and Cloudflare Pages (25 MB) reject files that large.

1. Unzip `Webvzard-hosting.zip` on your computer.
2. Open your hosting panel's **File Manager** (or connect with FTP, for example FileZilla).
3. Go to the `public_html` folder (the website root for your domain) and upload **everything inside** the `Webvzard-main` folder, including hidden files such as `.htaccess`.
4. If File Manager rejects the big PDF, upload `docs/webvzard-portfolio.pdf` separately with FTP.
5. Open your domain and check the menu, the portfolio viewer and the **Open PDF** button.

`.htaccess` already applies the security rules on Apache and LiteSpeed hosting. If your host runs Nginx, which ignores `.htaccess`, ask the host to add the headers listed in `_headers`.

> **Do not push the 157 MB PDF to GitHub.** Keep the GitHub copy on the lighter 3.5 MB version, and upload the original only to your hosting.

## Deploy to Cloudflare Pages

Cloudflare Pages is free, fast, and gives the site a live demo address such as `webvzard.pages.dev`. Unlike GitHub Pages, it **does** apply the `_headers` file, so the full security and caching rules are active.

**Option A: Connect the GitHub repository (best, updates automatically)**

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com) and go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Choose the repository and the `main` branch.
3. Build settings: **Framework preset: None**, **Build command:** leave empty, **Build output directory:** `/` (the root).
4. Click **Save and Deploy**. After about a minute the site is live. Every `git push` redeploys it.

**Option B: Direct upload (no GitHub needed)**

1. Go to **Workers & Pages → Create → Pages → Upload assets**.
2. Name the project, then drag in the project **folder** (not the zip).
3. Click **Deploy site**.

**Custom domain:** open the project, then **Custom domains → Set up a domain** and follow the steps. If the domain's DNS is on Cloudflare this is automatic.

**Limits to keep in mind:** a single file may be at most 25 MB, and a project at most 20,000 files. Keep PDFs small (the GitHub-safe portfolio PDF is about 3.5 MB; the full 157 MB original is for regular hosting only).

## Before you go live

- [ ] Replace `YOUR-DOMAIN.in` with your real web address in `index.html` (canonical link, `og:url`, `og:image`, `twitter:image`, structured data), `robots.txt` and `.well-known/security.txt`. Until you do, link previews will not show the image.
- [ ] Confirm the phone number, email, address and WhatsApp number are correct.
- [ ] Check the map pin lands on your office (see [Map and exact location pin](#map-and-exact-location-pin)).
- [ ] Turn on HTTPS.
- [ ] Open the site on a real phone and check the menu, enquiry form, both PDF viewers, the map and the WhatsApp button.
- [ ] Add a `sitemap.xml` and reference it in `robots.txt` once the domain is set.

## Updating the site without cache problems

Browsers and GitHub Pages keep copies of CSS, JavaScript and images, so visitors can keep seeing an old version after you upload a new one.

`index.html` links the main files with a version tag, for example:

```html
<link rel="stylesheet" href="css/styles.css?v=20261026" />
<script src="js/main.js?v=20261026" defer></script>
```

**Whenever you change `styles.css`, `main.js` or an image, change that `?v=` number** (a new date works well) in `index.html`. Browsers then download the new file. After deploying, do a hard refresh (`Ctrl + Shift + R`, or a private tab on a phone) to check.

## Troubleshooting

| Problem | Likely cause and fix |
| --- | --- |
| The live site looks old after an update | Cache. Change the `?v=` numbers in `index.html`, wait for the GitHub Pages deploy to finish, then hard refresh. |
| Some files did not update | Upload the **whole** folder, not only some files. Check the commit shows every changed file. |
| Live reviews do not replace the hand-copied ones | `data-place-id` or `data-api-key` is empty, billing is off, Places API (New) is not enabled, or the site address is not in the key's allowed referrers. Check the console (F12). |
| Map pin is not on the exact office | Use [Method 1 or 2](#map-and-exact-location-pin) to set the exact spot. |
| Map stays blank | Tap **Show map** first. Also check `frame-src https://www.google.com` is still present in the security policy. |
| Upload fails with "file too large" | GitHub rejects files over 100 MB and Cloudflare Pages over 25 MB. Compress PDFs and images first. |
| A PDF viewer shows missing pages | The page count `N` in `js/main.js` does not match the number of `page-XX.webp` files. |
| Link preview (WhatsApp, Facebook) shows the old image | Those apps cache previews for days. Replace `YOUR-DOMAIN.in` first, then re-scrape the link with Facebook's Sharing Debugger. |
| An embedded outside script or font is blocked | The security policy only allows this site's own files. Allow the new source in the policy. |

## Security and performance

- **Content Security Policy:** set in `index.html` (and in `_headers` / `.htaccess` for hosts that support them). Only files from this site are allowed, plus Google Maps for the map frame and the Google Places API for reviews.
- **No tracking and no third-party requests** by default. The map contacts Google only after a visitor taps **Show map**, and it runs in a sandboxed frame.
- **Self-hosted fonts and libraries**, so pages load without waiting on other servers.
- **Light assets:** WebP images, lazy-loaded images below the fold, and the 3D globe loaded only on larger screens.
- **Security contact:** `.well-known/security.txt`.

## Accessibility

- Semantic headings and landmarks, with a visible keyboard focus outline.
- Descriptive alt text on images, including every PDF viewer page.
- PDF viewers can be used fully by keyboard (arrow keys, Tab, Esc).
- Animations respect the visitor's **reduce motion** setting.
- Light and dark colour schemes with readable contrast.

## Contact

**Webvzard IT Solutions**
38, Shree Ram Nagar Rd, Shri Ram Nagar, Sindhi Colony, Jhotwara, Jaipur, Rajasthan 302012, India

- Phone / WhatsApp: [+91 98871 33425](https://wa.me/919887133425)
- Email: [Webvzarditsolutions@gmail.com](mailto:Webvzarditsolutions@gmail.com)
- Website: [webvzarditsolutions.com](https://webvzarditsolutions.com)

## License

© 2026 Webvzard IT Solutions. All rights reserved. The text, logo, photos and designs on this site may not be copied or reused without permission.

Third-party software: [three.js](https://threejs.org) (MIT licence, see `js/vendor/LICENSE-three.txt`). Fonts: Bricolage Grotesque and DM Sans (SIL Open Font License).
