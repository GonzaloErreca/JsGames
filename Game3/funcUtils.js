const emptyCell = 0;
const mineCell = "X";
var continuar = true;


//----------------------------------------------------------------
//generamos el tablero con el tamaño y la densidad pedida:

export function generateGrid() {
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

export function createEmptyGrid(gridSize) {
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    grid.push(new Array(gridSize).fill(false));
  }
  return grid;
}

//-------------------------
//funcion para rellenar las celdas adyacentes a una mina

export function addNumbers(board) {
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
