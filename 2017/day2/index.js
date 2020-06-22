const os = require('os');

function exec1(input) {
  const rows = input.split(os.EOL);
  const sums = rows.map((row) => {
    const values = row.split('\t').map((c) => parseInt(c, 10));
    const max = Math.max(...values);
    const min = Math.min(...values);
    return max - min;
  });
  return sums.reduce((p, c) => p + c, 0);
}

const getEventlyDivisibleDiff = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i !== j) {
        continue;
      }
      if (arr[i] % arr[j] === 0) {
        return arr[i] / arr[j];
      }
    }
  }

  throw new Error('no items');
};

function exec2(input) {
  const rows = input.split(os.EOL);
  const sums = rows.map((r) => {
    const values = r.split('\t').map((c) => parseInt(c, 10));
    return getEventlyDivisibleDiff(values);
  });
  return sums.reduce((p, c) => p + c, 0);
}

module.exports = {
  exec1,
  exec2,
};
