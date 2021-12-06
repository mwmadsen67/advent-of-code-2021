const fs = require('fs');
let codeInput = fs.readFileSync('day04/puzzleInput.txt', 'utf8').split('\n');

let inputs = [];
let i = 0;
inputs.push([]);
codeInput.forEach(el => {
  
  if (el !== '') {
    inputs[i].push(el);
  } else {
    i++;
    inputs.push([]);
  }
});

let numbs = inputs[0][0].split(',');
let bings = inputs.slice(1);
bings = bings.map( board => ( board.map(row => row.split(' ').map(el => parseInt(el)).filter(el => !Number.isNaN(el)))));
// console.log(bings)
function completeRow(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 'x') {
        
        break;
      }
      
      if (j === board[i].length - 1) {
        return true;
      }
    }
  }
  return false;
}

//found off stackoverflow
function transpose (board){
  var newBoard = [];
  for(var i = 0; i < board.length; i++){
      newBoard.push([]);
  };

  for(var i = 0; i < board.length; i++){
      for(var j = 0; j < board.length; j++){
          newBoard[j].push(board[i][j]);
      };
  };

  return newBoard;
}

function completeCol(board) {
  let transBoard = transpose(board);
  return completeRow(transBoard);
}


// checking numbs
numbs = numbs.map(num => parseInt(num))
// console.log(nums)
function shit (nums, bingos) {
  let winningBoard, winningNum;
  for (let j = 0; j < nums.length; j++) {
    for(let k = 0; k < bingos.length; k++) {
      for(let r = 0; r < bingos[k].length; r++) {
        for(let c = 0; c < bingos[k][r].length; c++) {
          if (bingos[k][r][c] === nums[j]) {
            bingos[k][r][c] = 'x'
          }
        }
      }
      // console.log(bingos[k])
      if (completeRow(bingos[k]) || completeCol(bingos[k])) {
        winningBoard = bingos[k];
        winningNum = nums[j];
        return [winningBoard, winningNum];
      }
    }
  }
}

let ans = shit(numbs, bings);

function getNums (whatever) {
  let sum = 0;
  whatever.forEach(row => row.forEach( n => typeof n === 'string' ? '' : sum += n))
  return sum;
}

let something = getNums(ans[0]) * ans[1];
console.log(something);