(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var body = document.body;

  function setTheme(mode) {
    if (mode === 'light') {
      body.classList.add('theme-light');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('theme-light');
      localStorage.setItem('theme', 'dark');
    }
  }

  function initThemeToggle() {
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) {
      return;
    }
    var stored = localStorage.getItem('theme');
    if (stored === 'light') {
      body.classList.add('theme-light');
    }
    if (stored === 'dark') {
      body.classList.remove('theme-light');
    }
    if (!stored) {
      body.classList.add('theme-light');
    }
    toggle.addEventListener('click', function () {
      var isLight = body.classList.contains('theme-light');
      setTheme(isLight ? 'dark' : 'light');
    });
  }

  function initReveal() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('.modern-section'));
    if (!sections.length || prefersReduced) {
      sections.forEach(function (section) {
        section.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function applyTilt(target, maxTilt) {
    if (!target) {
      return;
    }

    function handleMove(event) {
      var rect = target.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;

      var rotateX = ((y - centerY) / centerY) * -maxTilt;
      var rotateY = ((x - centerX) / centerX) * maxTilt;
      target.style.transform = 'perspective(1400px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
    }

    function resetCard() {
      target.style.transform = '';
    }

    target.addEventListener('mousemove', handleMove);
    target.addEventListener('mouseleave', resetCard);
    target.addEventListener('touchstart', resetCard, { passive: true });
  }

  function initTilt() {
    if (prefersReduced) {
      return;
    }

    var cards = Array.prototype.slice.call(document.querySelectorAll('.modern-section:not(.hero-section):not(.no-tilt)'));
    var hero = document.querySelector('.hero-card');

    cards.forEach(function (card) {
      applyTilt(card, 0.8);
    });

    applyTilt(hero, 0.8);
  }

  initThemeToggle();
  initReveal();
  initTilt();
})();
