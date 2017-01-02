const md5 = require('md5');

module.exports = {
  generateHash
};

function generateHash(input) {
  return md5(input);
}