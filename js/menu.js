// Menú desplegable de tres barritas en celulares
const menuToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});
