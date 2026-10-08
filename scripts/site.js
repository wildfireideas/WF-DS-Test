// Mobile menu toggle
document.querySelectorAll('.site-header__toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const header = toggle.closest('.site-header');
    const open = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
});

// Contact form: validate in the browser, then show the thank-you page.
// Replace with a real submission endpoint before launch.
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (contactForm.reportValidity()) {
      window.location.href = contactForm.getAttribute('action');
    }
  });
}
