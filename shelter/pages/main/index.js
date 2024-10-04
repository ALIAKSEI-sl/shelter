const pets = await fetch('./pets.json').then((res) => res.json());

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
  if (event.target === burgerWrap) {
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

  while (nextCard.length < 3) {
    const random = Math.floor(Math.random() * 8);
    if (!currentCard.includes(random) && !nextCard.includes(random)) {
      nextCard.push(random)
    }
  }

}


const set = new Set();
let currentCard = [];
let nextCard = []; // стал текущим
function initializationCard() {
  if (set.size === 6) {
    const card = [...set]
    card.forEach((elem, index) => {
      if (index < 3) {
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
    for (let i = 0; i < 3; i++) {
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
    for (let i = 0; i < 3; i++) {
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

  let nextCardItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    nextCardItem = ITEM_LEFT;
    document.querySelector("#block-card-active").innerHTML = ITEM_LEFT.innerHTML;
    ITEM_RIGHT.innerHTML = ITEM_ACTIVE_HTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    nextCardItem = ITEM_RIGHT;
    document.querySelector("#block-card-active").innerHTML = ITEM_RIGHT.innerHTML;
    ITEM_LEFT.innerHTML = ITEM_ACTIVE_HTML;
  }

  createNextCard();

  for (let i = 0; i < 3; i++) {
    const card = nextCardItem.children[i];

    const photo = card.querySelector('.pets-photo')
    const name = card.querySelector('.pets-name');

    photo.style.background = `url(${pets[[nextCard[i]]].img})`;
    name.textContent = `${pets[[nextCard[i]]].name}`;
  }

  const petsCard = document.querySelectorAll(".pets-items");
  petsCard.forEach((card => card.addEventListener('click', openPopup)))
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})

const popupWrap = document.querySelector(".popup-wrap");
const popupBtt = document.querySelector(".popup-btt");
const popupBlock = document.querySelector(".popup-block");
const popupImg = document.querySelector(".popup-img");
const popupName = document.querySelector(".popup-name");
const popupBreed = document.querySelector(".popup-breed");
const popupDescription = document.querySelector(".popup-description");
const popupList = document.querySelector(".popup-list");
const petsCard = document.querySelectorAll(".pets-items");

petsCard.forEach((card => card.addEventListener('click', openPopup)))

function openPopup(event) {
  const name = event.currentTarget.querySelector(".pets-name").textContent;
  const info = pets.find((item) => {
    return item.name === name;
  })
  popupImg.style.backgroundImage = `url(${info.img})`;
  popupName.textContent = info.name;
  popupBreed.textContent = `${info.type} - ${info.breed}`;
  popupDescription.textContent = info.description;
  popupList.children[0].innerHTML = `<span>Age:</span> ${info.age}`
  popupList.children[1].innerHTML = `<span>Inoculations:</span> ${info.inoculations.join(', ')}`
  popupList.children[2].innerHTML = `<span>Diseases:</span> ${info.diseases.join(', ')}</span>`
  popupList.children[3].innerHTML = `<span>Parasites:</span> ${info.parasites.join(', ')}`

  popupWrap.classList.add('active');
  document.body.classList.toggle('open-menu');
}

function closePopup() {
  popupWrap.classList.remove('active');
  document.body.classList.toggle('open-menu');
}


popupBtt.addEventListener('click', closePopup);
popupWrap.addEventListener('click', (event) => {
  if (event.target === popupWrap || event.target === popupBlock) {
    closePopup();
  }
});