function exec1(input) {
  let result = 0;
  for (let i = 0; i < input.length; i += 1) {
    const next = i === input.length - 1 ? input[0] : input[i + 1];
    if (input[i] === next) {
      result += parseInt(input[i], 10);
    }
  }
  return result;
}

function exec2(input) {
  let result = 0;
  const step = input.length / 2;
  for (let i = 0; i < input.length; i += 1) {
    const nextIndex = (i + step) % input.length;
    if (input[i] === input[nextIndex]) {
      result += parseInt(input[i], 10);
    }
  }
  return result;
}

module.exports = {
  exec1,
  exec2,
};
