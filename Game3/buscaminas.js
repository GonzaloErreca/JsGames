//document.addEventListener("DOMContentLoaded", () => {

function generateGrid() {
  let mineGrid = [];
  for (let x = 0; x < 4; x++) {
    mineGrid.push([]);
    for (let y = 0; y < 4; y++) {
      mineGrid[x][y] = Math.floor(Math.random() * 3);
      if (mineGrid[x][y] === 1) {
        mineGrid[x][y] = "X";
      } else
      {
        mineGrid[x][y] = 0;
      }
    }
  }
  return mineGrid;
}

console.log(generateGrid());
console.log(addNumbers(generateGrid()));
//-------------------------

function addNumbers(arr) {
 
  const numRows = arr.length;
  const numColumns = arr[0].length;
 
   for (let x = 0; x < numRows; x++) {
    for (let y = 0; y < numColumns; y++) {
      //chequeamnos si tenemos que saltar a la proxima ubicacion
      if (arr[x][y] !== "X" && arr[x][y] !== undefined){
        let flag=0;
        //ahora si con dos for creamos todas las posibles posiciones que rodan la ubicacion y buscamos bombas
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const newX = x + dx;
            const newY = y + dy;

            //chequeamos que exista la posicion y la existencia de bombas y sumamos al contador flag(en la primera version eran muchos if pero no lidiaba bien con los undefined no se porque)
            if (newX >= 0 && newX < numRows && newY >= 0 && newY < numColumns) {
              if (arr[newX][newY] === "X") {
              flag++;  
              }
            }
          }
        } arr[x][y] =flag;
      }       
    } 
   }
   

   return arr;

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
    }

    


//   console.log(generateGrid());

//})
