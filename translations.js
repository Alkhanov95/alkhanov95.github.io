;(function () {
  'use strict'

  window.TRANSLATIONS = {
    ru: {
      'nav.home': 'Главная',
      'nav.about': 'Обо мне',
      'nav.skills': 'Навыки',
      'nav.projects': 'Проекты',
      'nav.education': 'Образование',
      'nav.certificates': 'Сертификаты',
      'nav.contacts': 'Контакты',

      'hero.nameShort': 'Алханов Мохаммед',
      'hero.name': 'Алханов Мохаммед',
      'hero.role': 'Golang-разработчик',
      'hero.badge': 'Backend engineering / Go systems',
      'hero.description':
        'Проектирую и разрабатываю backend-сервисы на Go: REST/gRPC API, микросервисы, очереди сообщений, мониторинг и трассировку. В работе делаю акцент на чистую архитектуру, наблюдаемость и предсказуемое поведение системы.',
      'hero.cta': 'Связаться со мной',
      'hero.subtitle': 'Backend, микросервисы, распределённые системы.',
      'hero.highlight1.label': 'Языки',
      'hero.highlight1.value': 'Go, Python, Java, SQL, C++, Bash',
      'hero.highlight2.label': 'Стек',
      'hero.highlight2.value': 'Fiber, Gin, Echo, net/http, Docker, gRPC, Kafka, CI/CD, REST API',
      'hero.highlight3.label': 'Фокус',
      'hero.highlight3.value':
        'Надёжная серверная логика, обмен сообщениями между сервисами и полный контроль состояния системы.',

      'about.eyebrow': 'Profile',
      'about.title': 'Обо мне',
      'about.panelTitle': 'Backend systems profile',
      'about.lead':
        'Backend-разработчик, который проектирует сервисы вокруг надежности, понятных API и наблюдаемости.',
      'about.body':
        'Работаю с Go, REST/gRPC API, брокерами сообщений, контейнеризацией и инструментами мониторинга. Мне важно, чтобы система была не только функциональной, но и поддерживаемой: с чистыми границами, читаемой структурой и прозрачным поведением в продакшене.',

      'skills.eyebrow': 'Capabilities',
      'skills.title': 'Навыки',
      'skills.languagesTitle': 'Языки программирования',
      'skills.languagesDesc':
        'Основной фокус на Go для backend-сервисов, с дополнительным опытом в Python, SQL и системных инструментах.',
      'skills.backendTitle': 'Backend & Tools',
      'skills.backendDesc':
        'Разработка API и микросервисов на Go: от стандартного net/http до фреймворков, брокеров сообщений, контейнеризации, мониторинга и CI/CD.',
      'skills.archTitle': 'Архитектура',
      'skills.archDesc':
        'Подходы для чистых границ модулей, разделения ответственности, алгоритмического мышления и поддерживаемой структуры backend-систем.',
      'skills.dataScienceTitle': 'Data Science',
      'skills.dataScienceDesc':
        'Практический опыт анализа данных, подготовки признаков и визуализации результатов для исследовательских задач.',

      'projects.eyebrow': 'Selected engineering work',
      'projects.title': 'Проекты',
      'projects.oilForecast.name': 'Oil Forecast',
      'projects.oilForecast.desc':
        'Backend-система для сбора, хранения и прогнозирования цен на нефть Brent/WTI. Go-сервис отвечает за API, загрузку данных из FRED и работу с PostgreSQL, а отдельный Python ML-service выполняет обучение модели и построение прогноза. Главная цель проекта: не обещать идеально точный прогноз, а показать понятный ML pipeline: данные из PostgreSQL, подготовка, признаки, baseline, ML-модель, метрики, прогноз и сохранение результата.',
      'projects.oilForecast.stack':
        'Stack: Go, Python, PostgreSQL, FRED API, ML pipeline',

      'projects.aviationWeather.name': 'Aviation Weather API',
      'projects.aviationWeather.desc':
        'Сервис на Go для получения и отображения авиационной погоды по аэропорту. Проект сфокусирован на аккуратном API-дизайне, обработке пользовательского запроса и понятной выдаче погодной информации для авиационного контекста.',
      'projects.aviationWeather.stack':
        'Stack: Go, net/http, REST API, Aviation weather data',

      'projects.apiGateway.name': 'API-gateway',
      'projects.apiGateway.desc':
        'REST API для управления пользователями с продуманной структурой слоёв: создание, получение, обновление и удаление записей, авто-генерация UUID, конфигурация через config.yaml и структурированное логирование через slog. Код организован вокруг принципов Clean Architecture.',
      'projects.apiGateway.stack':
        'Stack: Go, Fiber, PostgreSQL, Docker, GitHub Actions',

      'projects.crypto.name': 'Crypto-exchange',
      'projects.crypto.desc':
        'Биржевой прототип с in-memory matching engine, ордербуком и REST API для заявок. Проект показывает работу с конкурентностью в Go, каналами, обработкой рыночных ордеров и интеграцией с Ethereum через Ganache/ERC20, Next.js/React и MetaMask.',
      'projects.crypto.stack':
        'Stack: Go, Goroutines, Channels, Next.js, React, Ethers.js, MetaMask',

      'projects.california.name': 'California Housing Price Predictor',
      'projects.california.desc':
        'ML-проект для прогноза медианной стоимости жилья по данным переписи 1990 года. Включает подготовку данных, feature engineering, сравнение регрессионных моделей и оценку качества результата.',
      'projects.california.stack':
        'Stack: Python, pandas, numpy, scikit-learn, matplotlib',

      'projects.audio.name': 'Audio Emergency Detection System',
      'projects.audio.desc':
        'Исследовательская система анализа аудио на перекрёстках для распознавания аварий, сирен и криков. Идея проекта: использовать обработку сигналов и алгоритмы классификации для ускорения реакции экстренных служб.',
      'projects.audio.stack':
        'Stack: Audio Processing, Algorithms, Microphone Arrays',

      'education.eyebrow': 'Education path',
      'education.title': 'Образование',
      'education.item1.period': '2022-2026',
      'education.item1.title':
        'Financial University under the Government of the Russian Federation',
      'education.item1.desc':
        'Бакалавриат по прикладной информатике на факультете IT и анализа больших данных. Академическая база включает разработку программных систем, работу с данными, аналитическое мышление и прикладные технологии.',

      'education.item2.period': '2015-2021',
      'education.item2.title': 'Oxbridge Academy, Baku',
      'education.item2.desc':
        'Среднее образование на английском языке с международной сертификацией Pearson. Этот опыт укрепил академический английский, коммуникацию и привычку работать в международной образовательной среде.',

      'education.item3.period': '2016-2019',
      'education.item3.title': 'STEP IT Academy, Baku',
      'education.item3.desc':
        'Программа по цифровым технологиям: web-разработка, Python, Arduino, Unity, 3D-моделирование и дизайн. Ранний практический фундамент в программировании и создании цифровых продуктов.',

      'certificates.eyebrow': 'Credentials',
      'certificates.title': 'Сертификаты',
      'certificates.it': 'Информационные технологии',
      'certificates.itDesc':
        'Подтвержденные материалы по программированию, backend-разработке и цифровым технологиям.',
      'certificates.ir': 'Международные отношения',
      'certificates.irDesc':
        'Участие в международных образовательных программах и моделях переговоров: MUN, EYP, WSC.',
      'certificates.sport': 'Спорт',
      'certificates.sportDesc':
        'Дипломы и достижения, отражающие дисциплину, соревновательный опыт и командную работу.',
      'certificates.aviation': 'Дополнительно',
      'certificates.aviationDesc':
        'Дополнительные дипломы и сертификаты в области языков, авиации и образования.',
      'certificates.placeholder':
        'Дополнительные дипломы и сертификаты в области языков, авиации и образования.',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Контакты',
      'contact.subtitle':
        'Открыт к предложениям по backend-разработке, микросервисам и исследовательским проектам.',

      'footer.copyright': '© 2026 Alkhanov Mohammed.',
      'footer.madeBy': 'Portfolio website of a Golang Developer.'
    },

    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.certificates': 'Certificates',
      'nav.contacts': 'Contact',

      'hero.nameShort': 'Alkhanov Mohammed',
      'hero.name': 'Alkhanov Mohammed',
      'hero.role': 'Golang Developer',
      'hero.badge': 'Backend engineering / Go systems',
      'hero.description':
        'I design and build backend services in Go: REST/gRPC APIs, microservices, message queues, monitoring and tracing. My focus is clean architecture, observability and predictable system behavior.',
      'hero.cta': 'Contact Me',
      'hero.subtitle': 'Backend, microservices, distributed systems.',
      'hero.highlight1.label': 'Languages',
      'hero.highlight1.value': 'Go, Python, Java, SQL, C++, Bash',
      'hero.highlight2.label': 'Stack',
      'hero.highlight2.value': 'Fiber, Gin, Echo, net/http, Docker, gRPC, Kafka, CI/CD, REST API',
      'hero.highlight3.label': 'Focus',
      'hero.highlight3.value':
        'Reliable server-side logic, service-to-service messaging, and clear visibility into system state.',

      'about.eyebrow': 'Profile',
      'about.title': 'About',
      'about.panelTitle': 'Backend systems profile',
      'about.lead':
        'A backend developer who designs services around reliability, clear APIs and observability.',
      'about.body':
        'I work with Go, REST/gRPC APIs, message brokers, containerization and monitoring tools. I care about systems that are not only functional, but also maintainable: clean boundaries, readable structure and transparent production behavior.',

      'skills.eyebrow': 'Capabilities',
      'skills.title': 'Skills',
      'skills.languagesTitle': 'Languages',
      'skills.languagesDesc':
        'Primary focus on Go for backend services, with additional experience in Python, SQL and system-level tooling.',
      'skills.backendTitle': 'Backend & Tools',
      'skills.backendDesc':
        'API and microservice development in Go: from the standard net/http package to frameworks, message brokers, containerization, monitoring and CI/CD.',
      'skills.archTitle': 'Architecture',
      'skills.archDesc':
        'Practices for clean module boundaries, separation of concerns, algorithmic thinking and maintainable backend system design.',
      'skills.dataScienceTitle': 'Data Science',
      'skills.dataScienceDesc':
        'Hands-on experience with data analysis, feature preparation and visualizing results for research-oriented tasks.',

      'projects.eyebrow': 'Selected engineering work',
      'projects.title': 'Projects',
      'projects.oilForecast.name': 'Oil Forecast',
      'projects.oilForecast.desc':
        'A backend system for collecting, storing and forecasting Brent/WTI oil prices. The Go service owns the API layer, FRED data ingestion and PostgreSQL persistence, while a separate Python ML service is responsible only for model training and prediction. The goal is not to promise a perfectly accurate forecast, but to build a clear and explainable ML pipeline: PostgreSQL data, preprocessing, features, baseline model, ML model, metrics, forecast and saved result.',
      'projects.oilForecast.stack':
        'Stack: Go, Python, PostgreSQL, FRED API, ML pipeline',

      'projects.aviationWeather.name': 'Aviation Weather API',
      'projects.aviationWeather.desc':
        'A Go service for retrieving and presenting aviation weather by airport. The project focuses on clean API design, request handling and readable weather output for an aviation-oriented use case.',
      'projects.aviationWeather.stack':
        'Stack: Go, net/http, REST API, Aviation weather data',

      'projects.apiGateway.name': 'API-gateway',
      'projects.apiGateway.desc':
        'REST API for user management with a clean layered structure: create, retrieve, update and delete records, UUID auto-generation, config via config.yaml and structured slog logging. The code is organized around Clean Architecture principles.',
      'projects.apiGateway.stack':
        'Stack: Go, Fiber, PostgreSQL, Docker, GitHub Actions',

      'projects.crypto.name': 'Crypto-exchange',
      'projects.crypto.desc':
        'Exchange prototype with an in-memory matching engine, orderbook and REST API for orders. The project demonstrates Go concurrency, channels, market order handling and Ethereum integration through Ganache/ERC20, Next.js/React and MetaMask.',
      'projects.crypto.stack':
        'Stack: Go, Goroutines, Channels, Next.js, React, Ethers.js, MetaMask',

      'projects.california.name': 'California Housing Price Predictor',
      'projects.california.desc':
        'ML project for predicting median housing prices from 1990 census data. It includes data preparation, feature engineering, regression model comparison and result evaluation.',
      'projects.california.stack':
        'Stack: Python, pandas, numpy, scikit-learn, matplotlib',

      'projects.audio.name': 'Audio Emergency Detection System',
      'projects.audio.desc':
        'Research-oriented audio analysis system for intersections, designed to detect accidents, sirens and screams. The concept applies signal processing and classification algorithms to help accelerate emergency response.',
      'projects.audio.stack':
        'Stack: Audio Processing, Algorithms, Microphone Arrays',

      'education.eyebrow': 'Education path',
      'education.title': 'Education',
      'education.item1.period': '2022-2026',
      'education.item1.title':
        'Financial University under the Government of the Russian Federation',
      'education.item1.desc':
        'Bachelor program in Applied Informatics at the Faculty of IT and Big Data Analytics. The academic foundation covers software systems, data work, analytical thinking and applied technologies.',

      'education.item2.period': '2015-2021',
      'education.item2.title': 'Oxbridge Academy, Baku',
      'education.item2.desc':
        'English-medium secondary education with Pearson international certification. This experience strengthened academic English, communication and the ability to work in an international learning environment.',

      'education.item3.period': '2016-2019',
      'education.item3.title': 'STEP IT Academy, Baku',
      'education.item3.desc':
        'Digital technologies program covering web development, Python, Arduino, Unity, 3D modeling and design. Early practical foundation in programming and building digital products.',

      'certificates.eyebrow': 'Credentials',
      'certificates.title': 'Certificates',
      'certificates.it': 'Information Technology',
      'certificates.itDesc':
        'Verified materials in programming, backend development and digital technologies.',
      'certificates.ir': 'International Relations',
      'certificates.irDesc':
        'Participation in international educational programs and negotiation simulations: MUN, EYP and WSC.',
      'certificates.sport': 'Sport',
      'certificates.sportDesc':
        'Diplomas and achievements that reflect discipline, competitive experience and teamwork.',
      'certificates.aviation': 'Additional',
      'certificates.aviationDesc':
        'Additional diplomas and certificates in languages, aviation and education.',
      'certificates.placeholder':
        'Additional diplomas and certificates in languages, aviation and education.',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Contact',
      'contact.subtitle':
        'Open to backend, microservices and research-oriented opportunities.',

      'footer.copyright': '© 2026 Alkhanov Mohammed.',
      'footer.madeBy': 'Portfolio website of a Golang Developer.'
    }
  }
})()
