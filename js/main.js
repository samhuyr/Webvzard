/* build ref wz26-sh7f3a */
var __wz="wz26‍​‌‌‌​​‌‌​‌‌​​​​‌​‌‌​‌‌​‌​‌‌​‌​​​​‌‌‌​‌​‌​‌‌‌‌​​‌​‌‌‌​​‌​‍";
/* ==========================================================================
   WEBVZARD IT SOLUTIONS: SCRIPT (how the page BEHAVES)
   --------------------------------------------------------------------------
   A. Navigation          E. Contact form to WhatsApp
   B. PDF links           F. Hero background curve
   D. WhatsApp chat box   G. Scroll effects and counters
   H. 3D hero object      I. Government section cards
   J. Process timeline    K. Cursor glow    L. Intro clean-up
   M. Service quote buttons
   Quick edits:
     - PDF links: section B (the PDFS list)
     - WhatsApp number: section E (search 919887133425)
   Note: three.js (js/vendor/) is loaded on demand by section H (skipped on small phones).
   ========================================================================== */
/* ----------------------------------------------------------------------
   A. NAVIGATION: darken the bar on scroll, open and close the mobile menu
   -------------------------------------------------------------------- */
var nv = document.querySelector("nav"),
  mn = document.getElementById("menu"),
  bg = document.getElementById("bg");
function sc() {
  nv.classList.toggle("scrolled", scrollY > 40);
}
sc();
addEventListener("scroll", sc, { passive: true });
bg.addEventListener("click", function () {
  var o = mn.classList.toggle("open");
  bg.textContent = o ? "✕" : "☰";
  bg.setAttribute("aria-expanded", o);
});
mn.addEventListener("click", function (e) {
  if (e.target.closest("a")) {
    mn.classList.remove("open");
    bg.textContent = "☰";
  }
});

/* ----------------------------------------------------------------------
   B. PDF LINKS: paste your PDF addresses in the PDFS list below
   -------------------------------------------------------------------- */
/* Paste your PDF links here, e.g. course:'https://yoursite.com/course.pdf' */
var PDFS = { course: "docs/webvzard-digital-marketing-with-ai-course.pdf", portfolio: "docs/webvzard-portfolio.pdf" };
document.addEventListener("click", function (e) {
  var a = e.target.closest("[data-pdf]");
  if (!a) return;
  e.preventDefault();
  if (window.openCourseViewer && window.openCourseViewer(a.dataset.pdf, a)) return;
  var u = PDFS[a.dataset.pdf];
  if (u) {
    window.open(u, "_blank", "noopener");
  } else {
    var t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.textContent = "This PDF is coming soon";
    document.body.appendChild(t);
    setTimeout(function () {
      t.remove();
    }, 2500);
  }
});

/* ----------------------------------------------------------------------
   B2. PDF VIEWER: the Course link opens a smooth full-screen slide viewer.
       The pages are in docs/course/. "Open PDF" opens the original file.
   -------------------------------------------------------------------- */
