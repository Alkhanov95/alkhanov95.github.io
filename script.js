// ================================
// Configuration
// ================================

/**
 * Language dictionary.
 * All dynamic texts are kept here to avoid hardcoding.
 */
const TRANSLATIONS = {
  en: {
    "nav.name": "Mohammed Alkhanov",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.kicker": "Backend Engineering • Systems Design",
    "hero.name": "Mohammed Alkhanov",
    "hero.subtitle": "Go Backend Developer",
    "hero.text":
      "I design and build reliable backend systems with a focus on performance, observability, and clean architecture.",
    "hero.viewProjects": "View Projects",
    "hero.cvEn": "Download CV (EN)",
    "hero.cvRu": "Download CV (RU)",

    "about.title": "About",
    "about.subtitle":
      "Focused on robust, maintainable, and observable Go services.",
    "about.paragraph1":
      "I specialize in building backend systems where correctness, throughput, and observability are critical. From trading engines to API gateways, I care about predictable behavior and clean, well-structured code.",
    "about.paragraph2":
      "My work typically involves Go, relational databases, caching layers, and message brokers. I enjoy designing APIs, improving latency, and making systems easier to operate and evolve.",

    "projects.title": "Projects",
    "projects.subtitle":
      "Selected backend projects showcasing performance, reliability, and clear architecture.",
    "projects.p1.title": "Crypto Exchange Backend",
    "projects.p1.role": "Matching Engine & Order Book",
    "projects.p1.description":
      "Matching engine for cryptocurrency trading with real-time order book management, trade execution, and high-throughput processing capabilities.",
    "projects.p2.title": "Blog API Gateway",
    "projects.p2.role": "Edge Routing & Observability",
    "projects.p2.description":
      "API gateway for microservices architecture with rate limiting, authentication, request routing, and comprehensive monitoring.",
    "projects.viewCode": "View Code",

    "contact.title": "Contact",
    "contact.subtitle":
      "Feel free to reach out for collaborations, opportunities, or just to say hello!",

    "footer.copy":
      "© <span id=\"year\"></span> Mohammed Alkhanov. All rights reserved.",
    "footer.backToTop": "Back to top"
  },

  ru: {
    "nav.name": "Мохаммед Алханов",
    "nav.about": "Обо мне",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",

    "hero.kicker": "Серверная разработка • Архитектура систем",
    "hero.name": "Мохаммед Алханов",
    "hero.subtitle": "Go Backend Разработчик",
    "hero.text":
      "Проектирую и разрабатываю надежные backend‑системы с упором на производительность, наблюдаемость и чистую архитектуру.",
    "hero.viewProjects": "Проекты",
    "hero.cvEn": "Скачать резюме (EN)",
    "hero.cvRu": "Скачать резюме (RU)",

    "about.title": "Обо мне",
    "about.subtitle":
      "Фокус на надежных, поддерживаемых и наблюдаемых Go‑сервисах.",
    "about.paragraph1":
      "Специализируюсь на создании backend‑систем, где важны корректность, пропускная способность и наблюдаемость. От торговых движков до API‑шлюзов — для меня важны предсказуемое поведение и аккуратный код.",
    "about.paragraph2":
      "Обычно работаю с Go, реляционными базами данных, кэширующими слоями и брокерами сообщений. Люблю проектировать API, снижать задержки и упрощать сопровождение систем.",

    "projects.title": "Проекты",
    "projects.subtitle":
      "Выбранные backend‑проекты, демонстрирующие производительность, надежность и понятную архитектуру.",
    "projects.p1.title": "Backend для криптобиржи",
    "projects.p1.role": "Matching‑движок и стакан заявок",
    "projects.p1.description":
      "Matching‑движок для торговли криптовалютой с управлением стаканом заявок в реальном времени, исполнением сделок и высокой пропускной способностью.",
    "projects.p2.title": "Blog API Gateway",
    "projects.p2.role": "Маршрутизация и наблюдаемость",
    "projects.p2.description":
      "API‑шлюз для микросервисной архитектуры с rate limiting, аутентификацией, маршрутизацией запросов и развитым мониторингом.",
    "projects.viewCode": "Код проекта",

    "contact.title": "Контакты",
    "contact.subtitle":
      "Пишите по любым вопросам: сотрудничество, предложения или просто чтобы поздороваться.",

    "footer.copy":
      "© <span id=\"year\"></span> Мохаммед Алханов. Все права защищены.",
    "footer.backToTop": "Наверх"
  }
};

const STORAGE_KEY_LANG = "portfolio_lang";

// ================================
// Helpers
// ================================

/**
 * Get persisted language or fallback to English.
 */
