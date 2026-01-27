// Starfield background
(function () {
    const canvas = document.getElementById("starfield");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const STAR_COUNT = 180;
    const STAR_COLOR = "#B8860B";
    const MAX_SPEED = 0.15;
    const MIN_SPEED = 0.02;

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createStars() {
        stars = [];
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5 + 0.3,
                speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
                twinkle: Math.random() * Math.PI * 2
            });
        }
    }

    function draw() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        ctx.clearRect(0, 0, width, height);

        for (const star of stars) {
            star.y += star.speed;
            if (star.y - star.radius > height) {
                star.y = -star.radius;
                star.x = Math.random() * width;
            }

            star.twinkle += 0.02;
            const alpha = 0.3 + Math.abs(Math.sin(star.twinkle)) * 0.7;

            ctx.beginPath();
            const gradient = ctx.createRadialGradient(
                star.x,
                star.y,
                0,
                star.x,
                star.y,
                star.radius * 2.5
            );
            gradient.addColorStop(0, `${STAR_COLOR}`);
            gradient.addColorStop(1, "rgba(184, 134, 11, 0)");
            ctx.fillStyle = gradient;
            ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
            ctx.globalAlpha = alpha;
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        requestAnimationFrame(draw);
    }

    resize();
    createStars();
    requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
        resize();
        createStars();
    });
})();

