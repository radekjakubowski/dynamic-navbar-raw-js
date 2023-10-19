const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'));
const navbarElement = document.getElementById('navbar');
let isHidden = false;

window.addEventListener('wheel', (e) => {
  if (window.scrollY > navbarHeight) {
    hideOnNavbarExceeding();
  }

  if (window.scrollY > navbarHeight && e.deltaY < 0 && isHidden) {
    showOnScrollUp();
  }
});

const hideOnNavbarExceeding = () => {
  navbarElement.classList.add('navbar__hidden');
  isHidden = true;
}

const showOnScrollUp = () => {
  navbarElement.classList.remove('navbar__hidden');
  isHidden = false;
}