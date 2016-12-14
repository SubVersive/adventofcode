const os = require('os');

module.exports = {
  exec1,
  exec2,

  visitedHouses
}; 

function visitedHouses(input) {
  let x = 0;
  let y = 0;
  const houses = { };
  houses[x] = [y];
  for(let i = 0; i < input.length; i++) {
    if (input[i] === '^') {
      x++;
    }

    if (input[i] === 'v') {
      x--;
    }

    if (input[i] === '>') {
      y++;
    }

    if (input[i] === '<') {
      y--;
    }

    if(!houses[x]) {
      houses[x] = [];
    }

    if (houses[x].indexOf(y) === -1) {
      houses[x].push(y);
    }
  }

  return houses;
}

function exec1(input) {
  let total = 0;
  const houses = visitedHouses(input);
  for (let p in houses) {
    if (!houses.hasOwnProperty(p)) {
      continue;
    }

    total += houses[p].length;
  }
  return total;
}

function exec2(input) {
}
