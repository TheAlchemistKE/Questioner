const menu = document.querySelector('.navlinks');
const menuToggle = document.querySelector('#menu');

// Toggling display on click of the menu button.
menuToggle.addEventListener('click', (e) => {
  e.preventDefault();

  // Checking the style state.
  if (window.getComputedStyle(menu).display === 'block') {
    menu.style.display = 'none';
  } else if (window.getComputedStyle(menu).display === 'flex') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'block'; 
  }

});