const os = require('os');

function exec1(input) {
  let result = 0;
  if (!input) {
    return result;
  }

  const lines = input.split(os.EOL);
  lines.forEach((line) => {
    if (line.startsWith('+')) {
      result += parseInt(line.substring(1), 10);
    } else {
      result -= parseInt(line.substring(1), 10);
    }
  });
  return result;
}

function exec2() {}

module.exports = {
  exec1,
  exec2,
};
