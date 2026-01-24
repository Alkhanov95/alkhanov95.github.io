const translations = {
    en: {
        'nav.name': 'Alkhanov',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.certificates': 'Certificates',
        'nav.contacts': 'Contacts',
        'hero.greeting': 'Hello, I\'m',
        'hero.title': 'Golang Backend Developer',
        'hero.intro': 'Building scalable, high-performance backend systems with clean architecture and modern practices.',
        'hero.github': 'GitHub',
        'hero.email': 'Email Me',
        'hero.cv': 'Download CV',
        'about.title': 'About',
        'about.p1': 'Backend engineer with 5+ years of commercial experience. I specialize in Go and building reliable, high-load services and microservice architectures.',
        'about.p2': 'I design APIs, optimize databases, implement caching and asynchronous processing, set up monitoring, and take systems from development to stable production.',
        'about.p3': 'Focused on performance, fault tolerance, and clean, maintainable architecture. Graduated in Applied Informatics from the Finance University. Fluent in English.',
        'skills.title': 'Technical Skills',
        'projects.title': 'Projects',
        'projects.viewCode': 'View Code',
        'projects.project1.title': 'Crypto Exchange Backend',
        'projects.project1.desc': 'Matching engine for cryptocurrency trading platform. Handles order processing with low-latency requirements, implements transaction logic with rollback support. Built for horizontal scaling and fault tolerance.',
        'projects.project2.title': 'Blog API Gateway',
        'projects.project2.desc': 'API gateway for microservices architecture. Implements request routing, rate limiting, authentication middleware, and response caching. Includes health checks, metrics collection, and circuit breaker pattern.',
        'certificates.title': 'Certificates',
        'contacts.title': 'Contacts',
        'contacts.intro': 'Feel free to reach out for collaborations or just a friendly chat.',
        'footer.text': '© 2026 Mohammed Alkhanov. Built with Go mentality: simple, efficient, reliable.'
    },
    ru: {
        'nav.name': 'Алханов',
        'nav.about': 'Обо мне',
        'nav.skills': 'Навыки',
        'nav.projects': 'Проекты',
        'nav.certificates': 'Сертификаты',
        'nav.contacts': 'Контакты',
        'hero.greeting': 'Привет, я',
        'hero.title': 'Golang Backend Разработчик',
        'hero.intro': 'Создаю масштабируемые, высокопроизводительные бэкенд-системы с чистой архитектурой и современными практиками.',
        'hero.github': 'GitHub',
        'hero.email': 'Написать',
        'hero.cv': 'Скачать CV',
        'about.title': 'Обо мне',
        'about.p1': 'Backend-разработчик с 5+ годами коммерческого опыта. Специализируюсь на Go и создании надёжных высоконагруженных сервисов и микросервисной архитектуры.',
        'about.p2': 'Проектирую API, оптимизирую базы данных, внедряю кэширование и асинхронную обработку, настраиваю мониторинг и довожу сервисы до стабильного продакшена.',
        'about.p3': 'Фокус — производительность, отказоустойчивость и понятная архитектура. Выпускник Финансового университета (Прикладная информатика). Свободно владею английским.',
        'skills.title': 'Технические навыки',
        'projects.title': 'Проекты',
        'projects.viewCode': 'Смотреть код',
        'projects.project1.title': 'Crypto Exchange Backend',
        'projects.project1.desc': 'Matching engine для криптовалютной биржи. Обработка ордеров с требованиями низкой задержки, транзакционная логика с поддержкой отката. Построен для горизонтального масштабирования и отказоустойчивости.',
        'projects.project2.title': 'Blog API Gateway',
        'projects.project2.desc': 'API gateway для микросервисной архитектуры. Реализует маршрутизацию запросов, rate limiting, middleware аутентификации и кэширование ответов. Включает health checks, сбор метрик и паттерн circuit breaker.',
        'certificates.title': 'Сертификаты',
        'contacts.title': 'Контакты',
        'contacts.intro': 'Открыт для сотрудничества или просто дружеского общения.',
        'footer.text': '© 2026 Мохаммед Алханов. Создано с философией Go: просто, эффективно, надёжно.'
    }
};

