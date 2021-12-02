const fs = require('fs');
let codeInput = fs.readFileSync('day02/puzzleInput.txt', 'utf8').split('\n').map(str => str.split(' '));

let x = 0;
let d = 0;
let aim = 0;

for (let i = 0; i < codeInput.length; i++) {
  let dir = codeInput[i][0];
  let num = parseInt(codeInput[i][1]);

  switch (dir) {
    case 'forward':
      x += num;
      d += aim * num;
      break;
    case 'up':
      aim -= num;
      break;
    case 'down':
      aim += num;
      break;
  }
}

let final = x * d;

console.log(final);