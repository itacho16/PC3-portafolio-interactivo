window.addEventListener('load', function () {
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 1200);
});

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function setActiveNavLink(hash) {
  navLinks.forEach(function (link) {
    const isActive = link.getAttribute('href') === hash;
    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    setActiveNavLink(link.getAttribute('href'));
  });
});

setActiveNavLink(window.location.hash || '#inicio');
