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



//console.log(cardArray); //probemos que las cartas esten randomized
//================================================
//CREACION DEL TABLERO

function crearTablero() {
  cardArray.sort(() => 0.5 - Math.random());
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "./Img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click",flipCard)
    grid.appendChild(card);
  }
}

crearTablero();

//================================================================
//VOLTEAR LAS CARTAS

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
//================================================================
// MOSTRAR LAS CARTAS TEMPORALMENTE

function revealAllCards() {
  
  const cards = document.querySelectorAll("img");
  // Mostrar todas las cartas cambiando su atributo "src"
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.setAttribute("src", cardArray[index].img);
    }, index * 100); 
  });
  // Ocultar las cartas después de un período de tiempo
    setTimeout(() => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.setAttribute("src", "./Img/blank.png");
        }, index * 200);
      });
    }, 100); // Cambia el tiempo para ajustar la duración de ocultación
}

//=================================================================
//CHEQUEAR EL MATCH

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

//================================================================
// PUNTAJE

function scoreUpdate(points) {
  score = score + points;
  resultDisplay.textContent = "Puntaje: " + score;
}




//================================================================
//RESET

function resetGame() {
  // Eliminar todas las cartas del grid

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  crearTablero();
  score = 0; 
  scoreUpdate(0);
  revealAllCards() 
}

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", resetGame);


//================================================================
//INICIO DEL JUEGO

revealAllCards();


});