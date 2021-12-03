const fs = require('fs');
let codeInput = fs.readFileSync('day03/puzzleInput.txt', 'utf8').split('\n');

let gamma = [];
let epsilon = [];
let sumArr = [];
const length = codeInput[0].length;

for (let l = 0; l < length; l++) {
  sumArr.push(0);
}

for (let i = 0; i < codeInput.length; i++) {
  
  for (let j = 0; j < length; j++) {
    sumArr[j] += parseInt(codeInput[i][j])
  }
}

for (let k = 0; k < length; k++) {
  gamma.push(sumArr[k] < (codeInput.length / 2) ? 0 : 1)
  epsilon.push(sumArr[k] < (codeInput.length / 2) ? 1 : 0)
}
gamma = parseInt(gamma.join(""), 2);
epsilon = parseInt(epsilon.join(""), 2);
let final = gamma * epsilon;
console.log(final);