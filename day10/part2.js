const fs = require('fs');
let codeInput = fs.readFileSync('day10/puzzleInput.txt', 'utf8').split('\n');

let scoring = { ')': 1, ']': 2, '}': 3, '>': 4 };
let scoreArr = [];

for (let i = 0; i < codeInput.length; i++) {
  let nextExpectedCloser = [];
  let skip = false;
  for (let j = 0; j < codeInput[i].length; j++) {
    switch (codeInput[i][j]) {
      case '(':
        nextExpectedCloser.unshift(')');
        break;
      case '[':
        nextExpectedCloser.unshift(']');
        break;
      case '{':
        nextExpectedCloser.unshift('}');
        break;
      case '<':
        nextExpectedCloser.unshift('>');
        break;
      case nextExpectedCloser.shift():
        break;      
      default:
        skip = true;
        break;
    }
  }
  if (skip === false) {
    let score = 0;
    console.log(nextExpectedCloser)
    nextExpectedCloser.forEach(el => score = (score * 5) + scoring[el])
    scoreArr.push(score)
  }
}

let sortedScore = scoreArr.sort((a,b) => a - b)
let ans = sortedScore[Math.floor(sortedScore.length / 2)]
console.log(sortedScore, Math.floor(sortedScore.length / 2))
console.log(ans)