const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'));
const navbarElement = document.getElementById('navbar');
let oldScrollPos = 0;
let isHidden = false;

window.addEventListener('scroll', (e) => {
  if (window.scrollY > navbarHeight) {
    hideOnNavbarExceeding();
  }

  if (window.scrollY > navbarHeight && oldScrollPos > window.scrollY && isHidden) {
    showOnScrollUp();
  }

  oldScrollPos = window.scrollY;
});

const hideOnNavbarExceeding = () => {
  navbarElement.setAttribute('hide', '');
  isHidden = true;
}

const showOnScrollUp = () => {
  navbarElement.removeAttribute('hide');
  isHidden = false;
}