// Переключение языка
let currentLang = localStorage.getItem('lang') || 'en';

// Функция для динамической загрузки CV в зависимости от языка
function updateCVLink() {
    const cvBtn = document.getElementById('cvDownloadBtn');
    if (!cvBtn) return;
    
    // Удаляем предыдущий обработчик
    const newCvBtn = cvBtn.cloneNode(true);
    cvBtn.parentNode.replaceChild(newCvBtn, cvBtn);
    
    // Добавляем новый обработчик
    newCvBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        let cvFile;
        if (currentLang === 'ru') {
            cvFile = 'cv_russian.pdf'; // Файл с русским резюме
        } else {
            cvFile = 'cv_english.pdf'; // Файл с английским резюме
        }
        
        // Создаем временную ссылку для скачивания
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = cvFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // Обновляем id для нового элемента
    newCvBtn.id = 'cvDownloadBtn';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    document.documentElement.lang = lang;
    
    const toggleText = lang === 'en' ? 'RU' : 'EN';
    document.getElementById('langToggle').textContent = toggleText;
    document.getElementById('langToggleMobile').textContent = toggleText;
    
    // Обновляем ссылку на CV
    updateCVLink();
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
}

// Инициализация перевода
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    document.getElementById('langToggleMobile').addEventListener('click', toggleLanguage);
    setLanguage(currentLang);
    
    // Инициализируем ссылку на CV
    updateCVLink();
});

// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Определяем мобильное устройство
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Анимация появления элементов при скролле - ТОЛЬКО НА ДЕСКТОПЕ
if (!isMobile) {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => fadeObserver.observe(el));
}

// СТАТИЧНОЕ ЗВЁЗДНОЕ НЕБО (упрощённая версия)
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
}

function drawStaticStars() {
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    
    // Очищаем canvas
    ctx.clearRect(0, 0, width, height);
    
    // Количество звёзд в зависимости от размера экрана
    const starCount = Math.floor((width * height) / 8000);
    
    // Рисуем статичные звёзды
    for (let i = 0; i < starCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 1.2 + 0.3;
        const opacity = Math.random() * 0.6 + 0.2;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
        ctx.fill();
        
        // Добавляем небольшое свечение для некоторых звёзд
        if (radius > 0.8 && Math.random() > 0.7) {
            ctx.beginPath();
            ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${opacity * 0.3})`;
            ctx.fill();
        }
    }
}

function initStarfield() {
    resizeCanvas();
    drawStaticStars();
}

// РАБОТА С ЯКОРНЫМИ ССЫЛКАМИ - РАЗНАЯ ЛОГИКА ДЛЯ МОБИЛЬНЫХ И ДЕСКТОПА
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Пропускаем пустые ссылки
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            // Вычисляем позицию с учетом фиксированного хедера
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            if (isMobile) {
                // На мобильных - мгновенный скролл без анимации
                window.scrollTo(0, targetPosition);
            } else {
                // На десктопе - плавная анимация
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Обновляем URL без перезагрузки
            history.pushState(null, null, targetId);
            
            // Закрываем мобильное меню если открыто
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

window.addEventListener('resize', () => {
    resizeCanvas();
    drawStaticStars();
});

// Инициализация всего при загрузке страницы
window.addEventListener('load', () => {
    // Инициализация звёздного фона
    setTimeout(() => {
        initStarfield();
    }, 100);
    
    // На мобильных устройствах сразу показываем все элементы
    if (isMobile) {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }
    
    // Плавная прокрутка к якорю если он есть в URL при загрузке - ТОЛЬКО НА ДЕСКТОПЕ
    if (!isMobile && window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }
    
    // Центрируем заголовки после загрузки
    setTimeout(() => {
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.style.textAlign = 'center';
            title.style.marginLeft = 'auto';
            title.style.marginRight = 'auto';
        });
    }, 100);
});

// Предотвращаем перезагрузку страницы при клике на якорную ссылку с пустым хэшем
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
