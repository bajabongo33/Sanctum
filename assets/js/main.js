/* ====================================================================
   Eldar Sanctum – main.js (starter)
   --------------------------------------------------------------------
   🚀 Tu dodawaj własną logikę front‑endową.
   Poniżej kilka przykładów (smooth‑scroll, kontakt przez Formspree,
   burger‑menu). Usuń lub rozwijaj według potrzeb.
   ==================================================================== */

/* --- Smooth scroll do sekcji kotwic --- */
const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
anchorLinks.forEach(link => {
  link.addEventListener('click', evt => {
    evt.preventDefault();
    const targetId = link.getAttribute('href');
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* --- Przyklad obsługi formularza (Formspree) --- */
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = new FormData(contactForm);
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        alert('✨ Dziękujemy za wiadomość!');
        contactForm.reset();
      } else {
        alert('Ups – coś poszło nie tak 🙈');
      }
    } catch (err) {
      console.error(err);
      alert('Błąd sieci. Spróbuj ponownie.');
    }
  });
}

/* --- Burger menu (ukryj/pokaż mobile‑nav) --- */
const burger = document.querySelector('#burger');
const mobileMenu = document.querySelector('#mobile-menu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}
