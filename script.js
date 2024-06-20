const nav = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('scrolled'); 
  } else {
    nav.classList.remove('scrolled');
  }
});
