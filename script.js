  const menuOPen = document.getElementById('menu-open');
  const menuClose = document.getElementById('menu-close');
  const sidebar = document.querySelector('.container .sidebar');

  menuOPen.addEventListener('click', () => sidebar.style.left ='0');

  menuClose.addEventListener('click', () => sidebar.style.left = '-100%');