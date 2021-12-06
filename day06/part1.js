const fs = require('fs');
let codeInput = fs.readFileSync('day06/puzzleInput.txt', 'utf8').split(',').map(num => parseInt(num));

class LanternFish {
  constructor(daysInit) {
    this.daysLeft = daysInit;
  }

  incDay () {
    if (this.daysLeft > 0) {
      this.daysLeft -= 1;
    } else {
      this.daysLeft = 6;
      fishies.push(new LanternFish(9));
    }
    
  }
}

fishies = codeInput.map(fish => new LanternFish(fish));
// console.log(fishies)

for (let i = 0; i < 80; i++) {
  for (let f = 0; f < fishies.length; f++) {
    fishies[f].incDay();
  }
  // console.log(`after ${i} days`)
  // console.log(fishies.map(fish => fish.daysLeft));
}

let ans = fishies.map(fish => fish.daysLeft)
console.log(ans.length)