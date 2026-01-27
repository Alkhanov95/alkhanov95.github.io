<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>

  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
</head>

<body>
  <canvas id="star-canvas"></canvas>

  <header class="navbar">
    <div class="navbar__inner">

      <span class="navbar__name" data-i18n="nav.name">Mohammed Alkhanov</span>

      <nav class="navbar__nav">
        <a data-scroll-target="#about" data-i18n="nav.about">About</a>
        <a data-scroll-target="#projects" data-i18n="nav.projects">Projects</a>
        <a data-scroll-target="#certificates" data-i18n="nav.certs">Certificates</a>
        <a data-scroll-target="#contact" data-i18n="nav.contact">Contact</a>
      </nav>

      <div>
        <button class="lang-toggle lang-toggle--active" data-lang="en">EN</button>
        /
        <button class="lang-toggle" data-lang="ru">RU</button>
      </div>

    </div>
  </header>

  <main>

    <section id="hero" class="section center">
      <h1 data-i18n="hero.name">Mohammed Alkhanov</h1>
      <p data-i18n="hero.subtitle"></p>
      <p data-i18n="hero.text"></p>
    </section>

    <section id="about" class="section center">
      <h2 data-i18n="about.title"></h2>
      <p data-i18n="about.subtitle"></p>
    </section>

    <section id="projects" class="section center">
      <h2 data-i18n="projects.title"></h2>
    </section>

    <section id="certificates" class="section center">
      <h2 data-i18n="certs.title"></h2>
      <p data-i18n="certs.subtitle"></p>

      <div class="certs">
        <a href="#">Go Backend Advanced</a>
        <a href="#">System Design</a>
        <a href="#">Docker & DevOps</a>
      </div>
    </section>

    <section id="contact" class="section center">
      <h2 data-i18n="contact.title"></h2>
    </section>

  </main>
</body>
</html>

