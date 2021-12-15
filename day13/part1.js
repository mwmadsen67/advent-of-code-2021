const fs = require('fs');
let codeInput = fs.readFileSync('day13/puzzleInput.txt', 'utf8').split('\n\n');
let coords = codeInput[0].split('\n').map(el => el.split(',').map(num => parseInt(num)));
let folds = codeInput[1].split('\n');
console.log(coords);
console.log(folds);

let firstFold = folds[0].split('=');
let foldDir = firstFold[0][firstFold[0].length - 1];
let foldCoord = parseInt(firstFold[1]);

for (let i = 0; i < coords.length; i++) {
  let [x,y] = coords[i];
  if (foldDir === 'x' && x > foldCoord) {
    x = x - ((x - foldCoord) * 2)
  } else if (foldDir === 'y' && y > foldCoord){
    y = y - ((y - foldCoord) * 2)
  }
  coords[i] = [x,y];
}

coords = [... new Set(coords.map(el => el.toString()))]
// console.log(coords)
console.log(coords.length)