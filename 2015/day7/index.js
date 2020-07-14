const os = require('os');
const fs = require('fs');
const path = require('path');

const WireSet = require('./WireSet');

function exec1() {
  const set = new WireSet();
  const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split(os.EOL);
  lines.forEach((line) => set.add(line));
  return set.getSignal('a');
}

function exec2() {}

module.exports = {
  exec1,
  exec2,
};
