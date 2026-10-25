<div align="center">

# WEBVZARD IT SOLUTIONS
### Official Website: Owner's Guide

**Web Development · SEO · Social Media · Design · Video · Digital Marketing Courses**
Jaipur, Rajasthan, India

`Static site` · `No installation` · `Works on any hosting` · `Mobile-first` · `Works offline from the folder`

</div>

---

## 1. Quick start (2 minutes)

1. **Unzip** the folder anywhere on your computer.
2. **Double-click `index.html`.** The site opens in your browser. That's it.
3. To change something, open the file listed in section 3 with **Notepad** or **VS Code**, edit, save, then **refresh** the browser (press `Ctrl + F5` if you don't see the change).

> Everything the site needs (fonts, 3D library, logos, course pages) is **inside this folder**. It never depends on an outside server, so it is fast and cannot break because another website goes down.

---

## 2. What is inside

```
webvzard-site/
├── index.html            ← all the text and content (sections are labelled)
├── css/styles.css        ← colours, fonts, layout, animation (numbered sections)
├── js/main.js            ← menu, scroll effects, WhatsApp, PDF viewer (sections A to I)
├── images/               ← logos, favicon, share image, service pictures
│   └── services/         ← one picture per service
├── docs/
│   ├── webvzard-digital-marketing-with-ai-course.pdf   ← the course PDF
│   └── course/           ← the same PDF as 10 page images (for the smooth viewer)
├── fonts/                ← Bricolage Grotesque and DM Sans (self-hosted)
├── js/vendor/            ← 3D library (Three.js)
├── _headers              ← security + speed rules (Netlify / Cloudflare Pages)
├── .htaccess             ← the same rules (Apache: Hostinger, GoDaddy, cPanel)
├── robots.txt            ← tells Google what to index
└── .well-known/security.txt
```

> **Keep this folder structure exactly as it is,** or images and styles will not load.

---

## 3. How to change things

| I want to change… | Open this file | Look for |
|---|---|---|
| Prices and plan features | `index.html` | the **PRICING** section |
| The four counters (6, 4, 3, 100%) | `index.html` | **AT A GLANCE**, edit `data-to="…"` |
| Service text | `index.html` | **SERVICES** (one `<article class="sc">` per service; copy one to add another) |
| A service picture | `images/services/` | replace the file, **keep the same name**, 3:2 shape, about 800 × 533 WebP |
| Founder text and team names | `index.html` | **ABOUT** |
| Course facts (weeks, modules…) | `index.html` | **COURSE** |
| Phone, email, address | `index.html` | **CONTACT** (and the top menu bar) |
| WhatsApp number | `index.html` and `js/main.js` | search for `919887133425` |
| Brand colours | `css/styles.css` | **section 1: design tokens** (`--violet`, `--cyan`, `--hero`…) |
| Course / portfolio PDF links | `js/main.js` | **section B**, the `PDFS` list |
| Menu links | `index.html` | **NAVIGATION BAR** |

---

## 4. Course PDF and the smooth viewer

Tapping **Course** (or **View the full course PDF**) opens a full-screen slide viewer: it fades in, pages slide, and visitors can use arrows, swipe, dots or the keyboard. **Open PDF** inside it opens the original file.

**To replace the course with a new PDF:**
1. Save the new PDF into `docs/` and update the file name in `js/main.js` (section B, `PDFS.course`).
2. Export each page as an image, **1500 × 844 px, WebP**, named `page-01.webp`, `page-02.webp` … and put them in `docs/course/` (replace the old ones).
3. In `js/main.js` section **B2**, set `N` to the new page count and update the `alts` descriptions (they are read aloud by screen readers).

**To add the portfolio PDF:** save it in `docs/`, then set `portfolio: "docs/your-file.pdf"` in the `PDFS` list. Until then, **View Portfolio** shows a friendly "coming soon" note.

---

## 5. Before you go live: checklist

Do these once, in this order.

- [ ] **Replace `YOUR-DOMAIN.in` with your real website address** in `index.html` (about 6 places: canonical, `og:url`, `og:image`, `twitter:image`, structured data), `robots.txt` and `.well-known/security.txt`. *Until you do, WhatsApp and Facebook cannot show the preview picture.*
- [ ] **Replace the placeholders** a visitor (or a tender reviewer) will notice:
  - [ ] Team cards in **ABOUT**: "Team member name", roles and photos
  - [ ] **YouTube and Facebook links**: they currently point to the generic `youtube.com` and `facebook.com` (menu bar and mobile menu). Instagram is already your real link.
  - [ ] **Portfolio PDF** (see section 4)
- [ ] **Check every claim is true and provable.** Public-sector reviewers do read them: *"Government-Certified Teachers"* (course PDF), *"100% white-hat SEO"*, *WCAG 2.1 AA*, *HTTPS*, *Hindi and English* content. Edit or remove anything you cannot back up.
- [ ] **Turn on HTTPS** in your hosting panel (free on every good host).
- [ ] **Upload the WHOLE folder**, including the hidden files `.htaccess` and `_headers`. Without them the security rules and the PDF opening rules will not apply.
- [ ] **Test on a real phone:** mobile menu, Course viewer, WhatsApp button, enquiry form, phone-number tap-to-call.

---

## 6. Putting it online

| Host | How |
|---|---|
| **Netlify / Cloudflare Pages** (easiest, free) | Drag the `webvzard-site` folder into the dashboard. `_headers` is used automatically. |
| **Hostinger / GoDaddy / cPanel** (Apache) | Upload everything into `public_html`, including `.htaccess`. Enable "show hidden files" in the file manager. |

After uploading, open the Course link once to confirm the PDF viewer works.

---

## 7. Effects and accessibility

- **Intro animation:** the logo reveal plays **once per visit**. Open a new tab to see it again.
- **3D hero globe:** loads on tablets and larger screens only, to save phone data.
- **Hero mockup:** a website "building itself", shown on screens wider than 1200 px.
- **Rajasthan touch:** jaali pattern and skyline (`css/styles.css`, section 18).
- **Reduced motion:** visitors who turn on "reduce motion" on their device get a calm version with no animation.
- **Keyboard and screen readers:** menus, the course viewer and forms work with the keyboard; pictures carry descriptions.

---

## 8. Security and speed

- `_headers` and `.htaccess` add a strict content-security policy, HTTPS enforcement and browser-cache rules. The page also carries its own policy in the `<head>` of `index.html`.
- **If you add a new outside script, font or embed, the policy will block it** until you allow it in `index.html`, `_headers` and `.htaccess`.
- The footer logo loads only when scrolled into view. This is intentional.

---

## 9. Troubleshooting

| Problem | Fix |
|---|---|
| Pictures or styles are missing | The folder structure changed. Keep `css/`, `js/`, `images/`, `docs/` next to `index.html`. |
| I changed something but see no difference | Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac). |
| Course PDF opens blank or downloads | Upload the hidden files `.htaccess` and `_headers` (section 5). |
| 3D globe doesn't show on my phone | By design. It loads on tablets and larger screens. |
| Intro animation doesn't play | It plays once per visit. Open a new tab or a private window. |
| WhatsApp share has no picture | Replace `YOUR-DOMAIN.in` (section 5), then re-share. |

---

<div align="center">

**Webvzard IT Solutions** · Jaipur, Rajasthan
📞 +91 98871 33425 · ✉ Webvzarditsolutions@gmail.com · 🌐 webvzarditsolutions.com

*Built for trust: fast, accessible, secure.*

</div>
