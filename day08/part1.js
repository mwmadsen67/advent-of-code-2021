const fs = require('fs');
let codeInput = fs.readFileSync('day08/puzzleInput.txt', 'utf8').split('\n');
// console.log(codeInput)
let output = codeInput.map(str => str.slice(61))

output = output.map(code => code.split(' '));

let count = 0;

for (let i = 0; i < output.length; i++) {

  for (let j = 0; j < 4; j++) {
    let l = output[i][j].length;
    if (l === 2 || l === 4 || l === 3 || l === 7) {
      count += 1;
    }
  }
}

console.log(count);