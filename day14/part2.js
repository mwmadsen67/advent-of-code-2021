const fs = require('fs');
let codeInput = fs.readFileSync('day14/puzzleInput.txt', 'utf8').split('\n\n');
let template = codeInput[0];
let rulesArr = codeInput[1].split('\n').map(line => line.split(' -> '));
let rules = {};
rulesArr.forEach(rule => rules[rule[0]] = rule[1])

// console.log(template);
// console.log(rules);
let count = {};
let pairs = {};
for (let i = 0; i < template.length - 1; i++) {
  count[template[i]] = count[template[i]] ? count[template[i]] + 1 : 1;
  let chars = `${template[i]}${template[i+1]}`;
  pairs[chars] = pairs[chars] ? pairs[chars] + 1 : 1;
  if (i === template.length - 2) {
    count[template[i+1]] = count[template[i+1]] ? count[template[i+1]] + 1 : 1;
  }
}

for (let i = 0; i < 40; i++) {
  let temp = {};
  let pairArr = Object.keys(pairs); // ['NN', 'NC', 'CB']
  for (let p = 0; p < pairArr.length; p++) {
    let pair = pairArr[p]; // 'NN'
    if (rules[pair]) { // -> 'C' -> true
      let pair1 = `${pair[0]}${rules[pair]}`; // 'NC'
      let pair2 = `${rules[pair]}${pair[1]}`; // 'CN'
      temp[pair1] = temp[pair1] ? temp[pair1] + pairs[pair] : pairs[pair]; // {NC: 1}
      temp[pair2] = temp[pair2] ? temp[pair2] + pairs[pair] : pairs[pair]; // {NC: 1, CN: 1}
      count[rules[pair]] = count[rules[pair]] ? count[rules[pair]] + pairs[pair] : pairs[pair];
    }
    
  }
  pairs = Object.assign({}, temp);
}

// console.log(template)
console.log(pairs)
console.log(count)

let min = Math.min(...Object.values(count));
let max = Math.max(...Object.values(count));

console.log(max - min)