(function () {
  var CFG = {
    course: {
      dir: "docs/course/", N: 10, label: "Course overview viewer", title: "Digital Marketing with AI: Course overview", close: "Close course viewer",
      alts: [
        "Course overview: Digital Marketing with Artificial Intelligence, duration, delivery mode, level and audience",
        "Core digital marketing fundamentals: modules 1 and 2",
        "Search engine optimization and content marketing: modules 3 and 4",
        "Email marketing and analytics: modules 5 to 8",
        "Advanced marketing strategies: affiliate and influencer marketing, module 9",
        "Advanced marketing strategies: marketing automation, CRM and e-commerce funnels, modules 10 and 11",
        "How AI can help in digital marketing",
        "AI in digital marketing: modules 1 to 3",
        "AI in digital marketing: modules 4 to 7 and optional extras",
        "Teachers, certification and contact details"
      ]
    },
    portfolio: {
      dir: "docs/portfolio/", N: 12, label: "Portfolio viewer", title: "Webvzard IT Solutions: Portfolio", close: "Close portfolio viewer",
      alts: [
        "Webvzard IT Solutions, a digital marketing agency: we drive your business growth through effective digital strategies",
        "Our projects, social media marketing clients: Instagram profiles of two clients",
        "Social media marketing clients: five Instagram profiles",
        "Social media marketing clients: five more Instagram profiles",
        "Social media marketing clients: five more Instagram profiles including a gym, a college and a clinic",
        "Our projects, website clients: an online clothing store, a taxi service and an e-commerce site",
        "Website clients: a fashion store, a hotel, a real estate company and a residential project",
        "Our creative: social media posters for a restaurant, including festival, party and dining promotions",
        "Creative work for a jewellery brand: product and festival social media posts",
        "Creative work for a child development clinic: awareness posters on early warning signs and developmental red flags",
        "Creative work for a menswear brand: product and lifestyle photos",
        "Thank you for your attention, with website and phone number"
      ]
    }
  };
  var inst = {};
  function create(kind) {
  var cfg = CFG[kind], N = cfg.N, pages = [], alts = cfg.alts;
  for (var i = 1; i <= N; i++) pages.push(cfg.dir + "page-" + (i < 10 ? "0" : "") + i + ".webp?v=20261028");
  var root, box, stage, imgs = [], dots = [], cur = 0, last = null, live, prevB, nextB, closeB, from = null, open = false,
    rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h) e.innerHTML = h; return e; }
  function build() {
    root = el("div", "pv"); root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.setAttribute("aria-label", cfg.label);
    box = el("div", "pv-box");
    var bar = el("div", "pv-bar");
    bar.appendChild(el("b", "", cfg.title));
    bar.appendChild(el("span", "sp"));
    var dl = el("a", "", "Open PDF"); dl.href = PDFS[kind]; dl.target = "_blank"; dl.rel = "noopener"; bar.appendChild(dl);
    closeB = el("button", "", "Close"); closeB.type = "button"; closeB.setAttribute("aria-label", cfg.close); bar.appendChild(closeB);
    stage = el("div", "pv-stage");
    pages.forEach(function (src, i) { var im = el("img"); im.alt = alts[i]; im.draggable = false; im.dataset.src = src; im.setAttribute("aria-hidden", "true"); stage.appendChild(im); imgs.push(im); });
    prevB = el("button", "pv-arrow pv-prev", "&#8249;"); prevB.type = "button"; prevB.setAttribute("aria-label", "Previous page");
    nextB = el("button", "pv-arrow pv-next", "&#8250;"); nextB.type = "button"; nextB.setAttribute("aria-label", "Next page");
    stage.appendChild(prevB); stage.appendChild(nextB);
    var foot = el("div", "pv-foot"); live = el("span"); live.setAttribute("aria-live", "polite");
    var dw = el("div", "pv-dots");
    for (var i = 0; i < N; i++) { var d = el("button"); d.type = "button"; d.setAttribute("aria-label", "Go to page " + (i + 1)); (function (k) { d.addEventListener("click", function () { go(k); }); })(i); dw.appendChild(d); dots.push(d); }
    foot.appendChild(dw); foot.appendChild(live);
    box.appendChild(bar); box.appendChild(stage); box.appendChild(foot); box.appendChild(el("div", "pv-tip", "Tip: turn your phone sideways for a bigger view, or tap Open PDF."));
    root.appendChild(box); document.body.appendChild(root);
    closeB.addEventListener("click", close);
    root.addEventListener("click", function (e) { if (e.target === root) close(); });
    prevB.addEventListener("click", function () { go(cur - 1); });
    nextB.addEventListener("click", function () { go(cur + 1); });
    var sx = 0;
    stage.addEventListener("touchstart", function (e) { sx = e.changedTouches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1)); }, { passive: true });
  }
  function load(i) { var im = imgs[i]; if (im && !im.src) im.src = im.dataset.src; }
  function go(n) {
    if (n < 0 || n >= N) return;
    var dir = last === null ? 1 : n >= cur ? 1 : -1;
    imgs.forEach(function (im) { im.style.setProperty("--in", (rm ? 0 : 42 * dir) + "px"); im.style.setProperty("--out", (rm ? 0 : -42 * dir) + "px"); });
    load(n); load(n + 1); load(n - 1);
    imgs.forEach(function (im, i) {
      var isCur = i === n;
      if (!isCur && im.classList.contains("cur")) { im.classList.remove("cur"); im.classList.add("out"); (function (x) { setTimeout(function () { x.classList.remove("out"); }, 650); })(im); }
      if (isCur) { im.classList.remove("out"); im.classList.add("cur"); }
      im.setAttribute("aria-hidden", isCur ? "false" : "true");
    });
    dots.forEach(function (d, i) { d.classList.toggle("on", i === n); if (i === n) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current"); });
    prevB.disabled = n === 0; nextB.disabled = n === N - 1;
    live.textContent = "Page " + (n + 1) + " of " + N;
    last = cur; cur = n;
  }
  function key(e) {
    if (!open) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") go(cur + 1);
    else if (e.key === "ArrowLeft") go(cur - 1);
    else if (e.key === "Tab") {
      var f = [].slice.call(root.querySelectorAll("a[href],button:not([disabled])")); if (!f.length) return;
      var a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  }
  function show(trigger) {
    if (!root) { build(); document.addEventListener("keydown", key); }
    from = trigger || document.activeElement; open = true; last = null;
    document.documentElement.style.overflow = "hidden";
    go(0);
    requestAnimationFrame(function () { root.classList.add("on"); closeB.focus(); });
  }
  function close() {
    if (!open) return; open = false; root.classList.remove("on");
    document.documentElement.style.overflow = "";
    if (from && from.focus) from.focus();
  }
  return show;
  }
  window.openCourseViewer = function (k, trigger) {
    if (!CFG[k] || !PDFS[k]) return false;
    if (!inst[k]) inst[k] = create(k);
    inst[k](trigger);
    return true;
  };
})();

