const getPosition = (val) => {
  let ring = 0;
  let base = 1;
  while (val > base * base) {
    ring++;
    base += 2;
  }
  return { ring, base, max: base * base };
};

function exec1(input) {
  const number = parseInt(input, 10);
  if (number === 1) {
    return 0;
  }

  const position = getPosition(number);
  let temp = position.max;
  let decreasing = true;
  const minDistance = position.ring;
  const maxDistance = position.ring * 2;
  let current = maxDistance;
  while (temp !== number) {
    if (decreasing) {
      current--;
      decreasing = current !== minDistance;
    } else {
      current++;
      decreasing = current === maxDistance;
    }
    temp--;
  }
  return current;
}

function exec2() {
  return 0;
}

module.exports = {
  exec1,
  exec2,
};
