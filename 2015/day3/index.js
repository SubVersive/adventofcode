/* eslint-disable no-param-reassign */

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

function visitedHousesRobo(input) {
  const santa = {
    x: 0,
    y: 0,
  };
  const robo = {
    x: 0,
    y: 0,
  };
  const houses = {};
  houses[0] = [0];
  for (let i = 0; i < input.length; i++) {
    const pos = i % 2 === 0 ? santa : robo;
    handleStep(input[i], pos, houses);
  }

  return houses;
}

function exec1(input) {
  let total = 0;
  const houses = visitedHouses(input);
  // eslint-disable-next-line no-restricted-syntax
  for (const p of Object.keys(houses)) {
    total += houses[p].length;
  }
  return total;
}

function exec2(input) {
  let total = 0;
  const houses = visitedHousesRobo(input);
  // eslint-disable-next-line no-restricted-syntax
  for (const p of Object.keys(houses)) {
    total += houses[p].length;
  }
  return total;
}

module.exports = {
  exec1,
  exec2,

  visitedHouses,
  visitedHousesRobo,
};
