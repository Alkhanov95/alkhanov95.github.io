(function () {
  'use strict';

  // ----- Particle system -----
  const GOLD_COLORS = ['#B8860B', '#D4AF37', '#CD9B1D'];
  const PARTICLE_COUNT = 80;
  const MIN_SIZE = 1;
  const MAX_SIZE = 4;
  const MIN_SPEED = 0.3;
  const MAX_SPEED = 1.8;
  const MIN_OPACITY = 0.15;
  const MAX_OPACITY = 0.55;
  const ROTATION_SPEED = 0.002;
  const PARALLAX_DEPTH = 0.15; // how much horizontal drift based on "depth"
  const FADE_BAND = 0.12; // fraction of height for fade in/out

  let canvas, ctx, particles, animationId;
  let width, height;

  function createParticle() {
    const size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
    const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
    const depth = Math.random(); // 0 = back, 1 = front (parallax)
    return {
      x: Math.random() * (width + 100) - 50,
      y: Math.random() * (height + 100) - 50,
      size,
      speed,
      depth,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * ROTATION_SPEED * 2,
      scale: 0.7 + Math.random() * 0.6,
      color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
      baseOpacity: MIN_OPACITY + Math.random() * (MAX_OPACITY - MIN_OPACITY),
      drift: (Math.random() - 0.5) * 2 * (0.5 + depth * PARALLAX_DEPTH * 20),
    };
  }

  function getParticleOpacity(p) {
    const yNorm = p.y / height;
    if (yNorm < FADE_BAND) return p.baseOpacity * (yNorm / FADE_BAND);
    if (yNorm > 1 - FADE_BAND) return p.baseOpacity * ((1 - yNorm) / FADE_BAND);
    return p.baseOpacity;
  }

  function drawParticle(p) {
    const opacity = getParticleOpacity(p);
    if (opacity <= 0) return;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.scale(p.scale, p.scale);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size, p.size * 1.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function updateParticle(p, dt) {
    p.y += p.speed * (60 * dt);
    p.x += p.drift * (60 * dt) * 0.05;
    p.rotation += p.rotationSpeed;

    if (p.y > height + 50) {
      p.y = -20;
      p.x = Math.random() * (width + 50) - 25;
    }
    if (p.y < -50) p.y = height + 20;
    if (p.x > width + 50) p.x = -50;
    if (p.x < -50) p.x = width + 50;
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    if (!particles || particles.length === 0) {
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
    }
  }

  let lastTime = 0;
  function loop(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    ctx.clearRect(0, 0, width, height);
    particles.forEach(function (p) {
      updateParticle(p, dt);
      drawParticle(p);
    });
    animationId = requestAnimationFrame(loop);
  }

  function initParticles() {
    canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
    lastTime = performance.now();
    loop(lastTime);

    window.addEventListener('resize', function () {
      resize();
    });
  }

  // ----- Smooth scroll for anchor links -----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (id === '#') return;
        var el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.querySelector('.nav-links')?.classList.remove('is-open');
          document.querySelector('.nav-toggle')?.classList.remove('is-open');
        }
      });
    });
  }

  // ----- Mobile nav toggle -----
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('is-open');
        links.classList.toggle('is-open');
      });
    }
  }

  // ----- Footer year -----
  function initFooterYear() {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // ----- Run -----
  initParticles();
  initSmoothScroll();
  initNav();
  initFooterYear();
})();
