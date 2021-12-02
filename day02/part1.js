const fs = require('fs');
let codeInput = fs.readFileSync('day02/puzzleInput.txt', 'utf8').split('\n').map(str => str.split(' '));

let x = 0;
let d = 0;

for (let i = 0; i < codeInput.length; i++) {
  let dir = codeInput[i][0];
  let num = parseInt(codeInput[i][1]);

  switch (dir) {
    case 'forward':
      x += num;
      break;
    case 'up':
      d -= num;
      break;
    case 'down':
      d += num;
      break;
  }
}

let final = x * d;

console.log(final);