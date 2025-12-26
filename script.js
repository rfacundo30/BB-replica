// MENU MOBILE
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });

  // DROPDOWNS DESKTOP
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = btn.nextElementSibling;
      const isOpen = menu.classList.contains('block');

      // fecha todos
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
      if(!isOpen) menu.classList.remove('hidden');
    });
  });

  // fecha dropdown ao clicar fora
  window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
  });