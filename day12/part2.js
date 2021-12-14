const fs = require('fs');
let codeInput = fs.readFileSync('day12/puzzleInput.txt', 'utf8').split('\n').map(el => el.split('-'));
console.log(codeInput)

class Cave {
  constructor(val) {
    this.val = val;
    this.adj = [];
    this.small = val[0].toUpperCase() === val[0] ? false : true;
    this.start = val === 'start' ? true : false;
    this.end = val === 'end' ? true : false;
  }

  _includes(val) {
    for (let i = 0; i < this.adj.length; i++) {
      if (this.adj[i].val === val) return true;
    }
    return false;
  }

  addAdj (cave) {
    if (!this._includes(cave.val)) this.adj.push(cave);
  }
}

const caves = [];
let start;
let end;
let graph = {}

// create cave nodes and connections
for (let i = 0; i < codeInput.length; i++) {
  // first cave
  let included = false
  let curCave;
  for (let j = 0; j < caves.length; j++) {
    if (caves[j].val === codeInput[i][0]) {
      included = true;
      curCave = caves[j];
    }
  }
  if (included === false) {
    curCave = new Cave(codeInput[i][0]);
    graph[curCave.val] = [];
    if (curCave.start) {
      start = curCave;
      caves.unshift(curCave);
    } else if (curCave.end) {
      end = curCave;
      caves.push(curCave);
    } else {
      caves.push(curCave);
    }
     
  } 
  
  // second cave
  let nextIncluded = false
  let nextCave;
  for (let j = 0; j < caves.length; j++) {
    if (caves[j].val === codeInput[i][1]) {
      nextIncluded = true;
      nextCave = caves[j];
    }
  }
  if (nextIncluded === false) {
    nextCave = new Cave(codeInput[i][1]);
    graph[nextCave.val] = [];
    if (nextCave.start) {
      start = nextCave;
      caves.unshift(nextCave);
    } else {
      caves.push(nextCave);
    }
  } 

  curCave.addAdj(nextCave);
  graph[curCave.val].push(nextCave.val)
  nextCave.addAdj(curCave);
  graph[nextCave.val].push(curCave.val)
}

let routes = {};

start.adj.forEach(cave => {
  let mem = {start: true, smallDup: 0};
  let route = [start.val]
  check(cave, route, routes, mem)
})

function check(cave, route, routes, mem) {
  if (cave.val === 'start') {
    return false;
  } else if (cave.val === 'end') {
    route.push('end');
    routes[route.toString()] = true;
    route.pop();
    return true;
  } else if (mem[cave.val] && cave.small && mem['smallDup'] > 0) {
    return false;
  }
  // console.log(mem)
  mem[cave.val] = true;
  if (cave.small && route.includes(cave.val)) mem['smallDup'] += 1
  route.push(cave.val)
  cave.adj.forEach( el => {
    check(el, route, routes, mem)
    
  })
  route.pop();
  if (cave.small && route.includes(cave.val)) {
    // console.log(route, mem['smallDup']);
    mem['smallDup'] -= 1 ;
  } else {
    mem[cave.val] = false;
  }
}

// console.log(routes)
console.log(Object.keys(routes).length)
