const fs = require('fs');
let codeInput = fs.readFileSync('day01/puzzle_input.txt', 'utf8').split('\n').map(num => parseInt(num));
let inc = 0;
for (i = 3; i < codeInput.length; i++) {
  prevWindow = codeInput[i-3] + codeInput[i-2] + codeInput[i-1];
  curWindow = codeInput[i-2] + codeInput[i-1] + codeInput[i];
  if (curWindow > prevWindow) {
    inc++
  }
}

console.log(inc);