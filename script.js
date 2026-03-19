  /* Hamburger */
  const ham = document.getElementById('ham');
  const menu = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.mob-link').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* Scroll reveal */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.bar-fill').forEach(b => {
            b.style.width = b.dataset.w + '%';
          });
        }, i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* Nav shadow on scroll */
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.boxShadow = window.scrollY > 50
      ? '0 4px 32px rgba(124,58,237,0.12)'
      : '0 2px 20px rgba(124,58,237,0.07)';
  });