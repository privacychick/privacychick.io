/* ============================================================
   Privacy Chick — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Mobile Navigation Toggle ──────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navDrawer = document.getElementById('navDrawer');

  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', function () {
      const isOpen = navDrawer.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close drawer when a link is clicked
    navDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navDrawer.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close drawer on outside click
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navDrawer.contains(e.target)) {
        navDrawer.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Tab Switching ─────────────────────────────────────────
  // Tab switching — works for all .tabs-nav on the page
  document.querySelectorAll('.tabs-nav').forEach(function (nav) {
    const buttons = nav.querySelectorAll('.tab-btn');
    const wrapper = nav.closest('.tabs-wrapper') || nav.parentElement;
    const panels  = wrapper ? wrapper.querySelectorAll('.tab-panel') : [];
    buttons.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  });

  // ── Active Nav Link Highlighting ─────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || href === './' + currentPath) {
      link.classList.add('active');
    }
  });

  // ── Dynamic Copyright Year ─────────────────────────────
  const yrEl = document.getElementById('yr');
  if (yrEl) yrEl.textContent = new Date().getFullYear();

  // ── Smooth scroll for in-page anchor links ────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const offset = 140; // account for sticky header + page nav
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

});
