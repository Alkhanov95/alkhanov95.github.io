;(function () {
  'use strict'

  // All copy in one place, keyed by language and i18n key
  window.TRANSLATIONS = {
    ru: {
      'nav.home': 'Главная',
      'nav.skills': 'Навыки',
      'nav.projects': 'Проекты',
      'nav.education': 'Образование',
      'nav.certificates': 'Сертификаты',
      'nav.contacts': 'Контакты',

      'hero.nameShort': 'Алханов Мохаммед',
      'hero.name': 'Алханов Мохаммед',
      'hero.role': 'Golang-разработчик',
      'hero.badge': 'Golang-разработчик',
      'hero.description':
        'Разрабатываю высоконагруженные backend-сервисы и микросервисы на Go: от REST/gRPC API до распределённых систем с мониторингом и трассировкой. В фокусе — чистая архитектура, наблюдаемость и инженерная строгость.',
      'hero.cta': 'Связаться со мной',
      'hero.subtitle': '',
      'hero.highlight1.label': 'Язык',
      'hero.highlight1.value': 'Go, Python, Java, SQL, C++, Bash',
      'hero.highlight2.label': 'Стек',
      'hero.highlight2.value': 'Fiber, Gin, Echo, Docker, gRPC, Kafka, CI/CD, REST API,  HTTP',
      'hero.highlight3.label': 'Области фокуса',
      'hero.highlight3.value':
        'Надёжная серверная логика, обмен сообщениями между сервисами и полный контроль состояния системы.',

      'skills.title': 'Навыки',
      'skills.languagesTitle': 'Языки программирования',
      'skills.backendTitle': 'Backend & Tools',
      'skills.archTitle': 'Архитектура',
      'skills.dataScienceTitle': 'Data Science',

      'projects.title': 'Проекты',
      'projects.apiGateway.name': 'API-gateway',
      'projects.apiGateway.desc':
        'REST API для управления пользователями (создание, получение, обновление, удаление) с авто-генерацией UUID, конфигурированием через config.yaml и логированием через slog. Проект организован по принципам Clean Architecture.',
      'projects.apiGateway.stack':
        'Stack: Go, Fiber, PostgreSQL, Docker, GitHub Actions',

      'projects.crypto.name': 'Crypto-exchange',
      'projects.crypto.desc':
        'In-memory matching engine и ордербук, REST API для заявок, интеграция с Ethereum (Ganache / ERC20). Учебный HFT-проект с фронтендом на Next.js / React и подключением MetaMask.',
      'projects.crypto.stack':
        'Stack: Go, Goroutines, Channels, Next.js, React, Ethers.js, MetaMask',

      'projects.california.name': 'California Housing Price Predictor',
      'projects.california.desc':
        'Модели для прогноза медианной стоимости жилья по данным переписи 1990 года: подготовка данных, feature engineering и сравнение регрессионных алгоритмов.',
      'projects.california.stack':
        'Stack: Python, pandas, numpy, scikit-learn, matplotlib',

      'projects.audio.name': 'Audio Emergency Detection System',
      'projects.audio.desc':
        'Интеллектуальная система анализа аудио на перекрёстках для распознавания аварий, сирен и криков с целью ускорения реагирования экстренных служб.',
      'projects.audio.stack':
        'Stack: Audio Processing, Algorithms, Microphone Arrays',

      'education.title': 'Образование',
      'education.item1.period': '2022–2026',
      'education.item1.title':
        'Financial University under the Government of the Russian Federation',
      'education.item1.desc':
        'Faculty of IT and Big Data Analytics, Applied Informatics, Bachelor.',

      'education.item2.period': '2015–2021',
      'education.item2.title': 'Oxbridge Academy, Baku',
      'education.item2.desc':
        'General Secondary Education, Pearson International Certificate (English medium).',

      'education.item3.period': '2016–2019',
      'education.item3.title': 'STEP IT Academy, Baku',
      'education.item3.desc':
        'Digital Technologies Program (3D Modeling, Web Dev, Python, Arduino, Unity, Design).',

      'certificates.title': 'Сертификаты',
      'certificates.it': 'IT Certificates',
      'certificates.ir': 'International Relations',
      'certificates.sport': 'Sport',
      'certificates.aviation': 'Aviation',
      'certificates.placeholder':
        'Плейсхолдер для сертификатов (онлайн-курсы, интенсивы, экзамены).',

      'contact.title': 'Контакты',
      'contact.subtitle':
        'Открыт к предложениям по backend-разработке, микросервисам и исследовательским проектам.',

      'footer.copyright': '© 2024 Alkhanov Mohammed.',
      'footer.madeBy': 'Сайт-портфолио Senior Golang Developer.'
    },

    en: {
      'nav.home': 'Home',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.certificates': 'Certificates',
      'nav.contacts': 'Contacts',

      'hero.nameShort': 'Alkhanov Mohammed',
      'hero.name': 'Alkhanov Mohammed',
      'hero.role': 'Golang Developer',
      'hero.badge': 'Golang Developer',
      'hero.description':
        'I build high-performance backend services and microservices in Go: from REST/gRPC APIs to distributed systems with metrics and tracing. Focused on clean architecture, observability and engineering rigor.',
      'hero.cta': 'Contact Me',
      'hero.subtitle': 'Backend, microservices, distributed systems.',
      'hero.highlight1.label': 'Language',
      'hero.highlight1.value': 'Go, microservices',
      'hero.highlight2.label': 'Stack',
      'hero.highlight2.value': 'Fiber, Gin, gRPC, Kafka',
      'hero.highlight3.label': 'Focus areas',
      'hero.highlight3.value':
        'Reliable REST/gRPC APIs, message queues, monitoring (Prometheus, Grafana), tracing (Jaeger), CI/CD.',

      'skills.title': 'Skills',
      'skills.languagesTitle': 'Languages',
      'skills.backendTitle': 'Backend & Tools',
      'skills.archTitle': 'Architecture',
      'skills.dataScienceTitle': 'Data Science',

      'projects.title': 'Projects',
      'projects.apiGateway.name': 'API-gateway',
      'projects.apiGateway.desc':
        'REST API for user management (create, get, update, delete) with UUID auto-generation, config via config.yaml and structured slog logging, following Clean Architecture principles.',
      'projects.apiGateway.stack':
        'Stack: Go, Fiber, PostgreSQL, Docker, GitHub Actions',

      'projects.crypto.name': 'Crypto-exchange',
      'projects.crypto.desc':
        'In-memory matching engine and orderbook, REST API for orders, Ethereum integration (Ganache / ERC20). Educational HFT project with Next.js / React frontend and MetaMask integration.',
      'projects.crypto.stack':
        'Stack: Go, Goroutines, Channels, Next.js, React, Ethers.js, MetaMask',

      'projects.california.name': 'California Housing Price Predictor',
      'projects.california.desc':
        'Predicts median housing prices on top of 1990 census data using feature engineering and regression model comparison.',
      'projects.california.stack':
        'Stack: Python, pandas, numpy, scikit-learn, matplotlib',

      'projects.audio.name': 'Audio Emergency Detection System',
      'projects.audio.desc':
        'Intelligent system that analyzes audio at intersections to detect emergencies (accidents, sirens, screams) and help speed up emergency response.',
      'projects.audio.stack':
        'Stack: Audio Processing, Algorithms, Microphone Arrays',

      'education.title': 'Education',
      'education.item1.period': '2022–2026',
      'education.item1.title':
        'Financial University under the Government of the Russian Federation',
      'education.item1.desc':
        'Faculty of IT and Big Data Analytics, Applied Informatics, Bachelor.',

      'education.item2.period': '2015–2021',
      'education.item2.title': 'Oxbridge Academy, Baku',
      'education.item2.desc':
        'General Secondary Education, Pearson International Certificate (English medium).',

      'education.item3.period': '2016–2019',
      'education.item3.title': 'STEP IT Academy, Baku',
      'education.item3.desc':
        'Digital Technologies Program (3D Modeling, Web Dev, Python, Arduino, Unity, Design).',

      'certificates.title': 'Certificates',
      'certificates.it': 'IT Certificates',
      'certificates.ir': 'International Relations',
      'certificates.sport': 'Sport',
      'certificates.aviation': 'Aviation',
      'certificates.placeholder':
        'Placeholder block for certificates (courses, exams, intensives).',

      'contact.title': 'Contacts',
      'contact.subtitle':
        'Open to backend, microservices and research-oriented opportunities.',

      'footer.copyright': '© 2024 Alkhanov Mohammed.',
      'footer.madeBy': 'Portfolio website of a Senior Golang Developer.'
    }
  }
})()

