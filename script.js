// ===================================
// Language Translations
// ===================================
const translations = {
    en: {
        logo: 'Alkhanov',
        'lang.toggle': 'RU',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.certificates': 'Certificates',
        'nav.contacts': 'Contacts',
        'hero.greeting': "Hello, I'm",
        'hero.title': 'Golang Backend Developer',
        'hero.intro': 'Building high-performance, scalable backend systems with Go. Passionate about clean architecture, distributed systems, and writing code that stands the test of time.',
        'hero.github': 'GitHub',
        'hero.email': 'Email Me',
        'hero.cv': 'Download CV',
        'about.title': 'About',
        'about.p1': "I'm a backend developer specializing in Go, with a deep passion for building robust, high-performance systems. My journey in software development has led me through various challenges in distributed computing, API design, and system architecture.",
        'about.p2': 'With experience in microservices architecture, I focus on creating scalable solutions that handle high loads efficiently. I believe in writing clean, maintainable code and following best practices in software engineering.',
        'about.p3': "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I'm always eager to take on new challenges and push the boundaries of what's possible with Go.",
        'skills.title': 'Technical Skills',
        'skills.programming': 'Programming',
        'skills.backend': 'Backend',
        'skills.databases': 'Databases',
        'skills.messaging': 'Messaging',
        'skills.devops': 'DevOps',
        'skills.observability': 'Observability',
        'skills.architecture': 'Architecture',
        'skills.testing': 'Testing',
        'skills.tools': 'Tools',
        'projects.title': 'Projects',
        'projects.crypto.title': 'Crypto Exchange Backend',
        'projects.crypto.desc': 'Matching engine for cryptocurrency trading with real-time order book management, trade execution, and high-throughput processing capabilities.',
        'projects.blog.title': 'Blog API Gateway',
        'projects.blog.desc': 'API gateway for microservices architecture with rate limiting, authentication, request routing, and comprehensive monitoring.',
        'projects.viewCode': 'View Code',
        'certificates.title': 'Certificates',
        'certificates.sql.name': 'SQL Academy',
        'certificates.sql.desc': 'Database Management Course',
        'certificates.ielts.name': 'IELTS Academic',
        'certificates.ielts.desc': 'B2 Level English',
        'certificates.step.name': 'STEP IT Academy',
        'certificates.step.desc': 'Software Development Diploma',
        'contacts.title': 'Contacts',
        'contacts.intro': 'Feel free to reach out for collaborations, opportunities, or just to say hello!',
        'footer.copyright': '© 2026 Mohammed Alkhanov. Built with Go mentality: simple, efficient, reliable.'
    },
    ru: {
        logo: 'Алханов',
        'lang.toggle': 'EN',
        'nav.about': 'Обо мне',
        'nav.skills': 'Навыки',
        'nav.projects': 'Проекты',
        'nav.certificates': 'Сертификаты',
        'nav.contacts': 'Контакты',
        'hero.greeting': 'Привет, я',
        'hero.title': 'Golang Backend Разработчик',
        'hero.intro': 'Создаю высокопроизводительные, масштабируемые backend-системы на Go. Увлечён чистой архитектурой, распределёнными системами и написанием кода, который выдержит проверку временем.',
        'hero.github': 'GitHub',
        'hero.email': 'Написать мне',
        'hero.cv': 'Скачать CV',
        'about.title': 'Обо мне',
        'about.p1': 'Я backend-разработчик, специализирующийся на Go, с глубокой страстью к созданию надёжных, высокопроизводительных систем. Мой путь в разработке программного обеспечения провёл меня через различные задачи в области распределённых вычислений, проектирования API и системной архитектуры.',
        'about.p2': 'Имея опыт работы с микросервисной архитектурой, я сосредоточен на создании масштабируемых решений, которые эффективно справляются с высокими нагрузками. Я верю в написание чистого, поддерживаемого кода и следование лучшим практикам в разработке ПО.',
        'about.p3': 'Когда я не программирую, я изучаю новые технологии, вношу вклад в open-source проекты и делюсь знаниями с сообществом разработчиков. Я всегда готов принять новые вызовы и расширить границы возможного с Go.',
        'skills.title': 'Технические навыки',
        'skills.programming': 'Программирование',
        'skills.backend': 'Backend',
        'skills.databases': 'Базы данных',
        'skills.messaging': 'Очереди сообщений',
        'skills.devops': 'DevOps',
        'skills.observability': 'Мониторинг',
        'skills.architecture': 'Архитектура',
        'skills.testing': 'Тестирование',
        'skills.tools': 'Инструменты',
        'projects.title': 'Проекты',
        'projects.crypto.title': 'Crypto Exchange Backend',
        'projects.crypto.desc': 'Движок сопоставления ордеров для криптовалютной биржи с управлением книгой заявок в реальном времени, исполнением сделок и возможностями высокопроизводительной обработки.',
        'projects.blog.title': 'Blog API Gateway',
        'projects.blog.desc': 'API-шлюз для микросервисной архитектуры с ограничением запросов, аутентификацией, маршрутизацией и комплексным мониторингом.',
        'projects.viewCode': 'Смотреть код',
        'certificates.title': 'Сертификаты',
        'certificates.sql.name': 'SQL Academy',
        'certificates.sql.desc': 'Курс по управлению базами данных',
        'certificates.ielts.name': 'IELTS Academic',
        'certificates.ielts.desc': 'Английский язык уровня B2',
        'certificates.step.name': 'STEP IT Academy',
        'certificates.step.desc': 'Диплом по разработке ПО',
        'contacts.title': 'Контакты',
        'contacts.intro': 'Не стесняйтесь обращаться для сотрудничества, по вопросам возможностей или просто чтобы поздороваться!',
        'footer.copyright': '© 2026 Мохаммед Алханов. Создано с менталитетом Go: просто, эффективно, надёжно.'
    }
};

