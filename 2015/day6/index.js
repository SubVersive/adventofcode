const os = require('os');
const fs = require('fs');
const path = require('path');

const makeGrid = require('./grid');

const getRange = (line) => {
  const numbers = line.match(/[\d,\d]+/g);
  return {
    from: {
      x: parseInt(numbers[0].split(',')[0], 10),
      y: parseInt(numbers[0].split(',')[1], 10),
    },
    to: {
      x: parseInt(numbers[1].split(',')[0], 10),
      y: parseInt(numbers[1].split(',')[1], 10),
    },
  };
};

function exec1() {
  const grid = makeGrid(1000, 1000);
  const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split(os.EOL);
  lines.forEach((line) => {
    let command = 'toggle';
    const range = getRange(line);
    if (line.startsWith('turn on')) {
      command = 'turnOn';
    } else if (line.startsWith('turn off')) {
      command = 'turnOff';
    }
    grid[command](range.from, range.to);
  });
  return grid.litCount();
}

function exec2() {
  return 1;
}

module.exports = {
  exec1,
  exec2,
  makeGrid,
};
