;(function () {
  'use strict'

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var isMobile = window.matchMedia('(max-width: 760px)').matches

  function initVantaBackground() {
    var el = document.getElementById('vanta-background')
    if (!el || reduceMotion || !window.VANTA || !window.VANTA.NET || !window.THREE) {
      return false
    }

    var effect = window.VANTA.NET({
      el: el,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xf0f0fa,
      backgroundColor: 0x000000,
      points: isMobile ? 5.0 : 8.0,
      maxDistance: isMobile ? 16.0 : 20.0,
      spacing: isMobile ? 16.0 : 12.0
    })

    window.addEventListener('beforeunload', function () {
      if (effect && typeof effect.destroy === 'function') effect.destroy()
    })

    return true
  }

  function initCanvasBackground() {
    var canvas = document.getElementById('particle-canvas')
    if (!canvas || reduceMotion) return

    var ctx = canvas.getContext('2d')
    var width = window.innerWidth
    var height = window.innerHeight
    var animationFrame = null

    canvas.width = width
    canvas.height = height

    var NODE_COUNT = Math.min(90, Math.floor((width * height) / 26000))
    var MAX_DISTANCE = 150
    var MOUSE_RADIUS = 150
    var nodes = []
    var mouse = { x: null, y: null, active: false }

    function createNode() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: 0.7 + Math.random() * 1.15,
        depth: 0.3 + Math.random() * 0.7
      }
    }

    function initNodes() {
      NODE_COUNT = Math.min(90, Math.floor((width * height) / 26000))
      nodes = []
      for (var i = 0; i < NODE_COUNT; i++) nodes.push(createNode())
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initNodes()
    }

    function updateNode(node) {
      node.x += node.vx * (0.6 + node.depth)
      node.y += node.vy * (0.6 + node.depth)

      if (node.x < -50) node.x = width + 50
      if (node.x > width + 50) node.x = -50
      if (node.y < -50) node.y = height + 50
      if (node.y > height + 50) node.y = -50

      if (mouse.active && mouse.x != null) {
        var dx = node.x - mouse.x
        var dy = node.y - mouse.y
        var dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          var force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          node.x += (dx / dist) * force * 1.2
          node.y += (dy / dist) * force * 1.2
        }
      }
    }

    function drawNode(node) {
      var alpha = 0.12 + node.depth * 0.18
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(240,240,250,' + alpha.toFixed(3) + ')'
      ctx.fill()
    }

    function drawConnections() {
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var a = nodes[i]
          var b = nodes[j]
          var dx = a.x - b.x
          var dy = a.y - b.y
          var dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DISTANCE) {
            var alpha = 0.015 + (1 - dist / MAX_DISTANCE) * 0.075
            ctx.strokeStyle = 'rgba(240,240,250,' + alpha.toFixed(3) + ')'
            ctx.lineWidth = 0.55
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, width, height)
      for (var i = 0; i < nodes.length; i++) updateNode(nodes[i])
      drawConnections()
      for (var j = 0; j < nodes.length; j++) drawNode(nodes[j])
      animationFrame = requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    })
    window.addEventListener('mouseleave', function () {
      mouse.active = false
    })

    initNodes()
    loop()

    window.addEventListener('beforeunload', function () {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    })
  }

  function closeNav() {
    var navLinks = document.getElementById('nav-links')
    var navToggle = document.getElementById('nav-toggle')
    if (!navLinks || !navToggle) return
    navLinks.classList.remove('is-open')
    navToggle.classList.remove('is-open')
    navToggle.setAttribute('aria-expanded', 'false')
  }

  function initSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href')
        if (id === '#') return
        var el = document.querySelector(id)
        if (!el) return

        e.preventDefault()
        el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
        closeNav()
      })
    })
  }

  function initNav() {
    var toggle = document.getElementById('nav-toggle')
    var links = document.getElementById('nav-links')
    if (!toggle || !links) return

    toggle.addEventListener('click', function () {
      var isOpen = !links.classList.contains('is-open')
      toggle.classList.toggle('is-open', isOpen)
      links.classList.toggle('is-open', isOpen)
      toggle.setAttribute('aria-expanded', String(isOpen))
    })

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav()
    })
  }

  function initFadeSections() {
    var sections = document.querySelectorAll('.fade-section')
    if (reduceMotion || !('IntersectionObserver' in window) || sections.length === 0) {
      sections.forEach(function (section) {
        section.classList.add('is-visible')
      })
      return
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    sections.forEach(function (section) {
      observer.observe(section)
    })
  }

  function initLanguage() {
    var defaultLang = 'ru'
    try {
      var stored = window.localStorage.getItem('lang')
      if (stored === 'en' || stored === 'ru') defaultLang = stored
    } catch (_) {}

    function applyLanguage(lang) {
      if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) return
      var map = window.TRANSLATIONS[lang]
      var nodes = document.querySelectorAll('[data-i18n]')

      nodes.forEach(function (node) {
        var key = node.getAttribute('data-i18n')
        if (map[key] != null) node.textContent = map[key]
      })

      var ruBtn = document.getElementById('lang-ru')
      var enBtn = document.getElementById('lang-en')
      if (ruBtn && enBtn) {
        ruBtn.classList.toggle('lang-active', lang === 'ru')
        enBtn.classList.toggle('lang-active', lang === 'en')
        ruBtn.setAttribute('aria-pressed', String(lang === 'ru'))
        enBtn.setAttribute('aria-pressed', String(lang === 'en'))
      }

      try {
        window.localStorage.setItem('lang', lang)
      } catch (_) {}
      document.documentElement.lang = lang
    }

    var ruBtn = document.getElementById('lang-ru')
    var enBtn = document.getElementById('lang-en')

    if (ruBtn) {
      ruBtn.addEventListener('click', function () {
        applyLanguage('ru')
      })
    }
    if (enBtn) {
      enBtn.addEventListener('click', function () {
        applyLanguage('en')
      })
    }

    applyLanguage(defaultLang)
  }

  if (!initVantaBackground()) initCanvasBackground()
  initSmoothScroll()
  initNav()
  initFadeSections()
  initLanguage()
})()
