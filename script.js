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

// Анимация появления элементов при скролле
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

// ЗВЁЗДНОЕ НЕБО - быстрые золотые звёзды
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 400;

// Размеры холста
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Создание звёзд
function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.7 + 0.3,
            speed: Math.random() * 1.5 + 0.8,
            twinkle: Math.random() * Math.PI * 2,
            twinkleSpeed: Math.random() * 0.05 + 0.03,
            color: `rgba(212, 175, 55, ${Math.random() * 0.8 + 0.2})`
        });
    }
}

// Отрисовка звёзд
function drawStars() {
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем звёзды
    stars.forEach(star => {
        // Мерцание
        star.twinkle += star.twinkleSpeed;
        const twinkleFactor = 0.5 + 0.5 * Math.sin(star.twinkle);
        const currentOpacity = star.opacity * twinkleFactor;
        
        // Основная звезда
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Золотой градиент
        const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 2
        );
        gradient.addColorStop(0, `rgba(255, 215, 0, ${currentOpacity * 0.9})`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${currentOpacity * 0.6})`);
        gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Свечение для крупных звёзд
        if (star.radius > 1.5) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
            const glowGradient = ctx.createRadialGradient(
                star.x, star.y, star.radius,
                star.x, star.y, star.radius * 3
            );
            glowGradient.addColorStop(0, `rgba(212, 175, 55, ${currentOpacity * 0.3})`);
            glowGradient.addColorStop(1, `rgba(212, 175, 55, 0)`);
            ctx.fillStyle = glowGradient;
            ctx.fill();
        }
        
        // Движение звёзд ВНИЗ
        star.y += star.speed;
        
        // Если звезда ушла за нижний край, появляемся сверху
        if (star.y > canvas.height + star.radius * 2) {
            star.y = -star.radius * 2;
            star.x = Math.random() * canvas.width;
            // Обновляем параметры для разнообразия
            star.radius = Math.random() * 2 + 0.5;
            star.speed = Math.random() * 1.5 + 0.8;
            star.opacity = Math.random() * 0.7 + 0.3;
        }
    });
    
    requestAnimationFrame(drawStars);
}

// Инициализация звёздного неба
function initStarfield() {
    resizeCanvas();
    createStars();
    drawStars();
}

// Обработчик изменения размера окна
window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();
});

// ТОЧНАЯ ПРОКРУТКА К СЕКЦИЯМ
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
            
            // Плавная прокрутка точно к началу секции
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Обновляем URL без перезагрузки
            history.pushState(null, null, targetId);
            
            // Закрываем мобильное меню если открыто
            if (mobileMenu.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Инициализация всего при загрузке страницы
window.addEventListener('load', () => {
    // Инициализация звёздного фона
    initStarfield();
    
    // Плавная прокрутка к якорю если он есть в URL при загрузке
    if (window.location.hash) {
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
    
    // Добавляем класс для анимации после загрузки
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
});

// Предотвращаем перезагрузку страницы при клике на якорную ссылку с пустым хэшем
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Дополнительные улучшения для звёзд
let isScrolling = false;
let scrollTimer = null;

// Ускоряем звёзды при скролле
window.addEventListener('scroll', () => {
    isScrolling = true;
    
    // Временно ускоряем звёзды
    stars.forEach(star => {
        star.speed = star.speed * 1.3;
    });
    
    // Очищаем предыдущий таймер
    if (scrollTimer) clearTimeout(scrollTimer);
    
    // Возвращаем нормальную скорость через 300мс после остановки скролла
    scrollTimer = setTimeout(() => {
        isScrolling = false;
        stars.forEach(star => {
            star.speed = star.speed / 1.3;
        });
    }, 300);
});

// Добавляем звёзды при клике (интерактивность)
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Добавляем новую звезду в месте клика
    stars.push({
        x: x,
        y: y,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.9 + 0.1,
        speed: Math.random() * 2 + 1.5,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.08 + 0.05,
        color: `rgba(255, 215, 0, ${Math.random() * 0.9 + 0.1})`
    });
    
    // Ограничиваем количество звёзд
    if (stars.length > 500) {
        stars = stars.slice(100);
    }
});