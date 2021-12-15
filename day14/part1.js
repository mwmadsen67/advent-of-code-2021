const fs = require('fs');
let codeInput = fs.readFileSync('day14/puzzleInput.txt', 'utf8').split('\n\n');
let template = codeInput[0];
let rulesArr = codeInput[1].split('\n').map(line => line.split(' -> '));
let rules = {};
rulesArr.forEach(rule => rules[rule[0]] = rule[1])

// console.log(template);
// console.log(rules);
let count = {};
for (let i = 0; i < template.length; i++) {
  if (!count[template[i]]) {
    count[template[i]] = 1;
  } else {
    count[template[i]] += 1;
  }
}

for (let i = 0; i < 10; i++) {
  let temp = template.split('');
  let idx = 1;
  for (let t = 0; t < template.length - 1; t++) {
    let chars = `${template[t]}${template[t+1]}`
    if (Object.keys(rules).includes(chars)) {
      let char = rules[chars]
      temp.splice(idx, 0, char)
      idx += 1;
      if (!count[char]) {
        count[char] = 1;
      } else {
        count[char] += 1;
      }
    }
    idx += 1;
  }
  template = temp.join('');
}

// console.log(template)
console.log(template.length)
console.log(count)

let min = Math.min(...Object.values(count));
let max = Math.max(...Object.values(count));

console.log(max - min)

