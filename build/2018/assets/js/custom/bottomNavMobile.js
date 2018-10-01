const bottomNavMobile = function() {
  const menuDrawer = document.getElementById('nav-site');
  const body = document.body;

  const toggleMenu = function() {

    if (body.classList.contains('js__menu--open')) {
      body.classList.remove('js__menu--open');
      customViewHeight();
    } else {
      body.classList.add('js__menu--open');
      customViewHeight();
    }
  }

  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', toggleMenu);
}
bottomNavMobile();