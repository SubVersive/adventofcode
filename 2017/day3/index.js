module.exports = {
  exec1,
  exec2
};

const getPosition = (val) => {
  let ring = 0;
  let base = 1;
  while(val > base * base) {
    ring++;
    base += 2;
  }
  return { ring, base, max: base * base };
}

function exec1(input) {
  const number = parseInt(input);
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
      decreasing = current === minDistance ? false : true;
    } else {
      current++;
      decreasing = current === maxDistance ? true : false;
    }
    temp--;
  }
  return current;
}

function exec2(input) {
  return 0;
}