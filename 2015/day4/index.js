const hashService = require('./hash.service');

function execWithPattern(input, pattern) {
  let i = 0;
  let hash;
  do {
    i++;
    hash = hashService.generateHash(input + i);
  } while (!hash.startsWith(pattern));
  return i;
}

function exec1(input) {
  return execWithPattern(input, '00000');
}

function exec2(input) {
  return execWithPattern(input, '000000');
}

module.exports = {
  exec1,
  exec2,
};
