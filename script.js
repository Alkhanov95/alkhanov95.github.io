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
        'projects.project2.desc': 'API gateway для микросервисной архитектуры. Реализует маррутизацию запросов, rate limiting, middleware аутентификации и кэширование ответов. Включает health checks, сбор метрик и паттерн circuit breaker.',
        'certificates.title': 'Сертификаты',
        'contacts.title': 'Contacts',
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

// ЗОЛОТОЙ ДВОИЧНЫЙ ДОЖДЬ - ИСПРАВЛЕННАЯ ВЕРСИЯ (БОЛЬШЕ И ЯРЧЕ)
const canvas = document.getElementById('starfield');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    let binaryChars = ['0', '1'];
    let columns = [];
    let animationId = null;
    let resizeTimeout;
    let lastWidth = 0;
    let lastHeight = 0;
    let isInitialized = false;

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        
        // Сохраняем старые позиции колонок относительно размера
        const oldWidth = lastWidth;
        const oldHeight = lastHeight;
        const scaleX = rect.width / (oldWidth || rect.width);
        const scaleY = rect.height / (oldHeight || rect.height);
        
        lastWidth = rect.width;
        lastHeight = rect.height;
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        ctx.scale(dpr, dpr);
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        
        // Масштабируем позиции существующих колонок
        if (isInitialized && oldWidth > 0 && oldHeight > 0) {
            columns.forEach(column => {
                column.x *= scaleX;
                column.y *= scaleY;
                // Адаптируем шрифт к новому размеру
                column.fontSize = Math.max(12, Math.min(18, column.fontSize * (scaleX + scaleY) / 2));
            });
        }
        
        return true;
    }

    function initBinaryRain(forceResize = false) {
        if (!canvas) return;
        
        const width = canvas.width / (window.devicePixelRatio || 1);
        const height = canvas.height / (window.devicePixelRatio || 1);
        
        // Если не инициализирован или форс-ресайз - создаем новые колонки
        if (!isInitialized || forceResize || columns.length === 0) {
            // Настройки в зависимости от устройства
            const fontSize = isMobile ? 14 : 16;
            const columnCount = Math.floor(width / fontSize);
            const rowsPerColumn = isMobile ? 35 : 50; // УВЕЛИЧЕНО количество строк
            
            columns = [];
            
            // Создаем колонки с двоичными символами - БОЛЬШЕ КОЛОНОК
            for (let i = 0; i < columnCount * 1.2; i++) { // +20% колонок
                columns.push({
                    x: (i % columnCount) * fontSize,
                    y: Math.random() * -height,
                    speed: isMobile ? 2.5 + Math.random() * 3.5 : 5 + Math.random() * 7,
                    chars: Array(rowsPerColumn).fill(0).map(() => binaryChars[Math.floor(Math.random() * 2)]),
                    fontSize: fontSize,
                    baseSpeed: isMobile ? 2.5 + Math.random() * 3.5 : 5 + Math.random() * 7
                });
            }
            
            isInitialized = true;
        }
        
        // Останавливаем предыдущую анимацию
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        
        // Запускаем анимацию
        animationId = requestAnimationFrame(drawBinaryRain);
    }

    function drawBinaryRain() {
        if (!canvas) return;
        
        const width = canvas.width / (window.devicePixelRatio || 1);
        const height = canvas.height / (window.devicePixelRatio || 1);
        
        // Темный фон для контраста
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, width, height);
        
        // Рисуем каждую колонку
        columns.forEach(column => {
            const fontSize = column.fontSize;
            
            // Устанавливаем шрифт
            ctx.font = `${fontSize}px 'Courier New', monospace`;
            ctx.textAlign = 'center';
            
            // Рисуем символы в колонке - СДЕЛАНЫ ЯРЧЕ НА 10%
            column.chars.forEach((char, index) => {
                const y = column.y + index * fontSize;
                
                // УВЕЛИЧЕНА ЯРКОСТЬ НА 10%
                let color;
                if (index === 0) {
                    // Первый символ - темное золото, ярче на 10%
                    color = 'rgba(120, 100, 30, 0.5)'; // Увеличено с 0.44 до 0.5 (+13.6%)
                } else if (index < 8) { // Увеличено с 5 до 8
                    // Первые 8 символов - золото с прозрачностью
                    const opacity = (1 - (index / 12)) * 0.35 * 1.1; // Увеличено на 10%
                    color = `rgba(120, 100, 30, ${Math.min(0.8, opacity)})`;
                } else if (index < 15) { // Увеличено с 10 до 15
                    // Средние символы
                    const opacity = (0.8 - (index / 25)) * 0.25 * 1.1; // Увеличено на 10%
                    color = `rgba(100, 85, 25, ${Math.min(0.6, opacity)})`;
                } else if (index < 25) { // Новый диапазон
                    // Более дальние символы
                    const opacity = (0.5 - (index / 40)) * 0.2 * 1.1; // Увеличено на 10%
                    color = `rgba(80, 70, 20, ${Math.min(0.4, opacity)})`;
                } else {
                    // Самые дальние символы - очень темные
                    const opacity = (0.3 - (index / 60)) * 0.15 * 1.1; // Увеличено на 10%
                    color = `rgba(60, 50, 15, ${Math.max(0.05, opacity)})`;
                }
                
                ctx.fillStyle = color;
                ctx.fillText(char, column.x + fontSize/2, y);
            });
            
            // Плавное движение вниз
            column.y += column.speed;
            
            // Плавное изменение скорости для разнообразия
            if (Math.random() > 0.995) {
                column.speed = column.baseSpeed * (0.8 + Math.random() * 0.4);
            }
            
            // Если колонка ушла за нижний край, возвращаем её вверх
            if (column.y > height + fontSize * column.chars.length) {
                column.y = -fontSize * column.chars.length;
                
                // Случайно обновляем некоторые символы
                if (Math.random() > 0.7) {
                    for (let i = 0; i < column.chars.length; i += 3 + Math.floor(Math.random() * 5)) {
                        column.chars[i] = binaryChars[Math.floor(Math.random() * 2)];
                    }
                }
            }
        });
        
        // Продолжаем анимацию
        animationId = requestAnimationFrame(drawBinaryRain);
    }

    // УЛУЧШЕННЫЙ обработчик изменения размера окна
    let resizeThrottle = false;
    window.addEventListener('resize', () => {
        if (!resizeThrottle) {
            resizeThrottle = true;
            
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resizeCanvas();
                initBinaryRain(false); // Не создаем новые колонки, а адаптируем существующие
                resizeThrottle = false;
            }, 300);
        }
    });

    // Останавливаем анимацию при скрытии вкладки
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        } else {
            if (!animationId && canvas) {
                animationId = requestAnimationFrame(drawBinaryRain);
            }
        }
    });

    // Инициализация двоичного дождя
    window.addEventListener('load', () => {
        setTimeout(() => {
            resizeCanvas();
            initBinaryRain(true);
        }, 100);
    });
    
    // Предзагрузка для мобильных - предотвращаем перезапуск при скролле
    if (isMobile) {
        // Меньше чувствительность к визуальным изменениям
        const originalInitBinaryRain = initBinaryRain;
        let lastCall = 0;
        
        initBinaryRain = function(forceResize = false) {
            const now = Date.now();
            if (now - lastCall < 1000 && !forceResize) {
                return; // Не вызываем чаще чем раз в секунду
            }
            lastCall = now;
            originalInitBinaryRain.call(this, forceResize);
        };
    }
}

// Работа с якорными ссылками
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Пропускаем пустые ссылки
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            // Вычисляем позицию с учетом фиксированного хедера
            const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
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
