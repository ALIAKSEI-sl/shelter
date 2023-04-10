import pets from './pets.json' assert {type: 'json'};

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


const petsItem = document.querySelectorAll('.pets-item');

function createNextCard() {
  currentCard = [...nextCard];
  nextCard = [];

  while(nextCard.length < 3) {
    const random = Math.floor(Math.random() * 8);
    if(!currentCard.includes(random) && !nextCard.includes(random)) {
      nextCard.push(random)
    }
  }
  
}


const set = new Set();
let currentCard = [];
let nextCard = []; // стал текущим
function initializationCard() {
  if(set.size === 6) {
    const card = [...set]
    card.forEach((elem, index) => {
      if(index < 3) {
        currentCard.push(elem);
      } else {
        nextCard.push(elem);
      }
    })
  } else {
    set.add(Math.floor(Math.random() * 8));
    initializationCard();
  }
}
initializationCard()

petsItem.forEach((item, index) => {
  if (index === 0 || index === 2) {
    for(let i= 0; i < 3; i++) {
      const card = item.children[i];
      card.innerHTML = `
      <div class="pets-photo"></div>
      <p class="pets-name"></p>
      <button class="pets-button-items">Learn more</button>
      `
      const photo = card.querySelector('.pets-photo');
      const name = card.querySelector('.pets-name');
      photo.style.background = `url(${pets[[nextCard[i]]].img})`;
      name.textContent = `${pets[[nextCard[i]]].name}`;
    }

  } else {
    for(let i= 0; i < 3; i++) {
      const card = item.children[i];
      card.innerHTML = `
      <div class="pets-photo"></div>
      <p class="pets-name"></p>
      <button class="pets-button-items">Learn more</button>
      `
      const photo = card.querySelector('.pets-photo');
      const name = card.querySelector('.pets-name');
      photo.style.background = `url(${pets[[currentCard[i]]].img})`;
      name.textContent = `${pets[[currentCard[i]]].name}`;
    }
  }

})

const BTN_LEFT = document.querySelector(".button-left");
const BTN_RIGHT = document.querySelector(".button-right");
const CAROUSEL = document.querySelector(".carousel");
const ITEM_LEFT = document.querySelector("#block-card-left");
const ITEM_RIGHT = document.querySelector("#block-card-right");



const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);



CAROUSEL.addEventListener("animationend", (animationEvent) => {


  const ITEM_ACTIVE_HTML = document.querySelector("#block-card-active").innerHTML

  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#block-card-active").innerHTML = ITEM_LEFT.innerHTML;
    ITEM_RIGHT.innerHTML = ITEM_ACTIVE_HTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#block-card-active").innerHTML = ITEM_RIGHT.innerHTML;
    ITEM_LEFT.innerHTML = ITEM_ACTIVE_HTML;
  }
 
  createNextCard();
  console.log(nextCard)
  for (let i = 0; i < 3; i++) {
    const card = changedItem.children[i];

    const photo = card.querySelector('.pets-photo')
    const name = card.querySelector('.pets-name');
    photo.style.background = `url(${pets[[nextCard[i]]].img})`;
    name.textContent = `${pets[[nextCard[i]]].name}`;

  }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})