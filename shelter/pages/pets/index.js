const pets = await fetch('../main/pets.json').then((res) => res.json())

const burgerWrap = document.querySelector('.burger-wrapper');
const menuBurger = document.querySelector('.menu-burger');
const menuItem = document.querySelectorAll('.menu-item');
const popupWrap = document.querySelector('.popup-wrap');
const popupBtt = document.querySelector('.popup-btt');
const popupBlock = document.querySelector('.popup-block');
const popupImg = document.querySelector('.popup-img');
const popupName = document.querySelector('.popup-name');
const popupBreed = document.querySelector('.popup-breed');
const popupDescription = document.querySelector('.popup-description');
const popupList = document.querySelector('.popup-list');
const petsCard = document.querySelectorAll('.pets-items');
const firstPage = document.querySelector('.button1');
const previousPage = document.querySelector('.button2');
const currentPage = document.querySelector('.button3');
const nextPage = document.querySelector('.button4');
const lastPage = document.querySelector('.button5');
const desktopWidth = 1280;
const tabletWidth = 768;
let page = 1;

//burger
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
});

//pagination

const petsArray = getPetsArray();
changePetsCard();

function getPetsArray() {
  const indexes = [0, 1, 2, 3, 4, 5, 6, 7];
  const array = [];
  for (let i = 0; i < 6; i++) {
    indexes.sort(() => Math.random() - 0.5);
    array.push(...indexes);
  }
  return array;
}

firstPage.addEventListener('click', () => {
  page = 1;
  changePageButtons();
  changePetsCard();
});

lastPage.addEventListener('click', () => {
  page = getMaxPage();
  changePageButtons(page);
  changePetsCard(page);
});

nextPage.addEventListener('click', () => {
  const maxPage = getMaxPage();
  if (page < maxPage) {
    page++;
    changePageButtons(maxPage);
    changePetsCard(maxPage);
  }
});

previousPage.addEventListener('click', () => {
  if (page > 1) {
    page--;
    changePageButtons();
    changePetsCard();
  }
});

function changePetsCard(max) {
  const mapPage = max ?? getMaxPage();
  const limit = petsArray.length / mapPage;
  for (let i = 0; i < limit; i++) {
    const card = petsCard[i];
    const index = petsArray[(page - 1) * limit + i];
    card.querySelector(
      '.pets-photo',
    ).style.background = `url(${pets[index].img})`;
    card.querySelector('.pets-name').textContent = pets[index].name;
  }
}

function changePageButtons(max) {
  const mapPage = max ?? getMaxPage();
  currentPage.textContent = String(page);
  if (page === 1) {
    firstPage.disabled = true;
    previousPage.disabled = true;
    nextPage.disabled = false;
    lastPage.disabled = false;
  } else if (page === mapPage) {
    firstPage.disabled = false;
    previousPage.disabled = false;
    nextPage.disabled = true;
    lastPage.disabled = true;
  } else {
    firstPage.disabled = false;
    previousPage.disabled = false;
    nextPage.disabled = false;
    lastPage.disabled = false;
  }
}

function getMaxPage() {
  const width = window.innerWidth;
  if (width >= desktopWidth) {
    return 6;
  } else if (width >= tabletWidth) {
    return 8;
  } else {
    return 16;
  }
}

//PopUp

petsCard.forEach((card) => card.addEventListener('click', openPopup));

function openPopup(event) {
  const name = event.currentTarget.querySelector('.pets-name').textContent;
  const info = pets.find((item) => {
    return item.name === name;
  });
  popupImg.style.backgroundImage = `url(${info.img})`;
  popupName.textContent = info.name;
  popupBreed.textContent = `${info.type} - ${info.breed}`;
  popupDescription.textContent = info.description;
  popupList.children[0].innerHTML = `<span>Age:</span> ${info.age}`;
  popupList.children[1].innerHTML = `<span>Inoculations:</span> ${info.inoculations.join(
    ', ',
  )}`;
  popupList.children[2].innerHTML = `<span>Diseases:</span> ${info.diseases.join(
    ', ',
  )}</span>`;
  popupList.children[3].innerHTML = `<span>Parasites:</span> ${info.parasites.join(
    ', ',
  )}`;

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