// ===================================
// Language Functions
// ===================================
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update CV download link
    const cvLink = document.getElementById('cv-download');
    if (cvLink) {
        cvLink.href = lang === 'en' ? 'cv_english.pdf' : 'cv_russian.pdf';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language toggle buttons text
    const toggleText = lang === 'en' ? 'RU' : 'EN';
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    
    if (langToggle) langToggle.textContent = toggleText;
    if (langToggleMobile) langToggleMobile.textContent = toggleText;
}

function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
}

// ===================================
// Mobile Menu Functions
// ===================================
function toggleMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

function closeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===================================
// Starfield Animation - MODERATE BRIGHTNESS
// ===================================
const Starfield = (function() {
    let canvas, ctx;
    let stars = [];
    let animationId;
    let lastTime = 0;
    const FPS = 30;
    const frameInterval = 1000 / FPS;
    
    const config = {
        starCount: window.innerWidth <= 768 ? 100 : 180,
        minSize: 0.6,
        maxSize: 2.0,
        minSpeed: 0.08,
        maxSpeed: 0.4,
        coreColor: { r: 240, g: 240, b: 200 }, // Светло-желтый (менее яркий)
        glowColor: { r: 212, g: 175, b: 55 },  // Золотой из темы сайта
        maxOpacity: 0.7,  // Уменьшили максимальную непрозрачность
        twinkleSpeed: 0.02
    };
    
    function init() {
        canvas = document.getElementById('starfield');
        if (!canvas) return;
        
        ctx = canvas.getContext('2d');
        resize();
        createStars();
        animate(0);
        
        window.addEventListener('resize', debounce(handleResize, 250));
        
        // Пауза при скрытии вкладки
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            } else {
                if (!animationId) {
                    lastTime = 0;
                    animate(0);
                }
            }
        });
    }
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function handleResize() {
        resize();
        config.starCount = window.innerWidth <= 768 ? 100 : 180;
        createStars();
    }
    
    function createStars() {
        stars = [];
        for (let i = 0; i < config.starCount; i++) {
            stars.push(createStar());
        }
    }
    
    function createStar() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
            speed: Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed,
            opacity: Math.random() * 0.4 + 0.3, // от 0.3 до 0.7 (меньше яркости)
            opacityDirection: Math.random() > 0.5 ? 1 : -1,
            twinkleOffset: Math.random() * Math.PI * 2
        };
    }
    
    function animate(currentTime) {
        animationId = requestAnimationFrame(animate);
        
        // Frame rate limiting
        const elapsed = currentTime - lastTime;
        if (elapsed < frameInterval) return;
        lastTime = currentTime - (elapsed % frameInterval);
        
        // Темный фон для эффекта следа (больше прозрачности)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            // Движение вниз
            star.y += star.speed;
            
            // Возврат наверх
            if (star.y > canvas.height + star.size) {
                star.y = -star.size;
                star.x = Math.random() * canvas.width;
                star.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
                star.speed = Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;
            }
            
            // Мерцание
            star.twinkleOffset += config.twinkleSpeed;
            const twinkle = 0.8 + 0.2 * Math.sin(star.twinkleOffset); // Меньшая амплитуда мерцания
            const currentOpacity = star.opacity * twinkle;
            
            // Рисуем звезду - упрощенная версия (2 слоя вместо 3)
            
            // 1. Внешнее свечение (уменьшенное)
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 1.8, 0, Math.PI * 2);
            const glowOpacity = currentOpacity * 0.2; // Меньше свечения
            ctx.fillStyle = `rgba(${config.glowColor.r}, ${config.glowColor.g}, ${config.glowColor.b}, ${glowOpacity})`;
            ctx.fill();
            
            // 2. Ядро звезды (менее яркое)
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${config.coreColor.r}, ${config.coreColor.g}, ${config.coreColor.b}, ${currentOpacity * 0.8})`;
            ctx.fill();
            
            // 3. Только для самых больших звезд - маленький блик
            if (star.size > 1.2 && currentOpacity > 0.5) {
                ctx.beginPath();
                ctx.arc(star.x - star.size * 0.25, star.y - star.size * 0.25, star.size * 0.15, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 220, ${currentOpacity * 0.5})`;
                ctx.fill();
            }
        });
    }
    
    function destroy() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        window.removeEventListener('resize', handleResize);
    }
    
    return {
        init,
        destroy
    };
})();

