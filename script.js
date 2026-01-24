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

// УЛУЧШЕННЫЙ ДВОИЧНЫЙ ДОЖДЬ - ИСПРАВЛЕННЫЙ ДЛЯ МОБИЛЬНЫХ
const canvas = document.getElementById('starfield');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    let binaryChars = ['0', '1'];
    let columns = [];
    let animationId = null;
    let isInitialized = false;
    let devicePixelRatio = window.devicePixelRatio || 1;
    
    // ФИКСИРОВАННЫЕ размеры для предотвращения перезапусков
    let canvasWidth = 0;
    let canvasHeight = 0;

    // Устанавливаем canvas на ВЕСЬ ЭКРАН без границ
    function setCanvasFullScreen() {
        // Используем window.innerWidth/Height для получения реального размера viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Устанавливаем canvas на весь экран
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.zIndex = '-1';
        
        // Устанавливаем реальные размеры canvas с учетом pixel ratio
        canvasWidth = viewportWidth * devicePixelRatio;
        canvasHeight = viewportHeight * devicePixelRatio;
        
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        
        // Масштабируем контекст
        ctx.scale(devicePixelRatio, devicePixelRatio);
        
        return {
            width: viewportWidth,
            height: viewportHeight
        };
    }

    function createColumns(width, height) {
        // Настройки для мобильных и десктопов
        const fontSize = isMobile ? 16 : 18;
        // УВЕЛИЧИВАЕМ количество колонок для более плотного дождя
        const columnCount = Math.ceil(width / fontSize) * 1.3;
        // УВЕЛИЧИВАЕМ количество строк, чтобы заполнить всю высоту
        const rowsPerColumn = Math.ceil(height / fontSize) + 50;
        
        columns = [];
        
        // Создаем колонки с двоичными символами
        for (let i = 0; i < columnCount; i++) {
            const baseSpeed = isMobile ? 2 + Math.random() * 3 : 4 + Math.random() * 6;
            
            columns.push({
                x: (i % columnCount) * fontSize,
                y: -Math.random() * height, // Начинаем выше экрана
                speed: baseSpeed,
                chars: Array(rowsPerColumn).fill(0).map(() => binaryChars[Math.floor(Math.random() * 2)]),
                fontSize: fontSize,
                baseSpeed: baseSpeed
            });
        }
    }

    function drawBinaryRain() {
        if (!canvas || !ctx) return;
        
        // ОЧЕНЬ ТЕМНЫЙ фон для едва заметного дождя
        ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
        ctx.fillRect(0, 0, canvasWidth / devicePixelRatio, canvasHeight / devicePixelRatio);
        
        const visibleWidth = canvasWidth / devicePixelRatio;
        const visibleHeight = canvasHeight / devicePixelRatio;
        
        // Рисуем каждую колонку
        columns.forEach(column => {
            const fontSize = column.fontSize;
            
            // Устанавливаем шрифт
            ctx.font = `${fontSize}px 'Courier New', monospace`;
            ctx.textAlign = 'center';
            
            // Рисуем символы в колонке - СДЕЛАНЫ ЯРЧЕ НА 15%
            column.chars.forEach((char, index) => {
                const y = column.y + index * fontSize;
                
                // Пропускаем символы за пределами видимой области
                if (y < -fontSize || y > visibleHeight + fontSize) {
                    return;
                }
                
                // УВЕЛИЧЕНА ЯРКОСТЬ НА 15% и сделана более тёмной основной тон
                let color;
                const position = index / column.chars.length;
                
                if (position < 0.1) {
                    // Первые 10% символов - темное золото
                    const opacity = (1 - position * 5) * 0.5 * 1.15; // +15%
                    color = `rgba(120, 100, 30, ${Math.min(0.6, opacity)})`;
                } else if (position < 0.3) {
                    // Следующие 20% - средне-темное золото
                    const opacity = (0.8 - position * 2) * 0.4 * 1.15; // +15%
                    color = `rgba(100, 85, 25, ${Math.min(0.5, opacity)})`;
                } else if (position < 0.6) {
                    // Средние 30% - темно-зеленоватое золото
                    const opacity = (0.6 - position) * 0.3 * 1.15; // +15%
                    color = `rgba(80, 70, 20, ${Math.min(0.4, opacity)})`;
                } else {
                    // Остальные - очень темные
                    const opacity = (0.3 - position * 0.3) * 0.2 * 1.15; // +15%
                    color = `rgba(60, 50, 15, ${Math.max(0.05, opacity)})`;
                }
                
                ctx.fillStyle = color;
                ctx.fillText(char, column.x + fontSize/2, y);
            });
            
            // Плавное движение вниз
            column.y += column.speed;
            
            // ОЧЕНЬ РЕДКО меняем скорость для разнообразия
            if (Math.random() > 0.998) {
                column.speed = column.baseSpeed * (0.7 + Math.random() * 0.6);
            }
            
            // Если колонка полностью ушла за нижний край
            if (column.y > visibleHeight + column.chars.length * fontSize) {
                // Возвращаем вверх со случайным смещением
                column.y = -column.chars.length * fontSize;
                column.x = Math.random() * visibleWidth;
                
                // Обновляем некоторые символы
                if (Math.random() > 0.5) {
                    for (let i = 0; i < column.chars.length; i += 2 + Math.floor(Math.random() * 8)) {
                        column.chars[i] = binaryChars[Math.floor(Math.random() * 2)];
                    }
                }
            }
        });
        
        // Продолжаем анимацию
        animationId = requestAnimationFrame(drawBinaryRain);
    }

    // ОСНОВНАЯ ИНИЦИАЛИЗАЦИЯ - один раз при загрузке
    function initBinaryRain() {
        if (isInitialized) return;
        
        const { width, height } = setCanvasFullScreen();
        createColumns(width, height);
        
        // Останавливаем предыдущую анимацию
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        
        // Запускаем анимацию
        animationId = requestAnimationFrame(drawBinaryRain);
        isInitialized = true;
    }

    // СУПЕР-ОПТИМИЗИРОВАННЫЙ обработчик изменения размера (только для поворота экрана)
    let resizeTimeout;
    let isResizing = false;
    
    window.addEventListener('resize', () => {
        if (isResizing) return;
        isResizing = true;
        
        clearTimeout(resizeTimeout);
        
        // ТОЛЬКО при значительном изменении размера (поворот экрана)
        resizeTimeout = setTimeout(() => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            
            // Проверяем, действительно ли изменился размер (поворот экрана)
            const widthChanged = Math.abs(newWidth - (canvasWidth / devicePixelRatio)) > 100;
            const heightChanged = Math.abs(newHeight - (canvasHeight / devicePixelRatio)) > 100;
            
            if (widthChanged || heightChanged) {
                // Обновляем canvas и колонки
                const { width, height } = setCanvasFullScreen();
                createColumns(width, height);
            }
            
            isResizing = false;
        }, 1000); // Большая задержка для мобильных
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

    // Запускаем при загрузке
    window.addEventListener('load', () => {
        // Небольшая задержка для стабилизации
        setTimeout(() => {
            initBinaryRain();
        }, 300);
    });
    
    // Предотвращаем стандартное поведение на мобильных
    if (isMobile) {
        // Отключаем прокрутку на canvas
        canvas.style.touchAction = 'none';
        
        // Предотвращаем масштабирование при двойном тапе
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Предотвращаем контекстное меню
        canvas.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
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
