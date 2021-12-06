const fs = require('fs');
let codeInput = fs.readFileSync('day06/puzzleInput.txt', 'utf8').split(',').map(num => parseInt(num));


const fishies = {};

for (let i = 0; i < 9; i++) {
  fishies[i] = 0;
}
fishies.newFish = 0

for (let i = 0; i < codeInput.length; i++) {
  fishies[codeInput[i]] += 1;
}
console.log(Object.values(fishies).length)

for (let i = 0; i < 256; i++) {
  for (let f = 0; f < 8; f++) {
    if (f === 0) {
      fishies.newFish = fishies[f];
    }
    fishies[f] = fishies[f+1];
  }
  fishies[6] += fishies.newFish;
  fishies[8] = fishies.newFish;
  // console.log(`after ${i+1} days`)
  // console.log(fishies.map(fish => fish.daysLeft));
}

console.log(fishies)
let ans = 0;
Object.values(fishies).slice(0,9).forEach(val => ans += val)
console.log(ans)
// let ans = fishies.map(fish => fish.daysLeft)
// console.log(ans.length)