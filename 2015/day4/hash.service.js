const md5 = require('md5');

function generateHash(input) {
  return md5(input);
}

module.exports = {
  generateHash,
};