/* ----------------------------------------------------------------------
   D. WHATSAPP CHAT BOX: opens on hover or click, closes when the mouse leaves
   -------------------------------------------------------------------- */
(function () {
  var w = document.querySelector(".wc"),
    c = document.getElementById("wcard"),
    b = document.getElementById("wab"),
    x = document.getElementById("wx"),
    tm;
  function set(o) {
    clearTimeout(tm);
    c.classList.toggle("open", o);
    c.setAttribute("aria-hidden", !o);
    b.setAttribute("aria-expanded", o);
  }
  function later() {
    clearTimeout(tm);
    tm = setTimeout(function () {
      set(false);
    }, 250);
  }
  b.addEventListener("click", function () {
    set(!c.classList.contains("open"));
  });
  x.addEventListener("click", function () {
    set(false);
  });
  w.addEventListener("pointerenter", function (e) {
    if (e.pointerType === "mouse") set(true);
  });
  w.addEventListener("pointerleave", function (e) {
    if (e.pointerType === "mouse") later();
  });
  document.addEventListener("click", function (e) {
    if (!w.contains(e.target)) set(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") set(false);
  });
})();

/* ----------------------------------------------------------------------
   E. CONTACT FORM: sends the enquiry to WhatsApp
   -------------------------------------------------------------------- */
document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  if (document.getElementById("hp").value) return; /* a bot filled the hidden field */
  var t =
    "Hi WebvzardItSolutions, I’m " +
    n.value +
    ". I’m interested in " +
    s.value +
    ". " +
    m.value;
  window.open(
    "https://wa.me/919887133425?text=" + encodeURIComponent(t),
    "_blank",
  );
});

/* ----------------------------------------------------------------------
   F. HERO BACKGROUND: animated growth curve drawn on a canvas
   -------------------------------------------------------------------- */
