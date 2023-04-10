//burger
const burgerWrap = document.querySelector('.burger-wrapper');
const menuBurger = document.querySelector('.menu-burger');
const menuItem = document.querySelectorAll('.menu-item');

function changeActiveBurger() {
  burgerWrap.classList.toggle('active');
  menuBurger.classList.toggle('active');
  document.body.classList.toggle('open-menu');
}

menuBurger.addEventListener('click', changeActiveBurger);
burgerWrap.addEventListener('click', (event) => {
  if(event.target === burgerWrap) {
    changeActiveBurger();
  }
});

menuItem.forEach((item) => {
  item.addEventListener('click', changeActiveBurger);
})
