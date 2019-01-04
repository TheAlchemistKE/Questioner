const menu = document.querySelector('.navlinks');
const menuToggle = document.querySelector('#menu');

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();

  if (window.getComputedStyle(menu).display === 'block') {
    menu.style.display = 'none';
  } else if (window.getComputedStyle(menu).display === 'flex') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'block'; 
  }

});