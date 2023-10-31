document.addEventListener("DOMContentLoaded", () => {
  //arreglo con las 12 cartas
  const cardArray = [
    {
      name: "leaves",
      img: "./Img/leaves.png",
      matched: false,
    },
    {
      name: "leaves",
      img: "./Img/leaves.png",
      matched: false,
    },
    {
      name: "headphones",
      img: "./Img/headphones.png",
      matched: false,
    },
    {
      name: "headphones",
      img: "./Img/headphones.png",
      matched: false,
    },
    {
      name: "dices",
      img: "./Img/dices.png",
      matched: false,
    },
    {
      name: "dices",
      img: "./Img/dices.png",
      matched: false,
    },
    {
      name: "memory",
      img: "./Img/memory.png",
      matched: false,
    },
    {
      name: "memory",
      img: "./Img/memory.png",
      matched: false,
    },
    {
      name: "clock",
      img: "./Img/clock.png",
      matched: false,
    },
    {
      name: "clock",
      img: "./Img/clock.png",
      matched: false,
    },
    {
      name: "cherries",
      img: "./Img/cherries.png",
      matched: false,
    },
    {
      name: "cherries",
      img: "./Img/cherries.png",
      matched: false,
    }
  ];


const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let score = 0;
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// crear tablero
cardArray.sort(() => 0.5 - Math.random());

//console.log(cardArray); //probemos que las cartas esten randomized

function crearTablero() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "./Img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click",flipCard)
    grid.appendChild(card);
  }
}

crearTablero();

//dar vuelta la carta

function flipCard(card) {
  let cardID = this.getAttribute("data-id");
  if (card.matched) {
    return;
  }
  cardsChosen.push(cardArray[cardID].name);
  cardsChosenId.push(cardID);
  this.setAttribute("src", cardArray[cardID].img);
    if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

//chequear el match

function checkForMatch() {
  let cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("Encontraste un par!");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    scoreUpdate(+1);
    cards[optionOneId].setAttribute("src", "./Img/white.png");
    cards[optionTwoId].setAttribute("src", "./Img/white.png");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "./Img/blank.png");
    cards[optionTwoId].setAttribute("src", "./Img/blank.png");
    scoreUpdate(-1);
    alert("Intentalo otra vez!");
  }

  cardsChosen = [];
  cardsChosenId = [];
}

function scoreUpdate(points) {
  score = score + points;
  resultDisplay.textContent = "Puntaje: " + score;
}

});