function getInitialLanguage() {
  const stored = window.localStorage.getItem(STORAGE_KEY_LANG);
  if (stored && (stored === "en" || stored === "ru")) {
    return stored;
  }
  const browserLang = navigator.language || navigator.userLanguage || "en";
  return browserLang.toLowerCase().startsWith("ru") ? "ru" : "en";
}

/**
 * Persist language selection.
 */
function storeLanguage(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY_LANG, lang);
  } catch (_) {
    // Ignore storage errors
  }
}

// ================================
// Language Switching
// ================================

/**
 * Apply translations to all elements with [data-i18n] attributes.
 */
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) return;

    // For simple use we set innerHTML to support the year span in footer.
    node.innerHTML = value;
  });

  // Update lang attribute on <html> for accessibility
  document.documentElement.lang = lang;
}

/**
 * Set up language toggle buttons.
 */
function initLanguageToggle(initialLang) {
  const buttons = document.querySelectorAll(".lang-toggle");
  buttons.forEach((btn) => {
    const lang = btn.getAttribute("data-lang");
    if (lang === initialLang) {
      btn.classList.add("lang-toggle--active");
    } else {
      btn.classList.remove("lang-toggle--active");
    }

    btn.addEventListener("click", () => {
      if (btn.classList.contains("lang-toggle--active")) return;
      const selectedLang = btn.getAttribute("data-lang");
      if (!selectedLang) return;

      applyTranslations(selectedLang);
      storeLanguage(selectedLang);

      buttons.forEach((b) =>
        b.classList.toggle(
          "lang-toggle--active",
          b.getAttribute("data-lang") === selectedLang
        )
      );

      // Ensure the footer year element is not overwritten
      injectYear();
    });
  });
}

// ================================
// Smooth Scrolling
// ================================

/**
 * Scroll smoothly to target element.
 */
function smoothScrollTo(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Attach smooth scroll behavior to elements with [data-scroll-target].
 */
function initSmoothScroll() {
  document.querySelectorAll("[data-scroll-target]").forEach((el) => {
    el.addEventListener("click", (event) => {
      const target = el.getAttribute("data-scroll-target");
      if (!target) return;
      event.preventDefault();
      smoothScrollTo(target);
    });
  });

  // Also adjust nav anchor clicks if any default anchors used
  document.querySelectorAll(".navbar__link").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        smoothScrollTo(href);
      }
    });
  });
}

// ================================
// Section Highlight in Navbar
// ================================

/**
 * Observe sections and add active state to corresponding nav link.
 */
function initSectionHighlight() {
  const sections = document.querySelectorAll("[data-section]");
  const navLinks = document.querySelectorAll(".navbar__link");

  const sectionById = {};
  sections.forEach((section) => {
    sectionById[section.id] = section;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      // Pick the most visible section in viewport
      let bestEntry = null;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
          bestEntry = entry;
        }
      });

      if (!bestEntry) return;
      const id = bestEntry.target.id;

      navLinks.forEach((link) => {
        const target = link.getAttribute("data-nav-target");
        link.classList.toggle("navbar__link--active", target === id);
      });
    },
    {
      root: null,
      threshold: 0.4
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// ================================
// Fade-in on Scroll
// ================================

/**
 * Fade in elements with .fade-target class when they appear.
 */
function initFadeIn() {
  const targets = document.querySelectorAll(".fade-target");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("fade-target--visible");
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.2
    }
  );

  targets.forEach((el) => observer.observe(el));
}

// ================================
// Star Background Animation
// ================================

/**
 * Lightweight star animation: small number of stars, slow drift.
 */
function initStarBackground() {
  const canvas = document.getElementById("star-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const STAR_COUNT = Math.min(80, Math.floor((width * height) / 30000)); // density-based
  const stars = [];

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 0.7 + 0.3,
      speedY: Math.random() * 0.08 + 0.02,
      alpha: Math.random() * 0.3 + 0.05
    });
  }

  let lastTime = 0;

  function draw(timestamp) {
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.fillStyle = "#c9a24d";

    stars.forEach((star) => {
      star.y += star.speedY * (delta * 0.06); // small drift
      if (star.y > height + 5) {
        star.y = -5;
        star.x = Math.random() * width;
      }

      ctx.globalAlpha = star.alpha;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();

    window.requestAnimationFrame(draw);
  }

  window.requestAnimationFrame(draw);

  // Handle resize with debouncing to reduce work
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }, 150);
  });
}

// ================================
// Misc
// ================================

/**
 * Insert current year into element with id="year".
 * Called after translation to restore the dynamic year.
 */
function injectYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

// ================================
// Init
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const initialLang = getInitialLanguage();
  applyTranslations(initialLang);
  injectYear();
  initLanguageToggle(initialLang);
  initSmoothScroll();
  initSectionHighlight();
  initFadeIn();
  initStarBackground();
});
