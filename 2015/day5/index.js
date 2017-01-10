const os = require('os');
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const EXCEPTIONALS = ['ab', 'cd', 'pq', 'xy'];

module.exports = {
  exec1,
  exec2,
  isNice,
  isEvenNicer
};

function exec1(input) {
  const strings = input.split(os.EOL);
  return strings.filter(isNice).length;
}

function exec2(input) {
  const strings = input.split(os.EOL);

  // console.log(strings.filter((e) => isEvenNicer(e).hasSplittedDoubles));

  return strings.filter((e) => !isEvenNicer(e).result).length;
}

function isEvenNicer(str) {
  const pairs = { };
  let hasSplittedDoubles = false;
  let hasMatchedPair = false;
  
  for (let i = 1; i < str.length; i++) {
    const key = str[i-1] + str[i];
    if (pairs[key] && i > pairs[key].index + 1) {
      pairs[key].count++;
      hasMatchedPair = true;
    } else {
      pairs[key] = {
        index: i,
        count: 1
      };
    }

    if (i > 1) {
      if (str[i - 2] === str[i]) {
        hasSplittedDoubles = true;
      }
    }
  }

  const result = hasMatchedPair && hasSplittedDoubles;
  // if (!result) {
  //   for(let p in pairs) {
  //     if (pairs[p].count > 1) {
  //       // console.log(str, pairs);
  //     }
  //   }
  // }

  return {
    result,
    pairs,
    hasSplittedDoubles
  };
}

function isNice(str) {
  let prev = '';
  let hasDoubles = false;
  let vowels = 0;
  for (let i = 0; i < str.length; i++) {
    if (VOWELS.indexOf(str[i]) > -1) {
      vowels++;
    }
    if (str[i] === prev) {
      hasDoubles = true;
    }
    if (EXCEPTIONALS.indexOf(prev + str[i]) > -1) {
      return false;
    }

    prev = str[i];
  }

  return vowels > 2 && hasDoubles;
}

