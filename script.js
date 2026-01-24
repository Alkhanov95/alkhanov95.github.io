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
    
    const newCvBtn = cvBtn.cloneNode(true);
    cvBtn.parentNode.replaceChild(newCvBtn, cvBtn);
    
    newCvBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        let cvFile;
        if (currentLang === 'ru') {
            cvFile = 'cv_russian.pdf';
        } else {
            cvFile = 'cv_english.pdf';
        }
        
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = cvFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
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
    
    updateCVLink();
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
}

// Инициализация перевода
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);
    
    setLanguage(currentLang);
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

// Анимация появления элементов при скролле
if (!isMobile) {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    if (fadeElements.length > 0) {
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
}

// ВЕЛИКОЛЕПНЫЕ ЗОЛОТЫЕ ВОЛНЫ - как плавное видео
const canvas = document.getElementById('starfield');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationId = null;
    let time = 0;
    
    // Инициализация размера canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Создание волн
    function createWaves() {
        return [
            {
                amplitude: canvas.height * 0.1,  // Высота волны
                frequency: 0.003,                 // Частота
                speed: 0.002,                     // Скорость движения
                phase: Math.random() * Math.PI * 2, // Фаза
                color: (ctx, alpha) => {          // Градиент цвета
                    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                    gradient.addColorStop(0, `rgba(180, 160, 100, ${alpha})`);
                    gradient.addColorStop(0.5, `rgba(212, 175, 55, ${alpha})`);
                    gradient.addColorStop(1, `rgba(180, 160, 100, ${alpha})`);
                    return gradient;
                },
                lineWidth: 2,
                segments: 100
            },
            {
                amplitude: canvas.height * 0.08,
                frequency: 0.002,
                speed: 0.0015,
                phase: Math.random() * Math.PI * 2,
                color: (ctx, alpha) => {
                    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    gradient.addColorStop(0, `rgba(150, 130, 50, ${alpha})`);
                    gradient.addColorStop(0.5, `rgba(180, 150, 60, ${alpha * 0.8})`);
                    gradient.addColorStop(1, `rgba(150, 130, 50, ${alpha})`);
                    return gradient;
                },
                lineWidth: 1.5,
                segments: 120
            },
            {
                amplitude: canvas.height * 0.06,
                frequency: 0.0015,
                speed: 0.003,
                phase: Math.random() * Math.PI * 2,
                color: (ctx, alpha) => `rgba(120, 100, 40, ${alpha})`,
                lineWidth: 1,
                segments: 150
            }
        ];
    }
    
    // Рисование одной волны
    function drawWave(wave) {
        const { amplitude, frequency, speed, phase, color, lineWidth, segments } = wave;
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        
        // Создаем эффект множества частиц в волне
        for (let i = 0; i <= segments; i++) {
            const x = (i / segments) * width;
            
            // Основная синусоида
            let y = height / 2 + amplitude * Math.sin(x * frequency + time * speed + phase);
            
            // Добавляем дополнительные гармоники для реалистичности
            y += amplitude * 0.3 * Math.sin(x * frequency * 2 + time * speed * 1.5 + phase);
            y += amplitude * 0.1 * Math.sin(x * frequency * 4 + time * speed * 2 + phase);
            
            // Плавные капли (эффект дождя)
            const dropFrequency = 0.03;
            const dropAmplitude = amplitude * 0.15;
            y += dropAmplitude * Math.sin(x * dropFrequency + time * 0.01) * 
                 Math.sin(time * 0.005 + phase) * 0.3;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                // Используем кривые Безье для плавности
                const prevX = ((i - 1) / segments) * width;
                const prevY = height / 2 + amplitude * Math.sin(prevX * frequency + time * speed + phase);
                
                const cp1x = prevX + (width / segments) * 0.3;
                const cp1y = prevY;
                const cp2x = x - (width / segments) * 0.3;
                const cp2y = y;
                
                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
            }
        }
        
        // Добавляем очень тонкую обводку для эффекта свечения
        ctx.strokeStyle = color(ctx, 0.15);
        ctx.stroke();
        
        // Основная линия волны
        ctx.strokeStyle = color(ctx, 0.1);
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }
    
    // Рисование капель/брызг
    function drawDrops() {
        const drops = [];
        const dropCount = 50;
        const width = canvas.width;
        const height = canvas.height;
        
        // Создаем капли
        for (let i = 0; i < dropCount; i++) {
            const x = (Math.sin(time * 0.001 + i) * 0.5 + 0.5) * width;
            const y = (Math.cos(time * 0.0015 + i * 2) * 0.5 + 0.5) * height;
            const size = 1 + Math.sin(time * 0.01 + i) * 0.5;
            const opacity = 0.05 + Math.sin(time * 0.02 + i) * 0.02;
            
            drops.push({ x, y, size, opacity });
        }
        
        // Рисуем капли
        drops.forEach(drop => {
            ctx.beginPath();
            ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${drop.opacity})`;
            ctx.fill();
            
            // Легкое свечение для некоторых капель
            if (drop.opacity > 0.06) {
                ctx.beginPath();
                ctx.arc(drop.x, drop.y, drop.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${drop.opacity * 0.3})`;
                ctx.fill();
            }
        });
    }
    
    // Основная функция анимации
    function animate() {
        // Очищаем с прозрачностью для создания следа
        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Рисуем волны
        const waves = createWaves();
        waves.forEach(wave => {
            drawWave(wave);
        });
        
        // Рисуем капли
        drawDrops();
        
        // Добавляем эффект переливающихся частиц
        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.sin(time * 0.0005 + i * 0.7) * 0.5 + 0.5) * canvas.width;
            const y = (Math.cos(time * 0.0007 + i * 0.9) * 0.5 + 0.5) * canvas.height;
            const size = 0.5 + Math.sin(time * 0.01 + i) * 0.3;
            const opacity = 0.03 + Math.sin(time * 0.02 + i * 2) * 0.02;
            
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 215, 0, ${opacity})`;
            ctx.fill();
        }
        
        time += 0.016; // Примерно 60 FPS
        animationId = requestAnimationFrame(animate);
    }
    
    // Инициализация
    function initWaves() {
        resizeCanvas();
        
        // Устанавливаем стили для canvas
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.zIndex = '-1';
        canvas.style.pointerEvents = 'none';
        
        // Останавливаем предыдущую анимацию
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        
        // Запускаем анимацию
        animate();
        
        // Добавляем обработчик изменения размера
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resizeCanvas();
            }, 250);
        });
        
        // Останавливаем анимацию при скрытии вкладки
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
                animationId = null;
            } else if (!animationId) {
                animate();
            }
        });
    }
    
    // Запускаем при загрузке
    window.addEventListener('load', () => {
        setTimeout(() => {
            initWaves();
        }, 100);
    });
    
    // Запускаем сразу если страница уже загружена
    if (document.readyState === 'complete') {
        setTimeout(() => {
            initWaves();
        }, 100);
    }
}

// Работа с якорными ссылками
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
            const targetPosition = target.offsetTop - headerHeight;
            
            if (isMobile) {
                window.scrollTo(0, targetPosition);
            } else {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            history.pushState(null, null, targetId);
            
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Инициализация всего при загрузке страницы
window.addEventListener('load', () => {
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
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
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
