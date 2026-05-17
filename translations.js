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
      'hero.lastName': 'Алханов',
      'hero.firstName': 'Мохаммед',
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
        'Backend-разработчик: проектирую сервисы вокруг надежности, понятных API и наблюдаемости.',
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
        'Backend-система для сбора, хранения и прогнозирования цен Brent/WTI. Go отвечает за API, загрузку данных из FRED и PostgreSQL, а Python ML-service строит объяснимый pipeline: подготовка данных, признаки, baseline, модель, метрики и сохранение прогноза.',
      'projects.oilForecast.stack':
        'Stack: Go, Python, PostgreSQL, FRED API, ML pipeline',

      'projects.aviationWeather.name': 'Aviation Weather API',
      'projects.aviationWeather.desc':
        'Go-сервис для получения авиационной погоды по аэропорту с аккуратным API-дизайном, обработкой запроса и понятной выдачей данных.',
      'projects.aviationWeather.stack':
        'Stack: Go, net/http, REST API, Aviation weather data',

      'projects.apiGateway.name': 'API-gateway',
      'projects.apiGateway.desc':
        'REST API для управления пользователями: CRUD-операции, UUID, config.yaml, структурированное slog-логирование и Clean Architecture.',
      'projects.apiGateway.stack':
        'Stack: Go, Fiber, PostgreSQL, Docker, GitHub Actions',

      'projects.crypto.name': 'Crypto-exchange',
      'projects.crypto.desc':
        'Биржевой прототип с in-memory matching engine, ордербуком и REST API. Показывает конкурентность в Go, каналы, обработку ордеров и Ethereum-интеграцию.',
      'projects.crypto.stack':
        'Stack: Go, Goroutines, Channels, Next.js, React, Ethers.js, MetaMask',

      'projects.california.name': 'California Housing Price Predictor',
      'projects.california.desc':
        'ML-проект для прогноза медианной стоимости жилья: подготовка данных, feature engineering, сравнение регрессионных моделей и оценка качества.',
      'projects.california.stack':
        'Stack: Python, pandas, numpy, scikit-learn, matplotlib',

      'projects.audio.name': 'Audio Emergency Detection System',
      'projects.audio.desc':
        'Исследовательская система анализа аудио на перекрёстках для распознавания аварий, сирен и криков с помощью обработки сигналов и классификации.',
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
      'certificates.it': 'ИТ',
      'certificates.itDesc':
        'Подтвержденные материалы по программированию, backend-разработке и цифровым технологиям.',
      'certificates.itAria': 'Открыть сертификаты по ИТ в новой вкладке',
      'certificates.oilGas': 'Нефтяная и газовая отрасль',
      'certificates.oilGasDesc':
        'Материалы и достижения по нефтегазовому направлению.',
      'certificates.oilGasAria': 'Открыть сертификаты по нефтегазовой отрасли в новой вкладке',
      'certificates.aviation': 'Авиация',
      'certificates.aviationDesc':
        'Сертификаты и дополнительные материалы по авиации.',
      'certificates.aviationAria': 'Открыть сертификаты по авиации в новой вкладке',
      'certificates.ir': 'Международные отношения',
      'certificates.irDesc':
        'Участие в международных образовательных программах и моделях переговоров: MUN, EYP, WSC.',
      'certificates.irAria': 'Открыть сертификаты по международным отношениям в новой вкладке',
      'certificates.sport': 'Спорт',
      'certificates.sportDesc':
        'Дипломы и достижения, отражающие дисциплину, соревновательный опыт и командную работу.',
      'certificates.sportsAria': 'Открыть спортивные сертификаты в новой вкладке',
      'certificates.educationCertificates': 'Образование / сертификаты',
      'certificates.educationCertificatesDesc':
        'Дипломы и сертификаты в области языков и образования.',
      'certificates.educationCertificatesAria':
        'Открыть сертификаты по образованию в новой вкладке',
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
      'hero.lastName': 'Alkhanov',
      'hero.firstName': 'Mohammed',
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
        'Backend developer focused on reliability, clear APIs and observability.',
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
        'A backend system for collecting, storing and forecasting Brent/WTI prices. Go handles the API, FRED ingestion and PostgreSQL persistence, while Python ML service builds an explainable pipeline: preprocessing, features, baseline, model, metrics and saved forecast.',
      'projects.oilForecast.stack':
        'Stack: Go, Python, PostgreSQL, FRED API, ML pipeline',

      'projects.aviationWeather.name': 'Aviation Weather API',
      'projects.aviationWeather.desc':
        'A Go service for retrieving aviation weather by airport, with clean API design, request handling and readable weather output.',
      'projects.aviationWeather.stack':
        'Stack: Go, net/http, REST API, Aviation weather data',

      'projects.apiGateway.name': 'API-gateway',
      'projects.apiGateway.desc':
        'REST API for user management: CRUD operations, UUID generation, config.yaml, structured slog logging and Clean Architecture.',
      'projects.apiGateway.stack':
        'Stack: Go, Fiber, PostgreSQL, Docker, GitHub Actions',

      'projects.crypto.name': 'Crypto-exchange',
      'projects.crypto.desc':
        'Exchange prototype with an in-memory matching engine, orderbook and REST API. Demonstrates Go concurrency, channels, order handling and Ethereum integration.',
      'projects.crypto.stack':
        'Stack: Go, Goroutines, Channels, Next.js, React, Ethers.js, MetaMask',

      'projects.california.name': 'California Housing Price Predictor',
      'projects.california.desc':
        'ML project for predicting median housing prices: data preparation, feature engineering, regression model comparison and evaluation.',
      'projects.california.stack':
        'Stack: Python, pandas, numpy, scikit-learn, matplotlib',

      'projects.audio.name': 'Audio Emergency Detection System',
      'projects.audio.desc':
        'Research-oriented audio analysis system for intersections, detecting accidents, sirens and screams through signal processing and classification.',
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
      'certificates.it': 'IT',
      'certificates.itDesc':
        'Verified materials in programming, backend development and digital technologies.',
      'certificates.itAria': 'Open IT certificates in a new tab',
      'certificates.oilGas': 'Oil and Gas Industry',
      'certificates.oilGasDesc':
        'Materials and achievements related to the oil and gas industry.',
      'certificates.oilGasAria': 'Open oil and gas certificates in a new tab',
      'certificates.aviation': 'Aviation',
      'certificates.aviationDesc':
        'Certificates and additional materials related to aviation.',
      'certificates.aviationAria': 'Open aviation certificates in a new tab',
      'certificates.ir': 'International Relations',
      'certificates.irDesc':
        'Participation in international educational programs and negotiation simulations: MUN, EYP and WSC.',
      'certificates.irAria': 'Open international relations certificates in a new tab',
      'certificates.sport': 'Sports',
      'certificates.sportDesc':
        'Diplomas and achievements that reflect discipline, competitive experience and teamwork.',
      'certificates.sportsAria': 'Open sports certificates in a new tab',
      'certificates.educationCertificates': 'Education / Certificates',
      'certificates.educationCertificatesDesc':
        'Diplomas and certificates in languages and education.',
      'certificates.educationCertificatesAria':
        'Open education certificates in a new tab',
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
