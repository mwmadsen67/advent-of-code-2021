const fs = require('fs');
let codeInput = fs.readFileSync('day08/puzzleInput.txt', 'utf8').split('\n');
let nums = codeInput.map(str => str.slice(0, 58))
let output = codeInput.map(str => str.slice(61)).map(str => str.split(' ').map(letters => letters.split('').sort()));
// console.log(output)

nums = nums.map(code => code.split(' ').map(letters => letters.split('').sort()));
// console.log(nums)

let numObj;
let total = 0;

for (let i = 0; i < nums.length; i++) {
  numObj = {};
  let char5 = [];
  let char6 = [];
  let sevenseg = '';

  // figure out segments for 1, 4, 7, 8
  // put rest of numbers into arrays based on number of segments (5 or 6)
  for (let j = 0; j < 10; j++) {
    let num = nums[i][j]
    switch (num.length) {
      case 2:
        numObj[1] = nums[i][j];
        break;
      case 3:
        numObj[7] = nums[i][j];
        break;
      case 4:
        numObj[4] = nums[i][j];
        break;
      case 5:
        char5.push(nums[i][j]);
        break;
      case 6:
        char6.push(nums[i][j]);
        break;
      case 7:
        numObj[8] = nums[i][j];
        break;
      default:
        break;
    }
  }
  
  // figure out remaining numbers 
  let un = numObj[1];
  numObj[3] = find3or5(char5, un);
  let el = findEl(numObj[4], un);
  numObj[5] = find3or5(char5, el);
  numObj[2] = char5[0];
  let seg = numObj[5].includes(un[0]) ? un[1] : un[0];
  numObj[6] = find6(char6, seg);
  numObj[9] = find9(char6, numObj[4]);
  numObj[0] = char6[0];

  // match numbers and get seven segment digit
  let numArr = Object.values(numObj);
  for (let j = 0; j < 4; j++) {
    for (let n = 0; n < 10; n++) {
      if (output[i][j].toString() === numArr[n].toString()) {
        sevenseg += n.toString()
        break;
      }
    }
  }

  total += parseInt(sevenseg);
}

console.log(total)

// helpers

// 3 has the 1 segments, 5 has L shaped segments (4 - 1)
function find3or5 (arr, one) {
  for (let i = 0; i < arr.length; i++) {
    let found = 0;
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 2; k++ ) {
        if (arr[i][j] === one[k]) {
          found += 1;
          if (found === 2) return arr.splice(i, 1)[0];
        }
      }
    }
  }
}

// find L segments by removing 1 from 4
function findEl (four, one) {
  let el = [];
  for (let i = 0; i < 4; i++) {
    if (four[i] !== one[0] && four[i] !== one[1]) {
      el.push(four[i]);
    }
    if (el.length === 2) return el;
  }
}

// 9 contains the 4 segments inside it
function find9 (arr, four) {
  for (let i = 0; i < arr.length; i++) {
    let found = 0;
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 4; k++ ) {
        if (arr[i][j] === four[k]) {
          found += 1;
          if (found === 4) return arr.splice(i, 1)[0];
        }
      }
    }
  }
}

// 6 does not have the top of the 1 segments
function find6 (arr, seg) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(seg)) return arr.splice(i, 1)[0];
  }
}

