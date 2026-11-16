(()=>{const b=document.querySelector('.menu-toggle'),n=document.getElementById('primary-nav');if(b&&n){b.addEventListener('click',()=>{let o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));n.classList.toggle('is-open',!o)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');n.classList.remove('is-open')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){b.setAttribute('aria-expanded','false');n.classList.remove('is-open')}})}})();

/* Clara Stone Reader Club popup: site-wide MailerLite universal loader.
   The existing Reader Club embedded form already loads this on its page;
   do not inject it a second time. The active popup nUDWul is governed by
   MailerLite's trigger, visibility and frequency settings. */
(() => {
  if (typeof window.ml === 'function') return;

  (function (w, d, e, u, f, l, n) {
    w[f] = w[f] || function () {
      (w[f].q = w[f].q || []).push(arguments);
    };
    l = d.createElement(e);
    l.async = true;
    l.src = u;
    n = d.getElementsByTagName(e)[0];
    n.parentNode.insertBefore(l, n);
  })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');

  window.ml('account', '2674318');
})();
