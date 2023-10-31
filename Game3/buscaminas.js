//document.addEventListener("DOMContentLoaded", () => {
//ejecucion del juego (poner un do while para resetear??al ganar o perder?? o un while solo??


//const lost = false;

import{generateGrid, createEmptyGrid, addNumbers, } from './funcUtils.js'



// ----------------------------------------------------------------
// Function to print the current state of the board. necesite bastante ayuda para esto
function printBoard() {
  for (let i = 0; i < gridSize; i++) {
    let row = '';
    for (let j = 0; j < gridSize; j++) {
      if (revealed[i][j]) {
        row += board[i][j] + ' ';
      } else {
        row += '- ';
      }
    }
    console.log(row);
  }
}



//----------------------------------------------------------------
//funcion para pedir y ver la celda, tambien comprueba si ganaste

function showCell(x, y) {
  if (x < 0 || x >= gridSize || y < 0 || y >= gridSize||isNaN(x) || isNaN(y)) {
    console.log("no existe la posicion");
    return;
  }
  if (revealed[x][y]) {
    console.log("Esta celda ya fue revelada");
    return;
  }
  revealed[x][y] = true;

  const cell = board[x][y];
  if (cell === mineCell) {
    console.log("PERDISTE! Encontraste una mina!");
    continuar =false;
    alert("PERDISTE!, ENCONTRASTE UNA MINA!")
    revelarBoard();
  } else {
    console.log("La posicion (" + x + ", " + y + ") contiene: " + cell);
  }

  if (winCondition()) {
    console.log("GANASTE!");
    alert(
      "HAS GANADO EL JUEGO!")
    winResponse();
  }
}

//================================================================
// CONDICION DE TRIUNFO

function winCondition() {
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      if (board[x][y] !== mineCell && !revealed[x][y]) {
        return false;
      }
    }
  }
  return true;
}

//================================================================
//OPCIONES AL GANAR
function winResponse() {
  revelarBoard();

  let playAgain = prompt("Jugamos de nuevo? (Y/N)").toLowerCase();
  if (playAgain === "y") {
    resetGame();
  } else {
    console.log("Gracias por jugar!");
    
  }
}

//================================================================
//RESETEAR EL JUEGO
function resetGame() {
}


//================================================================
//REVELAR EL TABLERO
function revelarBoard() {
  console.log("El tablero era:");
  for (let i = 0; i < gridSize; i++) {
    let row = "";
    for (let j = 0; j < gridSize; j++) {
      row += board[i][j] + " ";
    }
    console.log(row);
  }
}


//================================================================
// COMIENZO DEL JUEGO
//================================================================

console.log("BienvenidX al Buscaminas!");
console.log("Especifica las coordenadas de la celda que quieras revelar");

// Main game loop

let gridSize = Number(prompt("De que tamaño desea su mapa buscaminas?"));
let mineGridDensity;
do {
  mineGridDensity = Number(
    prompt("Indique la densidad de minas (2 para denso, 7 para poco denso):")
  );
} while (isNaN(mineGridDensity) || mineGridDensity < 2 || mineGridDensity > 7);

const board = addNumbers(generateGrid());
//console.log(board);
const revealed = createEmptyGrid(gridSize);
//console.log(revealed);

while (continuar) {
  printBoard();
  const input = prompt("Ingrese las coordenadas de la celda(fila, columna):").split(",");
  const x = parseInt(input[0]);
  const y = parseInt(input[1]);
  showCell(x, y);
}














// if (arr[x][y] !== "X") {
//   if (arr[x][y - 1] === "X"&& arr[x - 1][y - 1] !== undefined) {
//     arr[x][y] += 1;
//   }
//   if (arr[x - 1][y - 1] === "X" && arr[x - 1][y - 1] !== undefined) {
//     arr[x][y] += 1;
//   }
//   if (arr[x - 1][y] === "X" && arr[x - 1][y] !== undefined) {
//     arr[x][y] += 1;
//   }
//   if (arr[x - 1][y + 1] === "X" && arr[x - 1][y + 1] !== undefined) {
//     arr[x][y] += 1;
//   }
//   if (arr[x - 1][y + 1] === "X" && arr[x - 1][y + 1] !== undefined) {
//     arr[x][y] += 1;
//   }
//   if (arr[x][y + 1] === "X" && arr[x][y + 1] !== undefined) {
//     arr[x][y] += 1;
//   }
//   if (arr[x + 1][y + 1] === "X" && arr[x + 1][y + 1] !== undefined) {
//     arr[x][y] += 1;
//   }
//   if (arr[x + 1][y] === "X" && arr[x + 1][y] !== undefined) {
//     arr[x][y] += 1;
//   }
//   if (arr[x + 1][y - 1] === "X" && arr[x + 1][y - 1] !== undefined) {
//     arr[x][y] += 1;
//   }
// }
