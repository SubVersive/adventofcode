const os = require('os');

const isValid = (line) => {
  const words = line.split(' ');
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        return false;
      }
    }
  }
  return true;
};

function exec1(input) {
  const lines = input.split(os.EOL);
  return lines.filter(isValid).length;
}

const sortedWord = (word) => word.split('').sort().join('');

const isValid2 = (line) => {
  const words = line.split(' ');
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (sortedWord(words[i]) === sortedWord(words[j])) {
        return false;
      }
    }
  }
  return true;
};

function exec2(input) {
  const lines = input.split(os.EOL);
  return lines.filter(isValid2).length;
}

module.exports = {
  exec1,
  exec2,
};
