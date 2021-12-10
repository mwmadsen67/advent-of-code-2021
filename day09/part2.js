const fs = require('fs');
let codeInput = fs.readFileSync('day09/puzzleInput.txt', 'utf8').split('\n').map(row => row.split(''));
// console.log(codeInput)

// some kind of num islands algo

let visitedPos = {};
let numBasins = 0;
let basinSizes = [];

for (let i = 0; i < codeInput.length; i++) {
  for (let j = 0; j < codeInput[i].length; j++) {
    let curPos = `${i},${j}`;
    if (visitedPos[curPos] === true || parseInt(codeInput[i][j]) === 9) continue;
    let queue = [curPos];
    let basinSize = 0;
    visitedPos[curPos] = true;
    while (queue.length > 0) {
      let cur = queue.shift();
      basinSize++;
      let [cur0, cur1] = cur.split(',').map(el => parseInt(el));
      let left = [cur0, cur1-1] //let left = codeInput[cur0][cur1-1];
      let up = [cur0-1, cur1] //let up = codeInput[cur0-1] ? codeInput[cur0-1][cur1] : undefined;
      let right = [cur0, cur1+1] //let right = codeInput[cur0][cur1+1];
      let down = [cur0+1, cur1] //let down = codeInput[cur0+1] ? codeInput[cur0+1][cur1] : undefined;
      let dirArr = [left, up, right, down]

      for (let k = 0; k < 4; k++) {
        let [x, y] = dirArr[k];
        let val = codeInput[x] ? codeInput[x][y] : undefined;
        if (val !== undefined && parseInt(val) !== 9 && visitedPos[`${x},${y}`] === undefined) {
          queue.push(`${x},${y}`);
          visitedPos[`${x},${y}`] = true;
        }
      }
      
    }
    numBasins++;
    basinSizes.push(basinSize);
  }
}

console.log(basinSizes)
let ansArr = basinSizes.sort((a, b) => b - a)
let ans = 1;

for (let i = 0; i < 3; i++) {
  ans *= ansArr[i];
}

console.log(numBasins);
console.log(ans);

// let total = 0;

// lowPts.forEach(el => total += parseInt(el) + 1);

// console.log(total)