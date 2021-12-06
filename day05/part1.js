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
        pts[`${x1}, ${j}`] = pts[`${x1}, ${j}`] === undefined ? 1 : pts[`${x1}, ${j}`] + 1
      }
    } else {
      for (let j = y2; j <= y1; j++) {
        pts[`${x1}, ${j}`] = pts[`${x1}, ${j}`] === undefined ? 1 : pts[`${x1}, ${j}`] + 1
      }
    }
  } else if (y1 === y2) { // 9 === 9 ?
    if (x1 <= x2) {
      for (let j = x1; j <= x2; j++) {
        pts[`${j}, ${y1}`] = pts[`${j}, ${y1}`] === undefined ? 1 : pts[`${j}, ${y1}`] + 1
      }
    } else {
      for (let j = x2; j <= x1; j++) {
        pts[`${j}, ${y1}`] = pts[`${j}, ${y1}`] === undefined ? 1 : pts[`${j}, ${y1}`] + 1
      }
    }
  }
}
let num = 0
let covers = Object.values(pts);

covers.forEach(cover => cover > 1 ? num += 1 : '');

console.log(num);