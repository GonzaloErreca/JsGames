//document.addEventListener("DOMContentLoaded", () => {

function generateGrid() {
  let mineGrid = [];
  for (let x = 0; x < 4; x++) {
    mineGrid.push([])
    for (let y = 0; y < 4; y++) {
      mineGrid[x][y] = Math.floor(Math.random() * 3);
      if (mineGrid[x][y]=== 1) {
        mineGrid[x][y] = 'X';
      } else {
        mineGrid[x][y] = 0;
      }
    }

  }
  return mineGrid;
}


console.log(generateGrid());

//-------------------------



// function addNumbers(arr) {
   
//     for (let x = 0; x < 4; x++) {
      
//       for (let y = 0; y < 4; y++) {
//         if(arr[x][y]!=='X') {
//             if (arr[x][y]=== 1) {
//                 arr[x][y] = 'X';
//             } else if{
//               arr[x][y] = 0;
//             } else if{
//               arr[x][y] = 0;
//              }else if{
//                 arr[x][y] = 0;
//              }else if{
//                 arr[x][y] = 0;
//             }else if{
//                 arr[x][y] = 0;
//                }
        
//       }
  
//     }
//     return arr;
//   }
  
//   console.log(generateGrid());
  

//})
