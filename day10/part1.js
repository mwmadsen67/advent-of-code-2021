const fs = require('fs');
let codeInput = fs.readFileSync('day10/puzzleInput.txt', 'utf8').split('\n');

let scoring = { ')': 3, ']': 57, '}': 1197, '>': 25137 };
let score = 0;

for (let i = 0; i < codeInput.length; i++) {
  let nextExpectedCloser = [];
  for (let j = 0; j < codeInput[i].length; j++) {
    switch (codeInput[i][j]) {
      case '(':
        nextExpectedCloser.push(')');
        break;
      case '[':
        nextExpectedCloser.push(']');
        break;
      case '{':
        nextExpectedCloser.push('}');
        break;
      case '<':
        nextExpectedCloser.push('>');
        break;
      case nextExpectedCloser.pop():
        break;      
      default:
        score += scoring[codeInput[i][j]];
        break;
    }
  }
}

console.log(score)