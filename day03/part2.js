const fs = require('fs');
let codeInput = fs.readFileSync('day03/puzzleInput.txt', 'utf8').split('\n');

const length = codeInput[0].length;

let newArr1 = [...codeInput];
let newArr2 = [...codeInput];

let oxy;

let count;
let common;
for (let j = 0; j < length; j++) {
  count = 0;
  for (let i = 0; i < newArr1.length; i++) {
    count += parseInt(newArr1[i][j]);
  }
  common = count < newArr1.length / 2 ? 0 : 1
  let otherArr = [];

  for (let i = 0; i < newArr1.length; i++) {
    if (parseInt(newArr1[i][j]) === common) {
      otherArr.push(newArr1[i])
    }
  }

  newArr1 = otherArr;
  if (newArr1.length === 1) {
    oxy = newArr1[0];
    break;
  }
}

console.log(oxy)
let co2;
let count2;
let uncommon;
for (let j = 0; j < length; j++) {
  count2 = 0;
  for (let i = 0; i < newArr2.length; i++) {
    count2 += parseInt(newArr2[i][j]);
  }
  uncommon = count2 < newArr2.length / 2 ? 1 : 0
  let otherArr = [];

  for (let i = 0; i < newArr2.length; i++) {
    if (parseInt(newArr2[i][j]) === uncommon) {
      otherArr.push(newArr2[i])
    }
  }

  newArr2 = otherArr;
  if (newArr2.length === 1) {
    co2 = newArr2[0];
    break;
  }
}

console.log(co2)

oxy = parseInt(oxy, 2).toString();
co2 = parseInt(co2, 2).toString();

let final = oxy * co2;

console.log(final);