// ===================================
// Smooth Scrolling with Header Offset
// ===================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Use instant scroll on mobile, smooth on desktop
                const isMobile = window.innerWidth <= 768;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: isMobile ? 'auto' : 'smooth'
                });
                
                // Update URL without reload
                history.pushState(null, null, href);
                
                // Highlight section briefly
                targetElement.classList.add('section-highlight');
                setTimeout(() => {
                    targetElement.classList.remove('section-highlight');
                }, 600);
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// ===================================
// Scroll Animations (Intersection Observer)
// ===================================
function initScrollAnimations() {
    // Skip animations on mobile for performance
    if (window.innerWidth <= 768) {
        // Show all elements immediately on mobile
        document.querySelectorAll('.fade-in').forEach(element => {
            element.classList.add('visible');
        });
        return;
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// ===================================
// CV Download Function
// ===================================
function initCVDownload() {
    const cvDownloadBtn = document.getElementById('cvDownloadBtn');
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const lang = localStorage.getItem('language') || 'en';
            const cvFile = lang === 'ru' ? 'cv_russian.pdf' : 'cv_english.pdf';
            
            // Create temporary link for download
            const link = document.createElement('a');
            link.href = cvFile;
            link.download = cvFile;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}

// ===================================
// Utility Functions
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// Handle Initial Hash
// ===================================
function handleInitialHash() {
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Small delay to ensure page is rendered
            setTimeout(() => {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'auto'
                });
            }, 100);
        }
    }
}

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Initialize components
    initSmoothScrolling();
    initScrollAnimations();
    Starfield.init();
    initCVDownload();
    
    // Handle initial hash navigation
    handleInitialHash();
    
    // Set up mobile menu links
    const mobileLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            const isClickInsideMenu = mobileMenu.contains(e.target);
            const isClickOnButton = mobileMenuBtn.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnButton) {
                closeMobileMenu();
            }
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Setup language toggle buttons
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);
    
    // Setup mobile menu button
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
});

// Make functions globally available for onclick handlers
window.toggleLanguage = toggleLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;

// Add section highlighting animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes highlight {
        0% { background-color: transparent; }
        20% { background-color: rgba(212, 175, 55, 0.1); }
        100% { background-color: transparent; }
    }
    
    .section-highlight {
        animation: highlight 0.6s ease;
    }
    
    /* Легкое усиление яркости, но не слишком сильное */
    #starfield {
        filter: brightness(1.05);
    }
`;
document.head.appendChild(style);
