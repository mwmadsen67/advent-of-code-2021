const fs = require('fs');
let codeInput = fs.readFileSync('day11/puzzleInput.txt', 'utf8').split('\n').map(el => el.split('').map(num => parseInt(num)));
// console.log(codeInput)
let flashes = 0;
let go = true;
let n = 0;
while (go) {
  let mem = {};
  for (let i = 0; i < codeInput.length; i++) {
    for (let j = 0; j < codeInput[i].length; j++) {
      let num = codeInput[i][j];
      if (mem[`${i},${j}`] === true) {
        continue;
      } else if (num < 9) {
        codeInput[i][j] += 1;
        continue;
      } 
      codeInput[i][j] = 0;

      let queue = [`${i},${j}`];
      mem[`${i},${j}`] = true;
      
      while (queue.length > 0) {
        let cur = queue.pop();
        let [x,y] = cur.split(',').map(el => parseInt(el));
        flashes++;
        for (let k = -1; k < 2; k++) {
          for (let l = -1; l < 2; l++) {
            if (codeInput[x+k] !== undefined && codeInput[x+k][y+l] !== undefined && mem[`${x+k},${y+l}`] !== true) {
              codeInput[x+k][y+l] += 1;
              if (codeInput[x+k][y+l] > 9) {
                codeInput[x+k][y+l] = 0;
                mem[`${x+k},${y+l}`] = true;
                queue.push(`${x+k},${y+l}`);
              }
            }
          }
        }
      }
    }
  }
  n++;
  if (Object.values(mem).length === 100) {
    console.log(n);
    go = false;
  }
}

console.log(codeInput.join('\n'));

// console.log(flashes)