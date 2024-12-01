const os = require('os');

function findSimilarityScore(list1, list2) {
  const dic2 = new Map();
  // eslint-disable-next-line no-restricted-syntax
  for (const e of list2) {
    if (!dic2.has(e)) {
      dic2.set(e, 0);
    }
    dic2.set(e, dic2.get(e) + 1);
  }
  let result = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const e of list1) {
    if (dic2.has(e)) {
      result += e * dic2.get(e);
    }
  }
  return result;
}

function findDistance(list1, list2) {
  if (!list1 || !list2) {
    throw new Error();
  }
  if (list1.length !== list2.length) {
    throw new Error();
  }
  const sorted1 = list1.sort();
  const sorted2 = list2.sort();
  let diff = 0;
  for (let i = 0; i < sorted1.length; i++) {
    diff += Math.abs(sorted1[i] - sorted2[i]);
  }
  return diff;
}

function getInput(input) {
  const list1 = [];
  const list2 = [];
  const lines = input.split(os.EOL);
  lines.forEach((line) => {
    if (!line) {
      return;
    }
    const [item1, item2] = line.trim().split('   ');
    list1.push(parseInt(item1, 10));
    list2.push(parseInt(item2, 10));
  });
  return { list1, list2 };
}

function exec1(input) {
  const { list1, list2 } = getInput(input);
  return findDistance(list1, list2);
}

function exec2(input) {
  const { list1, list2 } = getInput(input);
  return findSimilarityScore(list1, list2);
}

module.exports = {
  exec1,
  exec2,
  findDistance,
  findSimilarityScore,
};
