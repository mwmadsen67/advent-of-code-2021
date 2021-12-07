const fs = require('fs');
let codeInput = fs.readFileSync('day07/puzzleInput.txt', 'utf8').split(',').map(num => parseInt(num));

// find additive crab fuel
let f = [];
function func (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = func(n-1) + n;
}

let ansArr = [];
let ans;

for (let i = 0; i < Math.max(...codeInput); i++) {
  ans = 0;
  codeInput.forEach(pos => {
    // console.log(Math.abs(pos - i));
    let fact = func(Math.abs(pos - i));
    ans += fact;
  });
  ansArr.push(ans);
}

let bruh = Math.min(...ansArr);

console.log(bruh);