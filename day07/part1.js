const fs = require('fs');
let codeInput = fs.readFileSync('day07/puzzleInput.txt', 'utf8').split(',').map(num => parseInt(num));
// console.log(codeInput)
let average;
let sum = 0;

// codeInput.forEach(pos => sum += pos);
// average = Math.floor(sum / codeInput.length);

// console.log(average)


let ansArr = [];
let ans;

for (let i = 0; i < Math.max(...codeInput); i++) {
  ans = 0;
  codeInput.forEach(pos => {
    // console.log(Math.abs(pos - i));
    ans += Math.abs(pos - i);
  });
  ansArr.push(ans);
}

let bruh = Math.min(...ansArr);

console.log(bruh);