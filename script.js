
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // prevent default jump
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: 'smooth' });
    })
  });

  // Contact form popup
  const form = document.querySelector('.contact-container form');

  form.addEventListener('submit', e => {
    e.preventDefault(); // prevent actual form submit
    alert ('Thank you! Your message has been sent.');
    form.reset(); // optional: clear the form after popup
  });
  const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.right');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
