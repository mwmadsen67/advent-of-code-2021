const fs = require('fs');
let codeInput = fs.readFileSync('day13/puzzleInput.txt', 'utf8').split('\n\n');
let coords = codeInput[0].split('\n').map(el => el.split(',').map(num => parseInt(num)));
let folds = codeInput[1].split('\n');
console.log(coords);
console.log(folds);

let lastX, lastY;

for (let f = 0; f < folds.length; f++) {
  let fold = folds[f].split('=');
  let foldDir = fold[0][fold[0].length - 1];
  let foldCoord = parseInt(fold[1]);

  if (foldDir === 'x') {
    lastX = foldCoord;
  } else {
    lastY = foldCoord;
  }

  for (let i = 0; i < coords.length; i++) {
    let [x,y] = coords[i];
    if (foldDir === 'x' && x > foldCoord) {
      x = x - ((x - foldCoord) * 2)
    } else if (foldDir === 'y' && y > foldCoord){
      y = y - ((y - foldCoord) * 2)
    }
    coords[i] = [x,y];
  }
}


coords = [... new Set(coords.map(el => el.toString()))]
// console.log(coords)
console.log(lastX, lastY)

let map = [];

for (let i = 0; i < lastY; i++) {
  map.push([]);
  for (let j = 0; j < lastX; j++) {
    if (coords.includes([j,i].toString())) {
      map[i].push('#');
    } else {
      map[i].push('.')
    }
  }
}

console.log(map.map(row => row.toString()))