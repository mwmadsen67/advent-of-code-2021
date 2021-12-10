const fs = require('fs');
let codeInput = fs.readFileSync('day09/puzzleInput.txt', 'utf8').split('\n').map(row => row.split(''));
// console.log(codeInput)

let lowPts = [];

for (let i = 0; i < codeInput.length; i++) {
  for (let j = 0; j < codeInput[i].length; j++) {
    let left = codeInput[i][j-1];
    let up = codeInput[i-1] ? codeInput[i-1][j] : undefined;
    let right = codeInput[i][j+1];
    let down = codeInput[i+1] ? codeInput[i+1][j] : undefined;
    let dirArr = [left, up, right, down]
    let lowest = true;
    for (let k = 0; k < 4; k++) {
      if (dirArr[k] !== undefined && parseInt(codeInput[i][j]) >= parseInt(dirArr[k])) {
        lowest = false;
        break;
      }
    }
    if (lowest === true) {
      console.log(codeInput[i][j], left, down, right, up)
      lowPts.push(codeInput[i][j]);
    }
  }
}

console.log(lowPts);

let total = 0;

lowPts.forEach(el => total += parseInt(el) + 1);

console.log(total)