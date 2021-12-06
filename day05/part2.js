const fs = require('fs');
let codeInput = fs.readFileSync('day05/puzzleInput.txt', 'utf8').split('\n').map(el => el.split(' -> '));
// console.log(codeInput)
const pts = {};

for (let i = 0; i < codeInput.length; i++) {
  // codeInput[i] === ['0,9','5,9']
  let [line1, line2] = [codeInput[i][0].split(',').map(val => parseInt(val)), codeInput[i][1].split(',').map(val => parseInt(val))];
  let [x1, y1, x2, y2] = [line1[0], line1[1], line2[0], line2[1]]
  if (x1 === x2) { // 0 === 5 ?
    if (y1 <= y2) {
      for (let j = y1; j <= y2; j++) {
        pts[`${x1},${j}`] = pts[`${x1},${j}`] === undefined ? 1 : pts[`${x1},${j}`] + 1
      }
    } else {
      for (let j = y2; j <= y1; j++) {
        pts[`${x1},${j}`] = pts[`${x1},${j}`] === undefined ? 1 : pts[`${x1},${j}`] + 1
      }
    }
  } else if (y1 === y2) { // 9 === 9 ?
    if (x1 <= x2) {
      for (let j = x1; j <= x2; j++) {
        pts[`${j},${y1}`] = pts[`${j},${y1}`] === undefined ? 1 : pts[`${j},${y1}`] + 1
      }
    } else {
      for (let j = x2; j <= x1; j++) {
        pts[`${j},${y1}`] = pts[`${j},${y1}`] === undefined ? 1 : pts[`${j},${y1}`] + 1
      }
    }
  } else if (x1 < x2) { // diagonal
    // [1,1] -> [2,2] vs [1,1] -> [2,0] vs [1,1] -> [0,2] vs [1,1] -> [0,0]
    // x1 < x2 vs x1 > x2 and y1 < y2 vs y1 > y2
    let [z1, z2] = [x1, y1];
    let ans = [z1, z2];
    let sol = [x2, y2].toString();
    if (y1 < y2) {
      let fin = false;
      pts[ans.toString()] = pts[ans.toString()] === undefined ? 1 : pts[ans.toString()] + 1
      while (fin === false) {
        z1 += 1;
        z2 += 1;
        ans = [z1, z2];
        pts[ans.toString()] = pts[ans.toString()] === undefined ? 1 : pts[ans.toString()] + 1
        if (ans.toString() === sol) {
          fin = true;
        }
      }
    } else if (y1 > y2) {
      let fin = false;
      pts[ans.toString()] = pts[ans.toString()] === undefined ? 1 : pts[ans.toString()] + 1
      while (fin === false) {
        z1 += 1;
        z2 -= 1;
        ans = [z1, z2];
        pts[ans.toString()] = pts[ans.toString()] === undefined ? 1 : pts[ans.toString()] + 1
        if (ans.toString() === sol) {
          fin = true;
        }
      }
    }
  } else if (x1 > x2) {
    let [z1, z2] = [x1, y1];
    let ans = [z1, z2];
    let sol = [x2, y2].toString();
    if (y1 < y2) {
      let fin = false;
      pts[ans.toString()] = pts[ans.toString()] === undefined ? 1 : pts[ans.toString()] + 1
      while (fin === false) {
        z1 -= 1;
        z2 += 1;
        ans = [z1, z2];
        pts[ans.toString()] = pts[ans.toString()] === undefined ? 1 : pts[ans.toString()] + 1
        if (ans.toString() === sol) {
          fin = true;
        }
      }
    } else if (y1 > y2) {
      let fin = false;
      pts[ans.toString()] = pts[ans.toString()] === undefined ? 1 : pts[ans.toString()] + 1
      while (fin === false) {
        z1 -= 1;
        z2 -= 1;
        ans = [z1, z2];
        pts[ans.toString()] = pts[ans.toString()] === undefined ? 1 : pts[ans.toString()] + 1
        if (ans.toString() === sol) {
          fin = true;
        }
      }
    }
  }
}

// console.log(pts);
let num = 0
let covers = Object.values(pts);

covers.forEach(cover => cover > 1 ? num += 1 : '');

console.log(num);