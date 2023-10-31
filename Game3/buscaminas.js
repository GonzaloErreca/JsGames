//document.addEventListener("DOMContentLoaded", () => {
//ejecucion del juego (poner un do while para resetear??al ganar o perder?? o un while solo??


//const lost = false;

const emptyCell = 0;
const mineCell = "X";




//console.log(generateGrid());
const board = addNumbers(generateGrid());
console.log(board);
const revealed = createEmptyGrid(gridSize);
console.log(revealed);

//----------------------------------------------------------------
//generamos el tablero con el tamaño y la densidad pedida:

function generateGrid() {
  let mineGrid = [];
  for (let x = 0; x < gridSize; x++) {
    mineGrid.push([]);
    for (let y = 0; y < gridSize; y++) {
      mineGrid[x][y] = Math.floor(Math.random() * mineGridDensity);
      if (mineGrid[x][y] === 1) {
        mineGrid[x][y] = mineCell;
      } else {
        mineGrid[x][y] = emptyCell;
      }
    }
  }
  return mineGrid;
}

//----------------------------------------------------------------
// creamos un grid igual al que esta cargado pero con falses para ir mostrando las coordenadas que van ingresando

function createEmptyGrid(gridSize) {
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    grid.push(new Array(gridSize).fill(false));
  }
  return grid;
}

//-------------------------
//funcion para rellenar las celdas adyacentes a una mina

function addNumbers(board) {
  const numRows = board.length;
  const numColumns = board[0].length;

  for (let x = 0; x < numRows; x++) {
    for (let y = 0; y < numColumns; y++) {
      //chequeamnos si tenemos que saltar a la proxima ubicacion

      if (board[x][y] !== "X" && board[x][y] !== undefined) {
        let flag = 0;
        //ahora si con dos for creamos todas las posibles posiciones que rodan la ubicacion y buscamos bombas
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const newX = x + dx;
            const newY = y + dy;

            //chequeamos que exista la posicion y la existencia de bombas y sumamos al contador flag(en la primera version eran muchos if pero no lidiaba bien con los undefined no se porque)

            if (newX >= 0 && newX < numRows && newY >= 0 && newY < numColumns) {
              if (board[newX][newY] === "X") {
                flag++;
              }
            }
          }
        }
        board[x][y] = flag;
      }
    }
  }
  return board;
}


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
  if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
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
    // lost = true;
  } else {
    console.log("La posicion (" + x + ", " + y + ") contiene: " + cell);
  }

  if (winCondition()) {
    console.log("GANASTE!");
  }
}


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
// COMIENZO DEL JUEGO
//================================================================
console.log("BienvenidX al Buscaminas!");
console.log("Especifica las coordenadas de la celda que quieras revelar");

// Main game loop

let gridSize = Number(prompt("De que tamaño desea su mapa buscaminas?"));
do {
  mineGridDensity = Number(
    prompt("Indique la densidad de minas (2 para denso, 7 para poco denso):")
  );
} while (isNaN(mineGridDensity) || mineGridDensity < 2 || mineGridDensity > 7);

while (true) {
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
