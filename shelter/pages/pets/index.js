import pets from '../main/pets.json' assert {type: 'json'};

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
//*****

let petsJson = [
  {
    "name": "Jennifer",
    "img": 'url("../../assets/svg/pets-jennifer.svg")',
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": 'url("../../assets/svg/pets-sophia.svg")',
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": 'url("../../assets/svg/pets-woody.svg")',
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": 'url("../../assets/svg/pets-scarlet.svg")',
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": 'url("../../assets/svg/pets-katrine.svg")',
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": 'url("../../assets/svg/pets-timmy.svg")',
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": 'url("../../assets/svg/pets-freddie.svg")',
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": 'url("../../assets/svg/pets-charly.svg")',
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

let romdomArray = [];
function formationRomdomArray() {
  if (romdomArray.length<8) {
      let randomNum = Math.floor(Math.random() * 8);
      if (romdomArray.includes(randomNum)) {
          return formationRomdomArray()
      }
      else {romdomArray.push(randomNum);
          return formationRomdomArray()
      }
  }
}

let petsArray = [];    
function formationArray() {
  formationRomdomArray()
  if (petsArray.length<48){
      for (let i=0; i<8; i++) {
          petsArray.push(petsJson[romdomArray[i]])
      }
      romdomArray.splice(0, 8);
      return formationArray()
  }
}
formationArray();

const petsPhoto1 = document.querySelector('.pets-photo1');
const petsPhoto2 = document.querySelector('.pets-photo2');
const petsPhoto3 = document.querySelector('.pets-photo3');
const petsPhoto4 = document.querySelector('.pets-photo4');
const petsPhoto5 = document.querySelector('.pets-photo5');
const petsPhoto6 = document.querySelector('.pets-photo6');
const petsPhoto7 = document.querySelector('.pets-photo7');
const petsPhoto8 = document.querySelector('.pets-photo8');
const petsName1 = document.querySelector('.pets-name1');
const petsName2 = document.querySelector('.pets-name2');
const petsName3 = document.querySelector('.pets-name3');
const petsName4 = document.querySelector('.pets-name4');
const petsName5 = document.querySelector('.pets-name5');
const petsName6 = document.querySelector('.pets-name6');
const petsName7 = document.querySelector('.pets-name7');
const petsName8 = document.querySelector('.pets-name8');

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');

contentBlock();

function contentBlock() {
  petsPhoto1.style.background = petsArray[0]["img"];
  petsName1.textContent = petsArray[0]["name"];
  petsPhoto2.style.background = petsArray[1]["img"];
  petsName2.textContent = petsArray[1]["name"];
  petsPhoto3.style.background = petsArray[2]["img"];
  petsName3.textContent = petsArray[2]["name"];
  petsPhoto4.style.background = petsArray[3]["img"];
  petsName4.textContent = petsArray[3]["name"];
  petsPhoto5.style.background = petsArray[4]["img"];
  petsName5.textContent = petsArray[4]["name"];
  petsPhoto6.style.background = petsArray[5]["img"];
  petsName6.textContent = petsArray[5]["name"];
  petsPhoto7.style.background = petsArray[6]["img"];
  petsName7.textContent = petsArray[6]["name"];
  petsPhoto8.style.background = petsArray[7]["img"];
  petsName8.textContent = petsArray[7]["name"];
  button3.textContent = 1;
  button1.classList.remove('button-enabled');
  button4.classList.add('button-enabled');
  button5.classList.add('button-enabled');
  button2.classList.remove('button-enabled'); 
}


let width0 = window.matchMedia("(min-width: 1279px)");
let width = window.matchMedia("(min-width: 768px) and (max-width: 1279px)");
const width3 = window.matchMedia("(min-width: 320px) and (max-width: 768px)");
button4.addEventListener('click', nextPage);

function nextPage(event) {
if (width0.matches) {
  if(+(button3.textContent) < 6) {
      button3.textContent = +button3.textContent + 1;
      button1.classList.add('button-enabled');
      button2.classList.add('button-enabled');
  }    
  if (+(button3.textContent) === 2) {
      petsPhoto1.style.background = petsArray[8]["img"];
      petsName1.textContent = petsArray[8]["name"];
      petsPhoto2.style.background = petsArray[9]["img"];
      petsName2.textContent = petsArray[9]["name"];
      petsPhoto3.style.background = petsArray[10]["img"];
      petsName3.textContent = petsArray[10]["name"];
      petsPhoto4.style.background = petsArray[11]["img"];
      petsName4.textContent = petsArray[11]["name"];
      petsPhoto5.style.background = petsArray[12]["img"];
      petsName5.textContent = petsArray[12]["name"];
      petsPhoto6.style.background = petsArray[13]["img"];
      petsName6.textContent = petsArray[13]["name"];
      petsPhoto7.style.background = petsArray[14]["img"];
      petsName7.textContent = petsArray[14]["name"];
      petsPhoto8.style.background = petsArray[15]["img"];
      petsName8.textContent = petsArray[15]["name"];
  }
  else if (+(button3.textContent) === 3) {
      petsPhoto1.style.background = petsArray[16]["img"];
      petsName1.textContent = petsArray[16]["name"];
      petsPhoto2.style.background = petsArray[17]["img"];
      petsName2.textContent = petsArray[17]["name"];
      petsPhoto3.style.background = petsArray[18]["img"];
      petsName3.textContent = petsArray[18]["name"];
      petsPhoto4.style.background = petsArray[19]["img"];
      petsName4.textContent = petsArray[19]["name"];
      petsPhoto5.style.background = petsArray[20]["img"];
      petsName5.textContent = petsArray[20]["name"];
      petsPhoto6.style.background = petsArray[21]["img"];
      petsName6.textContent = petsArray[21]["name"];
      petsPhoto7.style.background = petsArray[22]["img"];
      petsName7.textContent = petsArray[22]["name"];
      petsPhoto8.style.background = petsArray[23]["img"];
      petsName8.textContent = petsArray[23]["name"];
  }
  else if (+(button3.textContent) === 4) {
      petsPhoto1.style.background = petsArray[24]["img"];
      petsName1.textContent = petsArray[24]["name"];
      petsPhoto2.style.background = petsArray[25]["img"];
      petsName2.textContent = petsArray[25]["name"];
      petsPhoto3.style.background = petsArray[26]["img"];
      petsName3.textContent = petsArray[26]["name"];
      petsPhoto4.style.background = petsArray[27]["img"];
      petsName4.textContent = petsArray[27]["name"];
      petsPhoto5.style.background = petsArray[28]["img"];
      petsName5.textContent = petsArray[28]["name"];
      petsPhoto6.style.background = petsArray[29]["img"];
      petsName6.textContent = petsArray[29]["name"];
      petsPhoto7.style.background = petsArray[30]["img"];
      petsName7.textContent = petsArray[30]["name"];
      petsPhoto8.style.background = petsArray[31]["img"];
      petsName8.textContent = petsArray[31]["name"];
  }
  else if (+(button3.textContent) === 5) {
      petsPhoto1.style.background = petsArray[32]["img"];
      petsName1.textContent = petsArray[32]["name"];
      petsPhoto2.style.background = petsArray[33]["img"];
      petsName2.textContent = petsArray[33]["name"];
      petsPhoto3.style.background = petsArray[34]["img"];
      petsName3.textContent = petsArray[34]["name"];
      petsPhoto4.style.background = petsArray[35]["img"];
      petsName4.textContent = petsArray[35]["name"];
      petsPhoto5.style.background = petsArray[36]["img"];
      petsName5.textContent = petsArray[36]["name"];
      petsPhoto6.style.background = petsArray[37]["img"];
      petsName6.textContent = petsArray[37]["name"];
      petsPhoto7.style.background = petsArray[38]["img"];
      petsName7.textContent = petsArray[38]["name"];
      petsPhoto8.style.background = petsArray[39]["img"];
      petsName8.textContent = petsArray[39]["name"];
  }
  else if (+(button3.textContent) === 6) {
      petsPhoto1.style.background = petsArray[40]["img"];
      petsName1.textContent = petsArray[40]["name"];
      petsPhoto2.style.background = petsArray[41]["img"];
      petsName2.textContent = petsArray[41]["name"];
      petsPhoto3.style.background = petsArray[42]["img"];
      petsName3.textContent = petsArray[42]["name"];
      petsPhoto4.style.background = petsArray[43]["img"];
      petsName4.textContent = petsArray[43]["name"];
      petsPhoto5.style.background = petsArray[44]["img"];
      petsName5.textContent = petsArray[44]["name"];
      petsPhoto6.style.background = petsArray[45]["img"];
      petsName6.textContent = petsArray[45]["name"];
      petsPhoto7.style.background = petsArray[46]["img"];
      petsName7.textContent = petsArray[46]["name"];
      petsPhoto8.style.background = petsArray[47]["img"];
      petsName8.textContent = petsArray[47]["name"];
      button5.classList.remove('button-enabled');
      button4.classList.remove('button-enabled');
  }
}
if (width.matches) {
  if(+(button3.textContent) < 8) {
    button3.textContent = +button3.textContent + 1;
    button1.classList.add('button-enabled');
    button2.classList.add('button-enabled');        
}    
if (+(button3.textContent) === 2) {
    petsPhoto1.style.background = petsArray[6]["img"];
    petsName1.textContent = petsArray[6]["name"];
    petsPhoto2.style.background = petsArray[7]["img"];
    petsName2.textContent = petsArray[7]["name"];
    petsPhoto3.style.background = petsArray[8]["img"];
    petsName3.textContent = petsArray[8]["name"];
    petsPhoto4.style.background = petsArray[9]["img"];
    petsName4.textContent = petsArray[9]["name"];
    petsPhoto5.style.background = petsArray[10]["img"];
    petsName5.textContent = petsArray[10]["name"];
    petsPhoto6.style.background = petsArray[11]["img"];
    petsName6.textContent = petsArray[11]["name"];
   
}
else if (+(button3.textContent) === 3) {
    petsPhoto1.style.background = petsArray[12]["img"];
    petsName1.textContent = petsArray[12]["name"];
    petsPhoto2.style.background = petsArray[13]["img"];
    petsName2.textContent = petsArray[13]["name"];
    petsPhoto3.style.background = petsArray[14]["img"];
    petsName3.textContent = petsArray[14]["name"];
    petsPhoto4.style.background = petsArray[15]["img"];
    petsName4.textContent = petsArray[15]["name"];
    petsPhoto5.style.background = petsArray[16]["img"];
    petsName5.textContent = petsArray[16]["name"];
    petsPhoto6.style.background = petsArray[17]["img"];
    petsName6.textContent = petsArray[17]["name"];
   
}
else if (+(button3.textContent) === 4) {
    petsPhoto1.style.background = petsArray[18]["img"];
    petsName1.textContent = petsArray[18]["name"];
    petsPhoto2.style.background = petsArray[19]["img"];
    petsName2.textContent = petsArray[19]["name"];
    petsPhoto3.style.background = petsArray[20]["img"];
    petsName3.textContent = petsArray[20]["name"];
    petsPhoto4.style.background = petsArray[21]["img"];
    petsName4.textContent = petsArray[21]["name"];
    petsPhoto5.style.background = petsArray[22]["img"];
    petsName5.textContent = petsArray[22]["name"];
    petsPhoto6.style.background = petsArray[23]["img"];
    petsName6.textContent = petsArray[23]["name"];
    
  
}
else if (+(button3.textContent) === 5) {
    petsPhoto1.style.background = petsArray[24]["img"];
    petsName1.textContent = petsArray[24]["name"];
    petsPhoto2.style.background = petsArray[25]["img"];
    petsName2.textContent = petsArray[25]["name"];
    petsPhoto3.style.background = petsArray[26]["img"];
    petsName3.textContent = petsArray[26]["name"];
    petsPhoto4.style.background = petsArray[27]["img"];
    petsName4.textContent = petsArray[27]["name"];
    petsPhoto5.style.background = petsArray[28]["img"];
    petsName5.textContent = petsArray[28]["name"];
    petsPhoto6.style.background = petsArray[29]["img"];
    petsName6.textContent = petsArray[29]["name"];
    
}
else if (+(button3.textContent) === 6) {
    petsPhoto1.style.background = petsArray[30]["img"];
    petsName1.textContent = petsArray[30]["name"];
    petsPhoto2.style.background = petsArray[31]["img"];
    petsName2.textContent = petsArray[31]["name"];
    petsPhoto3.style.background = petsArray[32]["img"];
    petsName3.textContent = petsArray[32]["name"];
    petsPhoto4.style.background = petsArray[33]["img"];
    petsName4.textContent = petsArray[33]["name"];
    petsPhoto5.style.background = petsArray[34]["img"];
    petsName5.textContent = petsArray[34]["name"];
    petsPhoto6.style.background = petsArray[35]["img"];
    petsName6.textContent = petsArray[35]["name"];
   
    
}
else if (+(button3.textContent) === 7) {
  petsPhoto1.style.background = petsArray[36]["img"];
  petsName1.textContent = petsArray[36]["name"];
  petsPhoto2.style.background = petsArray[37]["img"];
  petsName2.textContent = petsArray[37]["name"];
  petsPhoto3.style.background = petsArray[38]["img"];
  petsName3.textContent = petsArray[38]["name"];
  petsPhoto4.style.background = petsArray[39]["img"];
  petsName4.textContent = petsArray[39]["name"];
  petsPhoto5.style.background = petsArray[40]["img"];
  petsName5.textContent = petsArray[40]["name"];
  petsPhoto6.style.background = petsArray[41]["img"];
  petsName6.textContent = petsArray[41]["name"];
 

}
else if (+(button3.textContent) === 8) {
petsPhoto1.style.background = petsArray[42]["img"];
petsName1.textContent = petsArray[42]["name"];
petsPhoto2.style.background = petsArray[43]["img"];
petsName2.textContent = petsArray[43]["name"];
petsPhoto3.style.background = petsArray[44]["img"];
petsName3.textContent = petsArray[44]["name"];
petsPhoto4.style.background = petsArray[45]["img"];
petsName4.textContent = petsArray[45]["name"];
petsPhoto5.style.background = petsArray[46]["img"];
petsName5.textContent = petsArray[46]["name"];
petsPhoto6.style.background = petsArray[47]["img"];
petsName6.textContent = petsArray[47]["name"]; 
button5.classList.remove('button-enabled');
button4.classList.remove('button-enabled');
}
}
if (width3.matches) {
  if(+(button3.textContent) < 16) {
    button3.textContent = +button3.textContent + 1;
    button1.classList.add('button-enabled');
    button2.classList.add('button-enabled');        
}   
if (+(button3.textContent) === 2) {
    petsPhoto1.style.background = petsArray[3]["img"];
    petsName1.textContent = petsArray[3]["name"];
    petsPhoto2.style.background = petsArray[4]["img"];
    petsName2.textContent = petsArray[4]["name"];
    petsPhoto3.style.background = petsArray[5]["img"];
    petsName3.textContent = petsArray[5]["name"]; 
     }
if (+(button3.textContent) === 3) {
  petsPhoto1.style.background = petsArray[6]["img"];
  petsName1.textContent = petsArray[6]["name"];
  petsPhoto2.style.background = petsArray[7]["img"];
  petsName2.textContent = petsArray[7]["name"];
  petsPhoto3.style.background = petsArray[8]["img"];
  petsName3.textContent = petsArray[8]["name"];       
}
if (+(button3.textContent) === 4) {
petsPhoto1.style.background = petsArray[9]["img"];
petsName1.textContent = petsArray[9]["name"];
petsPhoto2.style.background = petsArray[10]["img"];
petsName2.textContent = petsArray[10]["name"];
petsPhoto3.style.background = petsArray[11]["img"];
petsName3.textContent = petsArray[11]["name"]; 
}
if (+(button3.textContent) === 5) {
petsPhoto1.style.background = petsArray[12]["img"];
petsName1.textContent = petsArray[12]["name"];
petsPhoto2.style.background = petsArray[13]["img"];
petsName2.textContent = petsArray[13]["name"];
petsPhoto3.style.background = petsArray[14]["img"];
petsName3.textContent = petsArray[14]["name"]; 
}
if (+(button3.textContent) === 6) {
petsPhoto1.style.background = petsArray[15]["img"];
petsName1.textContent = petsArray[15]["name"];
petsPhoto2.style.background = petsArray[16]["img"];
petsName2.textContent = petsArray[16]["name"];
petsPhoto3.style.background = petsArray[17]["img"];
petsName3.textContent = petsArray[17]["name"]; 
}
if (+(button3.textContent) === 7) {
petsPhoto1.style.background = petsArray[18]["img"];
petsName1.textContent = petsArray[18]["name"];
petsPhoto2.style.background = petsArray[19]["img"];
petsName2.textContent = petsArray[19]["name"];
petsPhoto3.style.background = petsArray[20]["img"];
petsName3.textContent = petsArray[20]["name"]; 
}
if (+(button3.textContent) === 8) {
petsPhoto1.style.background = petsArray[21]["img"];
petsName1.textContent = petsArray[21]["name"];
petsPhoto2.style.background = petsArray[22]["img"];
petsName2.textContent = petsArray[22]["name"];
petsPhoto3.style.background = petsArray[23]["img"];
petsName3.textContent = petsArray[23]["name"]; 
}
if (+(button3.textContent) === 9) {
petsPhoto1.style.background = petsArray[24]["img"];
petsName1.textContent = petsArray[24]["name"];
petsPhoto2.style.background = petsArray[25]["img"];
petsName2.textContent = petsArray[25]["name"];
petsPhoto3.style.background = petsArray[26]["img"];
petsName3.textContent = petsArray[26]["name"]; 
}
if (+(button3.textContent) === 10) {
petsPhoto1.style.background = petsArray[27]["img"];
petsName1.textContent = petsArray[27]["name"];
petsPhoto2.style.background = petsArray[28]["img"];
petsName2.textContent = petsArray[28]["name"];
petsPhoto3.style.background = petsArray[29]["img"];
petsName3.textContent = petsArray[29]["name"]; 
}
if (+(button3.textContent) === 11) {
petsPhoto1.style.background = petsArray[30]["img"];
petsName1.textContent = petsArray[30]["name"];
petsPhoto2.style.background = petsArray[31]["img"];
petsName2.textContent = petsArray[31]["name"];
petsPhoto3.style.background = petsArray[32]["img"];
petsName3.textContent = petsArray[32]["name"]; 
}
if (+(button3.textContent) === 12) {
petsPhoto1.style.background = petsArray[33]["img"];
petsName1.textContent = petsArray[33]["name"];
petsPhoto2.style.background = petsArray[34]["img"];
petsName2.textContent = petsArray[34]["name"];
petsPhoto3.style.background = petsArray[35]["img"];
petsName3.textContent = petsArray[35]["name"]; 
}
if (+(button3.textContent) === 13) {
petsPhoto1.style.background = petsArray[36]["img"];
petsName1.textContent = petsArray[36]["name"];
petsPhoto2.style.background = petsArray[37]["img"];
petsName2.textContent = petsArray[37]["name"];
petsPhoto3.style.background = petsArray[38]["img"];
petsName3.textContent = petsArray[38]["name"]; 
}
if (+(button3.textContent) === 14) {
petsPhoto1.style.background = petsArray[39]["img"];
petsName1.textContent = petsArray[39]["name"];
petsPhoto2.style.background = petsArray[40]["img"];
petsName2.textContent = petsArray[40]["name"];
petsPhoto3.style.background = petsArray[41]["img"];
petsName3.textContent = petsArray[41]["name"]; 
}
if (+(button3.textContent) === 15) {
petsPhoto1.style.background = petsArray[42]["img"];
petsName1.textContent = petsArray[42]["name"];
petsPhoto2.style.background = petsArray[43]["img"];
petsName2.textContent = petsArray[43]["name"];
petsPhoto3.style.background = petsArray[44]["img"];
petsName3.textContent = petsArray[44]["name"]; 
}
if (+(button3.textContent) === 16) {
petsPhoto1.style.background = petsArray[45]["img"];
petsName1.textContent = petsArray[45]["name"];
petsPhoto2.style.background = petsArray[46]["img"];
petsName2.textContent = petsArray[46]["name"];
petsPhoto3.style.background = petsArray[47]["img"];
petsName3.textContent = petsArray[47]["name"];
button5.classList.remove('button-enabled');
button4.classList.remove('button-enabled'); 
}
}
}

button2.addEventListener('click', backPage);

function backPage(event) {
if (width0.matches) { 
  if(+(button3.textContent) > 1) {
      button3.textContent = +button3.textContent - 1;
      button5.classList.add('button-enabled');
      button4.classList.add('button-enabled');
  }    
  if (+(button3.textContent) === 1) {
      petsPhoto1.style.background = petsArray[0]["img"];
      petsName1.textContent = petsArray[0]["name"];
      petsPhoto2.style.background = petsArray[1]["img"];
      petsName2.textContent = petsArray[1]["name"];
      petsPhoto3.style.background = petsArray[2]["img"];
      petsName3.textContent = petsArray[2]["name"];
      petsPhoto4.style.background = petsArray[3]["img"];
      petsName4.textContent = petsArray[3]["name"];
      petsPhoto5.style.background = petsArray[4]["img"];
      petsName5.textContent = petsArray[4]["name"];
      petsPhoto6.style.background = petsArray[5]["img"];
      petsName6.textContent = petsArray[5]["name"];
      petsPhoto7.style.background = petsArray[6]["img"];
      petsName7.textContent = petsArray[6]["name"];
      petsPhoto8.style.background = petsArray[7]["img"];
      petsName8.textContent = petsArray[7]["name"];
      button1.classList.remove('button-enabled')
      button2.classList.remove('button-enabled'); 
  }
  else if (+(button3.textContent) === 2) {
      petsPhoto1.style.background = petsArray[8]["img"];
      petsName1.textContent = petsArray[8]["name"];
      petsPhoto2.style.background = petsArray[9]["img"];
      petsName2.textContent = petsArray[9]["name"];
      petsPhoto3.style.background = petsArray[10]["img"];
      petsName3.textContent = petsArray[10]["name"];
      petsPhoto4.style.background = petsArray[11]["img"];
      petsName4.textContent = petsArray[11]["name"];
      petsPhoto5.style.background = petsArray[12]["img"];
      petsName5.textContent = petsArray[12]["name"];
      petsPhoto6.style.background = petsArray[13]["img"];
      petsName6.textContent = petsArray[13]["name"];
      petsPhoto7.style.background = petsArray[14]["img"];
      petsName7.textContent = petsArray[14]["name"];
      petsPhoto8.style.background = petsArray[15]["img"];
      petsName8.textContent = petsArray[15]["name"];
  }
  else if (+(button3.textContent) === 3) {
      petsPhoto1.style.background = petsArray[16]["img"];
      petsName1.textContent = petsArray[16]["name"];
      petsPhoto2.style.background = petsArray[17]["img"];
      petsName2.textContent = petsArray[17]["name"];
      petsPhoto3.style.background = petsArray[18]["img"];
      petsName3.textContent = petsArray[18]["name"];
      petsPhoto4.style.background = petsArray[19]["img"];
      petsName4.textContent = petsArray[19]["name"];
      petsPhoto5.style.background = petsArray[20]["img"];
      petsName5.textContent = petsArray[20]["name"];
      petsPhoto6.style.background = petsArray[21]["img"];
      petsName6.textContent = petsArray[21]["name"];
      petsPhoto7.style.background = petsArray[22]["img"];
      petsName7.textContent = petsArray[22]["name"];
      petsPhoto8.style.background = petsArray[23]["img"];
      petsName8.textContent = petsArray[23]["name"];
  }
  else if (+(button3.textContent) === 4) {
      petsPhoto1.style.background = petsArray[24]["img"];
      petsName1.textContent = petsArray[24]["name"];
      petsPhoto2.style.background = petsArray[25]["img"];
      petsName2.textContent = petsArray[25]["name"];
      petsPhoto3.style.background = petsArray[26]["img"];
      petsName3.textContent = petsArray[26]["name"];
      petsPhoto4.style.background = petsArray[27]["img"];
      petsName4.textContent = petsArray[27]["name"];
      petsPhoto5.style.background = petsArray[28]["img"];
      petsName5.textContent = petsArray[28]["name"];
      petsPhoto6.style.background = petsArray[29]["img"];
      petsName6.textContent = petsArray[29]["name"];
      petsPhoto7.style.background = petsArray[30]["img"];
      petsName7.textContent = petsArray[30]["name"];
      petsPhoto8.style.background = petsArray[31]["img"];
      petsName8.textContent = petsArray[31]["name"];
  }
  else if (+(button3.textContent) === 5) {
      petsPhoto1.style.background = petsArray[32]["img"];
      petsName1.textContent = petsArray[32]["name"];
      petsPhoto2.style.background = petsArray[33]["img"];
      petsName2.textContent = petsArray[33]["name"];
      petsPhoto3.style.background = petsArray[34]["img"];
      petsName3.textContent = petsArray[34]["name"];
      petsPhoto4.style.background = petsArray[35]["img"];
      petsName4.textContent = petsArray[35]["name"];
      petsPhoto5.style.background = petsArray[36]["img"];
      petsName5.textContent = petsArray[36]["name"];
      petsPhoto6.style.background = petsArray[37]["img"];
      petsName6.textContent = petsArray[37]["name"];
      petsPhoto7.style.background = petsArray[38]["img"];
      petsName7.textContent = petsArray[38]["name"];
      petsPhoto8.style.background = petsArray[39]["img"];
      petsName8.textContent = petsArray[39]["name"];
  }
}
if (width.matches) {if(+(button3.textContent) > 1) {
  button3.textContent = +button3.textContent - 1;
  button5.classList.add('button-enabled');
  button4.classList.add('button-enabled');
  }    
if (+(button3.textContent) === 1) {
  petsPhoto1.style.background = petsArray[0]["img"];
  petsName1.textContent = petsArray[0]["name"];
  petsPhoto2.style.background = petsArray[1]["img"];
  petsName2.textContent = petsArray[1]["name"];
  petsPhoto3.style.background = petsArray[2]["img"];
  petsName3.textContent = petsArray[2]["name"];
  petsPhoto4.style.background = petsArray[3]["img"];
  petsName4.textContent = petsArray[3]["name"];
  petsPhoto5.style.background = petsArray[4]["img"];
  petsName5.textContent = petsArray[4]["name"];
  petsPhoto6.style.background = petsArray[5]["img"];
  petsName6.textContent = petsArray[5]["name"];    
  button1.classList.remove('button-enabled')
  button2.classList.remove('button-enabled'); 
}
else if (+(button3.textContent) === 2) {
  petsPhoto1.style.background = petsArray[6]["img"];
  petsName1.textContent = petsArray[6]["name"];
  petsPhoto2.style.background = petsArray[7]["img"];
  petsName2.textContent = petsArray[7]["name"];
  petsPhoto3.style.background = petsArray[8]["img"];
  petsName3.textContent = petsArray[8]["name"];
  petsPhoto4.style.background = petsArray[9]["img"];
  petsName4.textContent = petsArray[9]["name"];
  petsPhoto5.style.background = petsArray[10]["img"];
  petsName5.textContent = petsArray[10]["name"];
  petsPhoto6.style.background = petsArray[11]["img"];
  petsName6.textContent = petsArray[11]["name"]; 
}
else if (+(button3.textContent) === 3) {
petsPhoto1.style.background = petsArray[12]["img"];
petsName1.textContent = petsArray[12]["name"];
petsPhoto2.style.background = petsArray[13]["img"];
petsName2.textContent = petsArray[13]["name"];
petsPhoto3.style.background = petsArray[14]["img"];
petsName3.textContent = petsArray[14]["name"];
petsPhoto4.style.background = petsArray[15]["img"];
petsName4.textContent = petsArray[15]["name"];
petsPhoto5.style.background = petsArray[16]["img"];
petsName5.textContent = petsArray[16]["name"];
petsPhoto6.style.background = petsArray[17]["img"];
petsName6.textContent = petsArray[17]["name"]; 
}
else if (+(button3.textContent) === 4) {
petsPhoto1.style.background = petsArray[18]["img"];
petsName1.textContent = petsArray[18]["name"];
petsPhoto2.style.background = petsArray[19]["img"];
petsName2.textContent = petsArray[19]["name"];
petsPhoto3.style.background = petsArray[20]["img"];
petsName3.textContent = petsArray[20]["name"];
petsPhoto4.style.background = petsArray[21]["img"];
petsName4.textContent = petsArray[21]["name"];
petsPhoto5.style.background = petsArray[22]["img"];
petsName5.textContent = petsArray[22]["name"];
petsPhoto6.style.background = petsArray[23]["img"];
petsName6.textContent = petsArray[23]["name"]; 
}
else if (+(button3.textContent) === 5) {
petsPhoto1.style.background = petsArray[24]["img"];
petsName1.textContent = petsArray[24]["name"];
petsPhoto2.style.background = petsArray[25]["img"];
petsName2.textContent = petsArray[25]["name"];
petsPhoto3.style.background = petsArray[26]["img"];
petsName3.textContent = petsArray[26]["name"];
petsPhoto4.style.background = petsArray[27]["img"];
petsName4.textContent = petsArray[27]["name"];
petsPhoto5.style.background = petsArray[28]["img"];
petsName5.textContent = petsArray[28]["name"];
petsPhoto6.style.background = petsArray[29]["img"];
petsName6.textContent = petsArray[29]["name"]; 
}
else if (+(button3.textContent) === 6) {
petsPhoto1.style.background = petsArray[30]["img"];
petsName1.textContent = petsArray[30]["name"];
petsPhoto2.style.background = petsArray[31]["img"];
petsName2.textContent = petsArray[31]["name"];
petsPhoto3.style.background = petsArray[32]["img"];
petsName3.textContent = petsArray[32]["name"];
petsPhoto4.style.background = petsArray[33]["img"];
petsName4.textContent = petsArray[33]["name"];
petsPhoto5.style.background = petsArray[34]["img"];
petsName5.textContent = petsArray[34]["name"];
petsPhoto6.style.background = petsArray[35]["img"];
petsName6.textContent = petsArray[35]["name"]; 
}
else if (+(button3.textContent) === 7) {
petsPhoto1.style.background = petsArray[36]["img"];
petsName1.textContent = petsArray[36]["name"];
petsPhoto2.style.background = petsArray[37]["img"];
petsName2.textContent = petsArray[37]["name"];
petsPhoto3.style.background = petsArray[38]["img"];
petsName3.textContent = petsArray[38]["name"];
petsPhoto4.style.background = petsArray[39]["img"];
petsName4.textContent = petsArray[39]["name"];
petsPhoto5.style.background = petsArray[40]["img"];
petsName5.textContent = petsArray[40]["name"];
petsPhoto6.style.background = petsArray[41]["img"];
petsName6.textContent = petsArray[41]["name"]; 
}
}
if (width3.matches) {
  if(+(button3.textContent) > 1) {
  button3.textContent = +button3.textContent - 1;
  button5.classList.add('button-enabled');
  button4.classList.add('button-enabled');
  }    
if (+(button3.textContent) === 1) {
  petsPhoto1.style.background = petsArray[0]["img"];
  petsName1.textContent = petsArray[0]["name"];
  petsPhoto2.style.background = petsArray[1]["img"];
  petsName2.textContent = petsArray[1]["name"];
  petsPhoto3.style.background = petsArray[2]["img"];
  petsName3.textContent = petsArray[2]["name"];        
  button1.classList.remove('button-enabled')
  button2.classList.remove('button-enabled'); 
}
if (+(button3.textContent) === 2) {
  petsPhoto1.style.background = petsArray[3]["img"];
  petsName1.textContent = petsArray[3]["name"];
  petsPhoto2.style.background = petsArray[4]["img"];
  petsName2.textContent = petsArray[4]["name"];
  petsPhoto3.style.background = petsArray[5]["img"];
  petsName3.textContent = petsArray[5]["name"];     
}
if (+(button3.textContent) === 3) {
  petsPhoto1.style.background = petsArray[6]["img"];
  petsName1.textContent = petsArray[6]["name"];
  petsPhoto2.style.background = petsArray[7]["img"];
  petsName2.textContent = petsArray[7]["name"];
  petsPhoto3.style.background = petsArray[8]["img"];
  petsName3.textContent = petsArray[8]["name"];     
}
if (+(button3.textContent) === 4) {
  petsPhoto1.style.background = petsArray[9]["img"];
  petsName1.textContent = petsArray[9]["name"];
  petsPhoto2.style.background = petsArray[10]["img"];
  petsName2.textContent = petsArray[10]["name"];
  petsPhoto3.style.background = petsArray[11]["img"];
  petsName3.textContent = petsArray[11]["name"];     
}
if (+(button3.textContent) === 5) {
  petsPhoto1.style.background = petsArray[12]["img"];
  petsName1.textContent = petsArray[12]["name"];
  petsPhoto2.style.background = petsArray[13]["img"];
  petsName2.textContent = petsArray[13]["name"];
  petsPhoto3.style.background = petsArray[14]["img"];
  petsName3.textContent = petsArray[14]["name"];     
}
if (+(button3.textContent) === 6) {
  petsPhoto1.style.background = petsArray[15]["img"];
  petsName1.textContent = petsArray[15]["name"];
  petsPhoto2.style.background = petsArray[16]["img"];
  petsName2.textContent = petsArray[16]["name"];
  petsPhoto3.style.background = petsArray[17]["img"];
  petsName3.textContent = petsArray[17]["name"];     
}
if (+(button3.textContent) === 7) {
  petsPhoto1.style.background = petsArray[18]["img"];
  petsName1.textContent = petsArray[18]["name"];
  petsPhoto2.style.background = petsArray[19]["img"];
  petsName2.textContent = petsArray[19]["name"];
  petsPhoto3.style.background = petsArray[20]["img"];
  petsName3.textContent = petsArray[20]["name"];     
}
if (+(button3.textContent) === 8) {
  petsPhoto1.style.background = petsArray[21]["img"];
  petsName1.textContent = petsArray[21]["name"];
  petsPhoto2.style.background = petsArray[22]["img"];
  petsName2.textContent = petsArray[22]["name"];
  petsPhoto3.style.background = petsArray[23]["img"];
  petsName3.textContent = petsArray[23]["name"];     
}
if (+(button3.textContent) === 9) {
  petsPhoto1.style.background = petsArray[24]["img"];
  petsName1.textContent = petsArray[24]["name"];
  petsPhoto2.style.background = petsArray[25]["img"];
  petsName2.textContent = petsArray[25]["name"];
  petsPhoto3.style.background = petsArray[26]["img"];
  petsName3.textContent = petsArray[26]["name"];     
}
if (+(button3.textContent) === 10) {
  petsPhoto1.style.background = petsArray[27]["img"];
  petsName1.textContent = petsArray[27]["name"];
  petsPhoto2.style.background = petsArray[28]["img"];
  petsName2.textContent = petsArray[28]["name"];
  petsPhoto3.style.background = petsArray[29]["img"];
  petsName3.textContent = petsArray[29]["name"];     
}
if (+(button3.textContent) === 11) {
  petsPhoto1.style.background = petsArray[30]["img"];
  petsName1.textContent = petsArray[30]["name"];
  petsPhoto2.style.background = petsArray[31]["img"];
  petsName2.textContent = petsArray[31]["name"];
  petsPhoto3.style.background = petsArray[32]["img"];
  petsName3.textContent = petsArray[32]["name"];     
}
if (+(button3.textContent) === 12) {
  petsPhoto1.style.background = petsArray[33]["img"];
  petsName1.textContent = petsArray[33]["name"];
  petsPhoto2.style.background = petsArray[34]["img"];
  petsName2.textContent = petsArray[34]["name"];
  petsPhoto3.style.background = petsArray[35]["img"];
  petsName3.textContent = petsArray[35]["name"];     
}
if (+(button3.textContent) === 13) {
  petsPhoto1.style.background = petsArray[36]["img"];
  petsName1.textContent = petsArray[36]["name"];
  petsPhoto2.style.background = petsArray[37]["img"];
  petsName2.textContent = petsArray[37]["name"];
  petsPhoto3.style.background = petsArray[38]["img"];
  petsName3.textContent = petsArray[38]["name"];     
}
if (+(button3.textContent) === 14) {
  petsPhoto1.style.background = petsArray[39]["img"];
  petsName1.textContent = petsArray[39]["name"];
  petsPhoto2.style.background = petsArray[40]["img"];
  petsName2.textContent = petsArray[40]["name"];
  petsPhoto3.style.background = petsArray[41]["img"];
  petsName3.textContent = petsArray[41]["name"];     
}
if (+(button3.textContent) === 15) {
  petsPhoto1.style.background = petsArray[42]["img"];
  petsName1.textContent = petsArray[42]["name"];
  petsPhoto2.style.background = petsArray[43]["img"];
  petsName2.textContent = petsArray[43]["name"];
  petsPhoto3.style.background = petsArray[44]["img"];
  petsName3.textContent = petsArray[44]["name"];     
}
}
}

button1.addEventListener('click', contentBlock);
button5.addEventListener('click', lastPage)

function lastPage(event) {
if (width0.matches) {
      petsPhoto1.style.background = petsArray[40]["img"];
      petsName1.textContent = petsArray[40]["name"];
      petsPhoto2.style.background = petsArray[41]["img"];
      petsName2.textContent = petsArray[41]["name"];
      petsPhoto3.style.background = petsArray[42]["img"];
      petsName3.textContent = petsArray[42]["name"];
      petsPhoto4.style.background = petsArray[43]["img"];
      petsName4.textContent = petsArray[43]["name"];
      petsPhoto5.style.background = petsArray[44]["img"];
      petsName5.textContent = petsArray[44]["name"];
      petsPhoto6.style.background = petsArray[45]["img"];
      petsName6.textContent = petsArray[45]["name"];
      petsPhoto7.style.background = petsArray[46]["img"];
      petsName7.textContent = petsArray[46]["name"];
      petsPhoto8.style.background = petsArray[47]["img"];
      petsName8.textContent = petsArray[47]["name"];
      button3.textContent = 6;
      button5.classList.remove('button-enabled');
      button4.classList.remove('button-enabled');
      button2.classList.add('button-enabled');
      button1.classList.add('button-enabled'); 
} 
if (width.matches) {
  petsPhoto1.style.background = petsArray[42]["img"];
  petsName1.textContent = petsArray[42]["name"];
  petsPhoto2.style.background = petsArray[43]["img"];
  petsName2.textContent = petsArray[43]["name"];
  petsPhoto3.style.background = petsArray[44]["img"];
  petsName3.textContent = petsArray[44]["name"];
  petsPhoto4.style.background = petsArray[45]["img"];
  petsName4.textContent = petsArray[45]["name"];
  petsPhoto5.style.background = petsArray[46]["img"];
  petsName5.textContent = petsArray[46]["name"];
  petsPhoto6.style.background = petsArray[47]["img"];
  petsName6.textContent = petsArray[47]["name"];  
  button3.textContent = 8;
  button5.classList.remove('button-enabled');
  button4.classList.remove('button-enabled');
  button2.classList.add('button-enabled');
  button1.classList.add('button-enabled'); 
} 
if (width3.matches) {
petsPhoto1.style.background = petsArray[45]["img"];
petsName1.textContent = petsArray[45]["name"];
petsPhoto2.style.background = petsArray[46]["img"];
petsName2.textContent = petsArray[46]["name"];
petsPhoto3.style.background = petsArray[47]["img"];
petsName3.textContent = petsArray[47]["name"];  
button3.textContent = 16;
button5.classList.remove('button-enabled');
button4.classList.remove('button-enabled');
button2.classList.add('button-enabled');
button1.classList.add('button-enabled'); 
} 
}

// const petsButton = document.querySelectorAll(".pets-button-items");
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
  // const parent = event.target.parentElement; 
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