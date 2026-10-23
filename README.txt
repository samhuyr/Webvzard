WEBVZARD IT SOLUTIONS WEBSITE: EDITING GUIDE
============================================

Open index.html in any browser to see the site. Edit files with any text
editor (Notepad, VS Code). Save, then refresh the browser.

FILES
  index.html      Text and content. Each section has a labelled comment.
  css/styles.css  Colours, fonts, spacing, animation. Sections are numbered.
  js/main.js      Behaviour: menu, scroll effects, WhatsApp. Sections A to I.
  images/         Logos. Replace a file but keep the same file name.

COMMON CHANGES
  Change a price or plan ........ index.html, section "PRICING"
  Change team names ............. index.html, section "ABOUT"
  Change the four counters ...... index.html, section "AT A GLANCE" (data-to)
  Change brand colours .......... css/styles.css, section 1 (design tokens)
  Add PDF links ................. js/main.js, section B (the PDFS list)
  Change WhatsApp number ........ search 919887133425 in index.html and js/main.js
  Change phone / email / address  index.html, section "CONTACT"

KEEP IN MIND
  Keep the folder structure as it is, or images and styles will not load.
  Everything the page needs (3D library, fonts, logos) is inside this folder,
  so the site does not depend on any outside server.

NEW EFFECTS
  Intro animation ... plays once per browser visit. Open a new tab to see it again.
  Hero mockup ....... index.html, "HERO MOCKUP" (shown on screens wider than 1200px).
  Service icons ..... inside each <summary> in the SERVICES section.
  Rajasthan touch ... css/styles.css section 18 (jaali pattern + skyline).

BEFORE YOU PUBLISH (important)
  1. Replace YOUR-DOMAIN.in with your real website address in:
       index.html (canonical, og:url, og:image, twitter:image, structured data),
       robots.txt and .well-known/security.txt.
     Until you do, WhatsApp/Facebook will not show the preview image.
  2. Turn on HTTPS in your hosting panel (free on every good host).
  3. Upload the WHOLE folder, including the hidden files .htaccess and _headers.

SECURITY AND SPEED FILES
  _headers .......... security + caching rules for Netlify / Cloudflare Pages
  .htaccess ......... the same rules for Apache hosts (Hostinger, GoDaddy, cPanel)
  The page also carries its own security policy in the <head> of index.html.
  If you add a new outside script, font or embed, the policy will block it
  until you allow it there (and in _headers / .htaccess).
  The footer logo loads only when you scroll down; this is intentional.