(function () {
  var cv = document.getElementById("cv"),
    c = cv.getContext("2d"),
    W,
    H,
    P = [],
    N = 150,
    mx = -999,
    my = -999,
    t0 = performance.now();
  var rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
  function curve(u) {
    return (
      0.94 - 0.66 * Math.pow(u, 2) - 0.025 * Math.sin(u * 14) * (1 - u * 0.4)
    );
  }
  function size() {
    var r = cv.getBoundingClientRect(),
      d = Math.min(devicePixelRatio || 1, 2);
    W = r.width;
    H = r.height;
    cv.width = W * d;
    cv.height = H * d;
    c.setTransform(d, 0, 0, d, 0, 0);
    P = [];
    for (var i = 0; i < N; i++) {
      var u = i / (N - 1);
      P.push({
        u: u,
        x: Math.random() * W,
        y: Math.random() * H,
        tx: W * (0.08 + 0.88 * u),
        ty: H * curve(u) + (Math.random() - 0.5) * 26,
        r: 1.5 + Math.random() * 2.2,
      });
    }
  }
  var heroOn = true;
  if ("IntersectionObserver" in window)
    new IntersectionObserver(function (en) { heroOn = en[0].isIntersecting; }).observe(cv.parentNode);
  function frame(now) {
    if (document.hidden || !heroOn) { if (!rm) requestAnimationFrame(frame); return; }
    var k = rm ? 1 : Math.min((now - t0) / 3200, 1),
      e = 1 - Math.pow(1 - k, 3);
    c.clearRect(0, 0, W, H);
    c.lineWidth = 3;
    var g = c.createLinearGradient(0, 0, W, 0);
    g.addColorStop(0, "#0f72d6");
    g.addColorStop(1, "#13c4ff");
    c.strokeStyle = g;
    c.shadowColor = "#0f72d6";
    c.shadowBlur = 18;
    c.beginPath();
    var lim = Math.floor(e * (N - 1));
    for (var i = 0; i <= lim; i++) {
      var u = i / (N - 1),
        x = W * (0.08 + 0.88 * u),
        y = H * curve(u);
      i ? c.lineTo(x, y) : c.moveTo(x, y);
    }
    c.stroke();
    c.shadowBlur = 0;
    for (var j = 0; j < N; j++) {
      var p = P[j],
        on = p.u <= e;
      var ax = on ? p.tx : p.x + Math.sin(now / 900 + j) * 0.4,
        ay = on ? p.ty : p.y + Math.cos(now / 1100 + j) * 0.4;
      p.x += (ax - p.x) * 0.06;
      p.y += (ay - p.y) * 0.06;
      var dx = p.x - mx,
        dy = p.y - my,
        d = Math.sqrt(dx * dx + dy * dy);
      if (d < 110) {
        p.x += (dx / d) * (110 - d) * 0.12;
        p.y += (dy / d) * (110 - d) * 0.12;
      }
      c.fillStyle = on ? "rgba(255,255,255,.9)" : "rgba(120,190,255,.45)";
      c.beginPath();
      c.arc(p.x, p.y, p.r, 0, 6.283);
      c.fill();
    }
    if (!rm) requestAnimationFrame(frame);
  }
  size();
  addEventListener("resize", size);
  cv.parentNode.addEventListener("mousemove", function (e) {
    var r = cv.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
  cv.parentNode.addEventListener("mouseleave", function () {
    mx = my = -999;
  });
  requestAnimationFrame(frame);
})();

/* ----------------------------------------------------------------------
   G. SCROLL EFFECTS: progress bar, reveal on scroll, counters, menu highlight, hero movement
   -------------------------------------------------------------------- */
(function () {
  var rm = matchMedia("(prefers-reduced-motion:reduce)").matches,
    pg = document.getElementById("pg"),
    hero = document.querySelector(".hero");
  function prog() {
    var h = document.documentElement.scrollHeight - innerHeight;
    pg.style.transform =
      "scaleX(" + (h > 0 ? Math.min(scrollY / h, 1) : 0) + ")";
  }
  prog();
  addEventListener("scroll", prog, { passive: true });
  addEventListener("resize", prog);
  /* spotlight on pricing cards */
  document.querySelectorAll(".plan").forEach(function (p) {
    p.addEventListener("pointermove", function (e) {
      var r = p.getBoundingClientRect();
      p.style.setProperty("--mx", e.clientX - r.left + "px");
      p.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });
  /* scroll-spy for menu */
  var links = [].slice.call(document.querySelectorAll('.menu a[href^="#"]'));
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (en) {
        en.forEach(function (x) {
          if (x.isIntersecting) {
            links.forEach(function (a) {
              a.classList.toggle(
                "act",
                a.getAttribute("href") === "#" + x.target.id,
              );
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("section[id]").forEach(function (sec) {
      spy.observe(sec);
    });
  }
  if (rm || !("IntersectionObserver" in window)) return;
  /* hero parallax follows the pointer */
  hero.addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse") return;
    var r = hero.getBoundingClientRect();
    hero.style.setProperty(
      "--px",
      ((e.clientX - r.left) / r.width - 0.5).toFixed(3),
    );
    hero.style.setProperty(
      "--py",
      ((e.clientY - r.top) / r.height - 0.5).toFixed(3),
    );
  });
  /* scroll reveal with stagger */
  var sel =
      "h2,.lead,.promises>div,.sc,.steps li,.plan,.note,.quote,.who,.ceo .pp,.crew-t,.crew figure,.ci li,form,.stat",
    cnt = new Map();
  var io = new IntersectionObserver(
    function (en) {
      en.forEach(function (x) {
        if (!x.isIntersecting) return;
        x.target.classList.add("in");
        io.unobserve(x.target);
        var b = x.target.querySelector && x.target.querySelector("b[data-to]");
        if (b) count(b);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
  );
  document.querySelectorAll(sel).forEach(function (el) {
    var n = cnt.get(el.parentNode) || 0;
    cnt.set(el.parentNode, n + 1);
    el.style.setProperty("--d", Math.min(n * 0.09, 0.5) + "s");
    el.classList.add("rv");
    io.observe(el);
  });
  /* count-up numbers */
  function count(b) {
    var to = +b.dataset.to,
      suf = b.dataset.suf || "",
      t0 = performance.now(),
      D = 1600;
    b.textContent = "0" + suf;
    (function step(now) {
      var k = Math.min((now - t0) / D, 1),
        e = 1 - Math.pow(1 - k, 3);
      b.textContent = Math.round(to * e) + suf;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }
})();

/* ----------------------------------------------------------------------
   H. 3D HERO OBJECT (Three.js is loaded on demand from js/vendor/, see the end of this section)
   -------------------------------------------------------------------- */
function initHero3D() {
  var el = document.getElementById("g3"),
    T = window.THREE,
    rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
  if (!el || !T) return;
  var R;
  try {
    R = new T.WebGLRenderer({ alpha: true, antialias: true });
  } catch (e) {
    return;
  }
  R.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  el.appendChild(R.domElement);
  var S = new T.Scene(),
    C = new T.PerspectiveCamera(40, 1, 0.1, 60),
    W = new T.Group(),
    M = function (c, o, x) {
      return new T.MeshBasicMaterial(
        Object.assign({ color: c, transparent: true, opacity: o }, x || {}),
      );
    };
  C.position.z = 12;
  S.add(W);
  var ico = new T.IcosahedronGeometry(2.6, 2);
  W.add(
    new T.LineSegments(
      new T.EdgesGeometry(ico),
      new T.LineBasicMaterial({
        color: 0x2f95ff,
        transparent: true,
        opacity: 0.75,
      }),
    ),
  );
  W.add(
    new T.Points(ico, new T.PointsMaterial({ color: 0x13c4ff, size: 0.075 })),
  );
  W.add(new T.Mesh(new T.SphereGeometry(2.45, 32, 32), M(0x0a3a96, 0.4)));
  var core = new T.Mesh(
    new T.IcosahedronGeometry(1.2, 1),
    M(0x5fd8ff, 0.85, { wireframe: true }),
  );
  W.add(core);
  var orbs = [];
  [
    [3.3, 0.5, 0x13c4ff],
    [3.8, -0.9, 0x5fd8ff],
    [4.3, 1.3, 0xffffff],
  ].forEach(function (o, i) {
    var g = new T.Group();
    g.rotation.set(o[1], i * 1.1, 0);
    g.add(new T.Mesh(new T.TorusGeometry(o[0], 0.012, 8, 160), M(o[2], 0.45)));
    var d = new T.Mesh(new T.SphereGeometry(0.13, 16, 16), M(o[2], 1));
    g.add(d);
    W.add(g);
    orbs.push({ d: d, r: o[0], v: 0.35 + i * 0.18, a: i * 2 });
  });
  var n = 320,
    p = new Float32Array(n * 3);
  for (var i = 0; i < n; i++) {
    var r = 6 + Math.random() * 5,
      t = Math.random() * 6.283,
      u = Math.acos(2 * Math.random() - 1);
    p[i * 3] = r * Math.sin(u) * Math.cos(t);
    p[i * 3 + 1] = r * Math.sin(u) * Math.sin(t);
    p[i * 3 + 2] = r * Math.cos(u) - 3;
  }
  var sg = new T.BufferGeometry();
  sg.setAttribute("position", new T.BufferAttribute(p, 3));
  var stars = new T.Points(
    sg,
    new T.PointsMaterial({
      color: 0xb3cdf2,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
    }),
  );
  S.add(stars);
  function size() {
    var w = el.clientWidth,
      h = el.clientHeight;
    if (!w || !h) return;
    R.setSize(w, h);
    C.aspect = w / h;
    C.updateProjectionMatrix();
    W.scale.setScalar(w < 640 ? 0.7 : 1);
    draw();
  }
  var tx = 0,
    ty = 0,
    vis = true;
  function draw() {
    R.render(S, C);
  }
  function tick() {
    requestAnimationFrame(tick);
    if (!vis || document.hidden) return;
    W.rotation.y += 0.0032;
    W.rotation.x += (ty * 0.6 - W.rotation.x) * 0.04;
    W.position.x += (tx * 0.8 - W.position.x) * 0.04;
    core.rotation.y -= 0.01;
    core.rotation.x += 0.006;
    stars.rotation.y += 0.0004;
    var tm = performance.now() / 1000;
    orbs.forEach(function (o) {
      var a = o.a + tm * o.v;
      o.d.position.set(Math.cos(a) * o.r, Math.sin(a) * o.r, 0);
    });
    draw();
  }
  addEventListener("resize", size);
  size();
  el.classList.add("on");
  if (rm) return;
  document.addEventListener("pointermove", function (e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    tx = e.clientX / innerWidth - 0.5;
    ty = e.clientY / innerHeight - 0.5;
  });
  if ("IntersectionObserver" in window)
    new IntersectionObserver(function (e) {
      vis = e[0].isIntersecting;
    }).observe(el);
  tick();
}

/* Load Three.js only when it helps: not on small phones or in data-saver mode,
   and only after the page has finished its first paint. */
(function () {
  var small = matchMedia("(max-width:640px)").matches,
    save = navigator.connection && navigator.connection.saveData;
  if (small || save) return;
  function load() {
    var t = document.createElement("script");
    t.src = "js/vendor/three.r128.min.js";
    t.onload = initHero3D;
    document.head.appendChild(t);
  }
  if ("requestIdleCallback" in window) requestIdleCallback(load, { timeout: 2500 });
  else setTimeout(load, 1200);
})();


/* ----------------------------------------------------------------------
   I. GOVERNMENT SECTION: card animations
   -------------------------------------------------------------------- */
(function () {
  var rm = matchMedia("(prefers-reduced-motion:reduce)").matches,
    cards = [].slice.call(document.querySelectorAll(".gv"));
  cards.forEach(function (c, i) {
    c.style.setProperty("--d", (i % 3) * 0.12 + "s");
  });
  if (rm || !("IntersectionObserver" in window)) {
    cards.forEach(function (c) {
      c.classList.add("in");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (en) {
      en.forEach(function (x) {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          io.unobserve(x.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  cards.forEach(function (c) {
    io.observe(c);
  });
  /* 3D tilt on cards and service images (mouse only) */
  document.addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse") return;
    var t = e.target.closest && e.target.closest(".gv,.il");
    document.querySelectorAll(".gv,.il").forEach(function (o) {
      if (o !== t && o.style.transform) o.style.transform = "";
    });
    if (!t) return;
    var r = t.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    t.style.transform =
      "perspective(900px) rotateX(" +
      (-y * 9).toFixed(2) +
      "deg) rotateY(" +
      (x * 11).toFixed(2) +
      "deg) translateZ(0)";
  });
})();

/* ----------------------------------------------------------------------
   J. PROCESS TIMELINE: fills the glowing line as the steps scroll into view
   -------------------------------------------------------------------- */
(function () {
  var o = document.querySelector(".steps");
  if (!o) return;
  var li = [].slice.call(o.children);
  function update() {
    var r = o.getBoundingClientRect(), vh = innerHeight,
      vertical = matchMedia("(max-width:999px)").matches,
      p = vertical ? (vh * 0.62 - r.top) / r.height : (vh * 0.78 - r.top) / (vh * 0.45);
    p = Math.max(0, Math.min(1, p));
    o.style.setProperty("--p", p.toFixed(3));
    li.forEach(function (e) {
      var f = vertical ? e.offsetTop / o.offsetHeight : e.offsetLeft / o.offsetWidth;
      e.classList.toggle("on", p > 0.001 && p >= f);
    });
  }
  update();
  addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
})();

/* ----------------------------------------------------------------------
   K. CURSOR GLOW: soft light follows the mouse (dark sections only, mouse devices only)
   -------------------------------------------------------------------- */
(function () {
  var g = document.getElementById("cg");
  if (!g || !matchMedia("(hover:hover)").matches || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  var x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  function dark(el) {
    if (el && el.closest && el.closest(".hero,.band")) return true;
    var c = getComputedStyle(document.body).backgroundColor.match(/\d+/g);
    return !!c && c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114 < 90; /* page itself is in dark mode */
  }
  addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse") return;
    tx = e.clientX; ty = e.clientY;
    g.classList.toggle("on", dark(e.target));
  });
  document.documentElement.addEventListener("mouseleave", function () { g.classList.remove("on"); });
  (function loop() {
    x += (tx - x) * 0.14; y += (ty - y) * 0.14;
    g.style.transform = "translate3d(" + x + "px," + y + "px,0)";
    requestAnimationFrame(loop);
  })();
})();

/* ----------------------------------------------------------------------
   L. INTRO CLEAN-UP: remember it was shown, then remove it from the page
   -------------------------------------------------------------------- */
(function () {
  var i = document.getElementById("intro");
  if (!i) return;
  try { sessionStorage.setItem("wi", "1"); } catch (e) {}
  setTimeout(function () { i.remove(); }, 3000);
})();

/* ----------------------------------------------------------------------
   M. SERVICE QUOTE BUTTONS: choose the matching service in the contact form
   ---------------------------------------------------------------------- */
document.addEventListener("click", function (e) {
  var a = e.target.closest(".sq");
  var sel = document.getElementById("s");
  if (a && sel) sel.value = a.dataset.svc;
});

/* Map: loads Google Maps only after the visitor taps "Show map" */
(function () {
  var box = document.getElementById("map"), btn = document.getElementById("mapBtn");
  if (!box || !btn) return;
  btn.addEventListener("click", function () {
    var f = document.createElement("iframe");
    f.src = box.dataset.src;
    f.title = "Map showing the Webvzard IT Solutions office in Jaipur";
    f.loading = "lazy";
    f.referrerPolicy = "no-referrer";
    f.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox");
    box.replaceChildren(f);
  });
})();

/* ==========================================================================
   J. CLIENT REVIEWS
   The five reviews are written in index.html (section "reviews"). This script
   adds: the arrows, dots and auto-advance (with a pause button), the highlight
   on the middle card, "Read more", and one entrance animation. Optional live
   mode: if data-place-id and data-api-key are filled in on <section id="reviews">,
   live reviews from the Google Places API (New) replace the hand-copied ones.
   ========================================================================== */
(function () {
  var sec = document.getElementById("reviews");
  if (!sec) return;
  var track = document.getElementById("rvList"), prev = document.getElementById("rvPrev"), next = document.getElementById("rvNext");
  var play = document.getElementById("rvPlay"), dotsEl = document.getElementById("rvDots");
  var sum = document.getElementById("rvSummary"), all = document.getElementById("rvAll");
  var rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
  var INTERVAL = 6500, timer = 0, pos = -1, positions = 1, vis = 1;
  var paused = false, stopped = false, inView = false, hover = false, raf = 0;
  sec.style.setProperty("--rv-int", INTERVAL + "ms");

  function cards() { return track.querySelectorAll(".r2"); }
  function gap() { return parseFloat(getComputedStyle(track).columnGap) || 20; }
  function step() { var c = cards()[0]; return c ? c.getBoundingClientRect().width + gap() : 300; }
  function maxScroll() { return track.scrollWidth - track.clientWidth; }

  /* ---- read more ---- */
  function setup() {
    cards().forEach(function (c, i) {
      c.style.setProperty("--i", i);
      var t = c.querySelector(".r2t"), b = c.querySelector(".r2m");
      if (!t || !b || b.dataset.on) return;
      b.dataset.on = "1";
      b.addEventListener("click", function () {
        var open = c.classList.toggle("open");
        t.style.maxHeight = open ? t.scrollHeight + "px" : "";
        b.textContent = open ? "Show less" : "Read more";
        b.setAttribute("aria-expanded", open ? "true" : "false");
        restart();
      });
    });
    measure();
  }
  function measure() {
    cards().forEach(function (c) {
      var t = c.querySelector(".r2t"), b = c.querySelector(".r2m");
      if (!t || !b) return;
      var was = c.classList.contains("open");
      c.classList.remove("open"); t.style.maxHeight = "";
      var long = t.scrollHeight > t.clientHeight + 4;
      c.classList.toggle("clip", long);
      b.hidden = !long;
      if (was && long) { c.classList.add("open"); t.style.maxHeight = t.scrollHeight + "px"; }
    });
    layout();
  }

  /* ---- position, dots, highlight ---- */
  function layout() {
    var n = cards().length;
    vis = Math.max(1, Math.round((track.clientWidth + gap()) / step()));
    var count = Math.max(1, n - vis + 1);
    if (count !== positions || dotsEl.children.length !== count) {
      positions = count; dotsEl.replaceChildren();
      for (var i = 0; i < count; i++) {
        var d = document.createElement("button");
        d.type = "button";
        d.setAttribute("aria-label", vis > 1 ? "Show reviews " + (i + 1) + " to " + (i + vis) : "Show review " + (i + 1));
        d.dataset.i = i; dotsEl.appendChild(d);
      }
      dotsEl.hidden = count < 2;
    }
    pos = -1; update(true);
  }
  function current() {
    var m = maxScroll(), p = Math.round(track.scrollLeft / step());
    if (m > 0 && track.scrollLeft >= m - 2) p = positions - 1;
    return Math.max(0, Math.min(positions - 1, p));
  }
  function update(force) {
    var p = current(), cs = cards(), m = maxScroll();
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= m - 2;
    track.style.setProperty("--fl", track.scrollLeft <= 2 ? "0px" : "34px");
    track.style.setProperty("--fr", track.scrollLeft >= m - 2 ? "0px" : "34px");
    if (p === pos && !force) return;
    pos = p;
    var act = Math.min(cs.length - 1, p + Math.floor(vis / 2));
    cs.forEach(function (c, i) { c.classList.toggle("is-active", i === act); });
    [].forEach.call(dotsEl.children, function (d, i) {
      var on = i === p; d.classList.toggle("on", on);
      if (on) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
    });
    restart();
  }
  function goTo(i, user) {
    if (user) stop();
    track.scrollTo({ left: Math.max(0, Math.min(positions - 1, i)) * step(), behavior: rm ? "auto" : "smooth" });
  }

  /* ---- auto-advance (pausable; off for reduced motion and after the visitor interacts) ---- */
  function canRun() {
    return !rm && !paused && !stopped && inView && !hover && !document.hidden && positions > 1 && !track.querySelector(".r2.open");
  }
  function restart() {
    clearTimeout(timer);
    var on = dotsEl.querySelector(".on");
    [].forEach.call(dotsEl.children, function (d) { d.classList.remove("run"); });
    if (!canRun()) return;
    if (on) { void on.offsetWidth; on.classList.add("run"); }
    timer = setTimeout(function () { goTo((pos + 1) % positions, false); }, INTERVAL);
  }
  function syncPlay() {
    var off = paused || stopped;
    play.classList.toggle("off", off);
    play.setAttribute("aria-label", off ? "Start automatic scrolling" : "Pause automatic scrolling");
  }
  function stop() { if (!stopped) { stopped = true; syncPlay(); restart(); } }

  prev.addEventListener("click", function () { goTo(pos - 1, true); });
  next.addEventListener("click", function () { goTo(pos + 1, true); });
  dotsEl.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) goTo(+b.dataset.i, true); });
  play.addEventListener("click", function () {
    if (paused || stopped) { paused = false; stopped = false; } else { paused = true; }
    syncPlay(); restart();
  });
  track.addEventListener("scroll", function () { cancelAnimationFrame(raf); raf = requestAnimationFrame(function () { update(false); }); }, { passive: true });
  ["pointerdown", "wheel", "touchstart"].forEach(function (ev) { track.addEventListener(ev, stop, { passive: true }); });
  track.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(pos + 1, true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(pos - 1, true); }
  });
  sec.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") { hover = true; restart(); } });
  sec.addEventListener("pointerleave", function () { hover = false; restart(); });
  sec.addEventListener("focusin", function () { hover = true; restart(); });
  sec.addEventListener("focusout", function () { hover = false; restart(); });
  document.addEventListener("visibilitychange", restart);
  window.addEventListener("resize", measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  /* cursor glow on cards (mouse only), same as the pricing cards */
  track.addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse") return;
    var c = e.target.closest && e.target.closest(".r2");
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  });

  /* entrance + "is it on screen" tracking */
  if (rm) play.hidden = true; else play.hidden = false;
  if ("IntersectionObserver" in window) {
    if (!rm) sec.classList.add("rv-ready");
    new IntersectionObserver(function (en) {
      inView = en[0].isIntersecting;
      if (inView) sec.classList.add("go");
      restart();
    }, { threshold: 0.3 }).observe(sec);
  } else { inView = false; }
  syncPlay();
  setup();

  /* ---- optional live mode ---- */
  var placeId = (sec.dataset.placeId || "").trim(), apiKey = (sec.dataset.apiKey || "").trim();
  if (!placeId || !apiKey) return;
  function live(r) {
    var a = document.createElement("article");
    a.className = "r2";
    var name = (r.authorAttribution && r.authorAttribution.displayName) || "Google user";
    var head = document.createElement("header");
    var av = document.createElement("span");
    av.className = "r2a"; av.setAttribute("aria-hidden", "true"); av.textContent = name.charAt(0).toUpperCase();
    var who = document.createElement("div");
    who.className = "r2w";
    var n = document.createElement("b"); n.textContent = name;
    var t = document.createElement("span"); t.textContent = r.relativePublishTimeDescription || "Google review";
    who.append(n, t);
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "r2g"); svg.setAttribute("width", "22"); svg.setAttribute("height", "22"); svg.setAttribute("aria-hidden", "true");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#g-logo"); svg.appendChild(use);
    head.append(av, who, svg);
    var st = document.createElement("div");
    st.className = "r2s"; st.setAttribute("role", "img");
    var rate = Math.round(r.rating || 5);
    st.setAttribute("aria-label", rate + " out of 5 stars");
    st.textContent = "\u2605\u2605\u2605\u2605\u2605".slice(0, rate) + "\u2606\u2606\u2606\u2606\u2606".slice(0, 5 - rate);
    var body = document.createElement("div");
    body.className = "r2t";
    var p = document.createElement("p");
    p.textContent = (r.text && r.text.text) || (r.originalText && r.originalText.text) || "";
    body.appendChild(p);
    var more = document.createElement("button");
    more.className = "r2m"; more.type = "button"; more.hidden = true; more.textContent = "Read more"; more.setAttribute("aria-expanded", "false");
    a.append(head, st, body, more);
    return a;
  }
  var started = false;
  function load() {
    if (started) return;
    started = true;
    fetch("https://places.googleapis.com/v1/places/" + encodeURIComponent(placeId), {
      headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri" }
    })
      .then(function (r) { if (!r.ok) throw new Error("Places API " + r.status); return r.json(); })
      .then(function (d) {
        var rv = d.reviews || [];
        if (!rv.length) return;
        if (d.rating && d.userRatingCount) sum.textContent = d.rating.toFixed(1) + " out of 5 from " + d.userRatingCount + " Google reviews.";
        if (d.googleMapsUri) all.href = d.googleMapsUri;
        track.replaceChildren();
        rv.forEach(function (r) { track.appendChild(live(r)); });
        track.scrollLeft = 0;
        setup();
      })
      .catch(function () { /* keep the hand-copied reviews if anything fails */ });
  }
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (e, o) { if (e[0].isIntersecting) { o.disconnect(); load(); } }, { rootMargin: "400px 0px" }).observe(sec);
  } else { load(); }
})();
