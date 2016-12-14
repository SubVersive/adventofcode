const os = require('os');

module.exports = {
  exec1,
  exec2,

  visitedHouses,
  visitedHousesRobo
};

function visitedHouses(input) {
  let x = 0;
  let y = 0;
  const houses = {};
  houses[x] = [y];
  for (let i = 0; i < input.length; i++) {
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

    if (!houses[x]) {
      houses[x] = [];
    }

    if (houses[x].indexOf(y) === -1) {
      houses[x].push(y);
    }
  }

  return houses;
}

function visitedHousesRobo(input) {
  let santa = {
    x: 0,
    y: 0
  };
  let robo = {
    x: 0,
    y: 0
  };
  const houses = {};
  houses[0] = [0];
  for (let i = 0; i < input.length; i++) {
    const pos = i % 2 === 0 ? santa : robo;
    handleStep(input[i], pos, houses);
  }

  return houses;
}

function handleStep(step, pos, houses) {
  if (step === '^') {
    pos.x++;
  }

  if (step === 'v') {
    pos.x--;
  }

  if (step === '>') {
    pos.y++;
  }

  if (step === '<') {
    pos.y--;
  }

  if (!houses[pos.x]) {
    houses[pos.x] = [];
  }

  if (houses[pos.x].indexOf(pos.y) === -1) {
    houses[pos.x].push(pos.y);
  }
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
  let total = 0;
  const houses = visitedHousesRobo(input);
  for (let p in houses) {
    if (!houses.hasOwnProperty(p)) {
      continue;
    }

    total += houses[p].length;
  }
  return total;
}
