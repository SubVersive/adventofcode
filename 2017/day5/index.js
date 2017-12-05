const os = require('os');

module.exports = {
  exec1,
  exec2
};

function exec1(input) {
  const arr = input.split(os.EOL).map(i => parseInt(i, 10));
  let jumps = 0;
  let position = 0;
  while (position < arr.length && position >= 0) {
    const cur = arr[position];
    arr[position]++;
    position += cur;
    jumps++;
  }
  return jumps;
}

function exec2(input) {
  const arr = input.split(os.EOL).map(i => parseInt(i, 10));
  let jumps = 0;
  let position = 0;
  while (position < arr.length && position >= 0) {
    const cur = arr[position];
    if (cur >= 3) {
      arr[position]--;
    } else {
      arr[position]++;
    }
    position += cur;
    jumps++;
  }
  return jumps;
}