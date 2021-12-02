
const fs = require('fs');
let codeInput = fs.readFileSync('day01/puzzle_input.txt', 'utf8').split('\n').map(num => parseInt(num));
let inc = 0;
for (i = 1; i < codeInput.length; i++) {
  if (codeInput[i] > codeInput[i - 1]) {
    inc++;
  }
}

console.log(inc);