// Smooth scroll + active nav link
(function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".header");
    const sections = Array.from(
        document.querySelectorAll("main section[id]")
    );

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (!targetId || !targetId.startsWith("#")) return;

            const section = document.querySelector(targetId);
            if (!section) return;

            e.preventDefault();
            const navHeight = navbar ? navbar.offsetHeight : 0;
            const rect = section.getBoundingClientRect();
            const offset = window.pageYOffset + rect.top - navHeight - 12;

            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });

            closeMobileNav();
        });
    });

    function setActiveNav() {
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const scrollPos = window.scrollY + navHeight + 40;

        let currentId = null;
        for (const section of sections) {
            if (scrollPos >= section.offsetTop) {
                currentId = section.id;
            }
        }

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (!href) return;
            const id = href.replace("#", "");
            if (id === currentId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveNav);
    window.addEventListener("load", setActiveNav);

    // Mobile nav
    const toggle = document.querySelector(".navbar__toggle");
    const linksContainer = document.querySelector(".navbar__links");

    function closeMobileNav() {
        if (!linksContainer || !toggle) return;
        linksContainer.classList.remove("navbar__links--open");
        toggle.setAttribute("aria-expanded", "false");
    }

    if (toggle && linksContainer) {
        toggle.addEventListener("click", () => {
            const isOpen = linksContainer.classList.toggle(
                "navbar__links--open"
            );
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    // Close on outside click
    document.addEventListener("click", (e) => {
        if (!linksContainer || !toggle) return;
        if (
            !linksContainer.contains(e.target) &&
            !toggle.contains(e.target)
        ) {
            closeMobileNav();
        }
    });
})();

// Language switcher
(function () {
    const translations = {
        en: {
            "nav-name": "Mohammed Alkhanov",
            "nav-hero": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-certificates": "Certificates",
            "nav-contact": "Contact",

            "hero-eyebrow": "Backend Go Developer",
            "hero-title": "Mohammed Alkhanov",
            "hero-subtitle":
                "I design and build reliable backend systems with Go, focusing on high-load, fault-tolerant architectures and clean, maintainable code.",
            "btn-contact": "Contact",
            "btn-resume": "Download Resume",
            "hero-meta-role-label": "Role",
            "hero-meta-role": "Backend Engineer (Go)",
            "hero-meta-focus-label": "Focus",
            "hero-meta-focus": "High-load, microservices, observability",

            "about-title": "About Me",
            "about-subtitle":
                "I build backend systems that stay fast, predictable, and observable under real-world load.",
            "about-p1":
                "I specialize in backend engineering with Go, focusing on robust APIs, distributed systems, and data-intensive workloads.",
            "about-p2":
                "My experience covers designing microservices, optimizing database access patterns, and implementing resilient communication between services with proper observability.",
            "about-p3":
                "I care about clean architecture, pragmatic testing, and clear operational visibility so teams can move fast without losing control in production.",
            "about-highlight-1-label": "Core stack",
            "about-highlight-1-value":
                "Go, PostgreSQL, Redis, Kafka",
            "about-highlight-2-label": "Domains",
            "about-highlight-2-value":
                "APIs, highload, microservices",
            "about-highlight-3-label": "Mindset",
            "about-highlight-3-value":
                "Reliability, clarity, ownership",

            "skills-title": "Skills",
            "skills-subtitle":
                "A focused toolkit for designing, building, and operating production backends.",
            "skills-backend-title": "Backend",
            "skills-backend-body":
                "Go, SQL, Linux, Shell, Backend, REST, gRPC, Concurrency, Highload, Caching, Retries, Idempotency",
            "skills-databases-title": "Databases",
            "skills-databases-body":
                "PostgreSQL, Redis, ClickHouse, Indexes, Transactions",
            "skills-messaging-title": "Messaging",
            "skills-messaging-body":
                "Kafka, Async, Consumers, DLQ",
            "skills-devops-title": "DevOps",
            "skills-devops-body":
                "Docker, Kubernetes, CI/CD",
            "skills-observability-title": "Observability",
            "skills-observability-body":
                "Prometheus, Grafana, OpenTelemetry, Jaeger",
            "skills-architecture-title": "Architecture",
            "skills-architecture-body":
                "Microservices, API Design, Scaling, Fault tolerance, Clean Architecture",
            "skills-testing-title": "Testing",
            "skills-testing-body":
                "Unit tests, Integration tests, Mocks",
            "skills-tools-title": "Tools",
            "skills-tools-body":
                "Git, GitLab, Swagger, Postman, curl",

            "projects-title": "Projects",
            "projects-subtitle":
                "Selected backend projects focused on reliability, throughput, and clear observability.",
            "project-1-title": "Crypto Exchange Backend",
            "project-1-tag": "High-load trading engine",
            "project-1-body":
                "Matching engine for cryptocurrency trading with real-time order book management, trade execution, and high-throughput processing capabilities.",
            "project-1-stack":
                "Stack: Go, PostgreSQL, Redis, Kafka",
            "project-1-github": "View on GitHub",
            "project-2-title": "Blog API Gateway",
            "project-2-tag": "Microservices gateway",
            "project-2-body":
                "API gateway for microservices architecture with rate limiting, authentication, request routing, and monitoring.",
            "project-2-stack":
                "Stack: Go, Redis, Docker, Prometheus",
            "project-2-github": "View on GitHub",

            "certificates-title": "Certificates",
            "certificates-subtitle":
                "Formal recognition of skills in backend engineering and distributed systems.",
            "cert-1-title": "Go Backend Development",
            "cert-1-tag": "Go / Backend",
            "cert-1-body":
                "Certificate confirming strong understanding of Go, concurrency patterns, and production-ready backend development.",
            "cert-2-title": "Distributed Systems & Microservices",
            "cert-2-tag": "Architecture",
            "cert-2-body":
                "Training focused on microservices, message-driven communication, resiliency patterns, and high-load system design.",

            "contact-title": "Contacts",
            "contact-subtitle":
                "Reach out for backend roles, consulting, or collaborations.",
            "contact-email-label": "Email",
            "contact-github-label": "GitHub",
            "contact-linkedin-label": "LinkedIn",
            "contact-telegram-label": "Telegram",

            "footer-text":
                "© 2026 Mohammed Alkhanov. Backend Go Developer."
        },
        ru: {
            "hero-title": "Мохаммед\nАлханов",
            "nav-hero": "Главная",
            "nav-about": "Обо мне",
            "nav-skills": "Навыки",
            "nav-projects": "Проекты",
            "nav-certificates": "Сертификаты",
            "nav-contact": "Контакты",

            "hero-eyebrow": "Backend Go разработчик",
            "hero-title": "Мохаммед Алханов",
            "hero-subtitle":
                "Проектирую и разрабатываю надежные backend‑системы на Go с фокусом на высокую нагрузку, отказоустойчивость и чистую архитектуру.",
            "btn-contact": "Связаться",
            "btn-resume": "Скачать резюме",
            "hero-meta-role-label": "Роль",
            "hero-meta-role": "Backend инженер (Go)",
            "hero-meta-focus-label": "Фокус",
            "hero-meta-focus":
                "Высоконагруженные системы, микросервисы, наблюдаемость",

            "about-title": "Обо мне",
            "about-subtitle":
                "Создаю backend‑решения, которые остаются быстрыми, предсказуемыми и наблюдаемыми под реальной нагрузкой.",
            "about-p1":
                "Специализируюсь на backend‑разработке на Go: надежные API, распределённые системы и работа с данными под нагрузкой.",
            "about-p2":
                "Опыт включает проектирование микросервисов, оптимизацию доступа к базам данных и построение устойчивого взаимодействия сервисов с корректной наблюдаемостью.",
            "about-p3":
                "Для меня важны чистая архитектура, практичные тесты и прозрачная эксплуатация, чтобы команды могли быстро развивать продукт без потери контроля в продакшене.",
            "about-highlight-1-label": "Основной стек",
            "about-highlight-1-value":
                "Go, PostgreSQL, Redis, Kafka",
            "about-highlight-2-label": "Домены",
            "about-highlight-2-value":
                "API, высокие нагрузки, микросервисы",
            "about-highlight-3-label": "Подход",
            "about-highlight-3-value":
                "Надежность, ясность, ответственность",

            "skills-title": "Навыки",
            "skills-subtitle":
                "Сфокусированный набор инструментов для проектирования, разработки и эксплуатации продакшн‑backend‑систем.",
            "skills-backend-title": "Backend",
            "skills-backend-body":
                "Go, SQL, Linux, Shell, Backend, REST, gRPC, Concurrency, Highload, Caching, Retries, Idempotency",
            "skills-databases-title": "Базы данных",
            "skills-databases-body":
                "PostgreSQL, Redis, ClickHouse, Indexes, Transactions",
            "skills-messaging-title": "Обмен сообщениями",
            "skills-messaging-body":
                "Kafka, Async, Consumers, DLQ",
            "skills-devops-title": "DevOps",
            "skills-devops-body":
                "Docker, Kubernetes, CI/CD",
            "skills-observability-title": "Наблюдаемость",
            "skills-observability-body":
                "Prometheus, Grafana, OpenTelemetry, Jaeger",
            "skills-architecture-title": "Архитектура",
            "skills-architecture-body":
                "Микросервисы, API‑дизайн, масштабирование, отказоустойчивость, Clean Architecture",
            "skills-testing-title": "Тестирование",
            "skills-testing-body":
                "Unit‑тесты, интеграционные тесты, моки",
            "skills-tools-title": "Инструменты",
            "skills-tools-body":
                "Git, GitLab, Swagger, Postman, curl",

            "projects-title": "Проекты",
            "projects-subtitle":
                "Выбранные backend‑проекты с упором на надёжность, пропускную способность и наблюдаемость.",
            "project-1-title": "Backend криптобиржи",
            "project-1-tag": "Высоконагруженный движок",
            "project-1-body":
                "Мэтчинг‑движок для криптовалютной биржи с управлением ордербуком в реальном времени, исполнением сделок и обработкой высокого потока заявок.",
            "project-1-stack":
                "Стек: Go, PostgreSQL, Redis, Kafka",
            "project-1-github": "GitHub",
            "project-2-title": "API‑шлюз для блога",
            "project-2-tag": "Микросервисный gateway",
            "project-2-body":
                "API‑шлюз для микросервисной архитектуры с rate limiting, аутентификацией, маршрутизацией запросов и мониторингом.",
            "project-2-stack":
                "Стек: Go, Redis, Docker, Prometheus",
            "project-2-github": "GitHub",

            "certificates-title": "Сертификаты",
            "certificates-subtitle":
                "Формальное подтверждение компетенций в backend‑разработке и распределённых системах.",
            "cert-1-title": "Go Backend Development",
            "cert-1-tag": "Go / Backend",
            "cert-1-body":
                "Сертификат, подтверждающий глубокое понимание Go, паттернов конкурентности и продакшн‑backend‑разработки.",
            "cert-2-title": "Distributed Systems & Microservices",
            "cert-2-tag": "Architecture",
            "cert-2-body":
                "Обучение по микросервисам, событийному обмену, паттернам устойчивости и проектированию высоконагруженных систем.",

            "contact-title": "Контакты",
            "contact-subtitle":
                "Пишите по вопросам backend‑ролей, консалтинга или совместных проектов.",
            "contact-email-label": "Email",
            "contact-github-label": "GitHub",
            "contact-linkedin-label": "LinkedIn",
            "contact-telegram-label": "Telegram",

            "footer-text":
                "© 2026 Мохаммед Алханов. Backend Go разработчик."
        }
    };

    let currentLang = "en";

    const translatableElements = new Map();
    Object.keys(translations.en).forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
            translatableElements.set(id, el);
        }
    });

    function applyLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        translatableElements.forEach((el, id) => {
            const value = dict[id];
            if (!value) return;
            el.textContent = value;
        });

        document.documentElement.lang = lang === "en" ? "en" : "ru";

        const enBtn = document.getElementById("lang-en");
        const ruBtn = document.getElementById("lang-ru");
        if (enBtn && ruBtn) {
            if (lang === "en") {
                enBtn.classList.remove("lang-switch--inactive");
                ruBtn.classList.add("lang-switch--inactive");
            } else {
                ruBtn.classList.remove("lang-switch--inactive");
                enBtn.classList.add("lang-switch--inactive");
            }
        }

        currentLang = lang;
        try {
            localStorage.setItem("portfolio-lang", lang);
        } catch (_) {
            // ignore
        }
    }

    function initLanguage() {
        let stored = null;
        try {
            stored = localStorage.getItem("portfolio-lang");
        } catch (_) {
            stored = null;
        }
        const initialLang =
            stored === "ru" || stored === "en"
                ? stored
                : (navigator.language || "").startsWith("ru")
                ? "ru"
                : "en";
        applyLanguage(initialLang);
    }

    const enBtn = document.getElementById("lang-en");
    const ruBtn = document.getElementById("lang-ru");

    if (enBtn) {
        enBtn.addEventListener("click", () => {
            if (currentLang !== "en") applyLanguage("en");
        });
    }
    if (ruBtn) {
        ruBtn.addEventListener("click", () => {
            if (currentLang !== "ru") applyLanguage("ru");
        });
    }

    window.addEventListener("load", initLanguage);
})();
