;(function () {
  'use strict'

  // --- Canvas network background (nodes + connections) ---
  var canvas = document.getElementById('particle-canvas')
  if (!canvas) return
  var ctx = canvas.getContext('2d')

  var width = window.innerWidth
  var height = window.innerHeight
  canvas.width = width
  canvas.height = height

  var NODE_COUNT = Math.min(140, Math.floor((width * height) / 18000))
  var MAX_DISTANCE = 150
  var MOUSE_RADIUS = 160

  var nodes = []
  var mouse = { x: null, y: null, active: false }

  function createNode() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: 1 + Math.random() * 1.6,
      depth: 0.3 + Math.random() * 0.7
    }
  }

  function initNodes() {
    nodes = []
    for (var i = 0; i < NODE_COUNT; i++) {
      nodes.push(createNode())
    }
  }

  function resize() {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
    initNodes()
  }

  window.addEventListener('resize', function () {
    resize()
  })

  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
    mouse.active = true
  })

  window.addEventListener('mouseleave', function () {
    mouse.active = false
  })

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
        node.x += (dx / dist) * force * 2.2
        node.y += (dy / dist) * force * 2.2
      }
    }
  }

  function drawNode(node) {
    var alpha = 0.15 + node.depth * 0.35
    ctx.beginPath()
    ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(34,197,94,' + alpha.toFixed(3) + ')'
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
          var alpha = 0.02 + (1 - dist / MAX_DISTANCE) * 0.12
          ctx.strokeStyle = 'rgba(34,197,94,' + alpha.toFixed(3) + ')'
          ctx.lineWidth = 0.6
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
    for (var i = 0; i < nodes.length; i++) {
      updateNode(nodes[i])
    }
    drawConnections()
    for (var j = 0; j < nodes.length; j++) {
      drawNode(nodes[j])
    }
    requestAnimationFrame(loop)
  }

  initNodes()
  loop()

  // --- Smooth scroll for anchor links ---
  function initSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href')
        if (id === '#') return
        var el = document.querySelector(id)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          var navLinks = document.getElementById('nav-links')
          var navToggle = document.getElementById('nav-toggle')
          if (navLinks && navToggle) {
            navLinks.classList.remove('is-open')
            navToggle.classList.remove('is-open')
          }
        }
      })
    })
  }

  // --- Mobile nav toggle ---
  function initNav() {
    var toggle = document.getElementById('nav-toggle')
    var links = document.getElementById('nav-links')
    if (!toggle || !links) return

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-open')
      links.classList.toggle('is-open')
    })
  }

  // --- Fade-up sections with IntersectionObserver ---
  function initFadeSections() {
    var sections = document.querySelectorAll('.fade-section')
    if (!('IntersectionObserver' in window) || sections.length === 0) {
      sections.forEach(function (s) {
        s.classList.add('is-visible')
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
    sections.forEach(function (s) {
      observer.observe(s)
    })
  }

  // --- Language switching (RU / EN) ---
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
        if (map[key] != null) {
          node.textContent = map[key]
        }
      })

      var ruBtn = document.getElementById('lang-ru')
      var enBtn = document.getElementById('lang-en')
      if (ruBtn && enBtn) {
        ruBtn.classList.toggle('lang-active', lang === 'ru')
        enBtn.classList.toggle('lang-active', lang === 'en')
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

  // --- Init ---
  initSmoothScroll()
  initNav()
  initFadeSections()
  initLanguage()
})()
