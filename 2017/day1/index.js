module.exports = {
  exec1,
  exec2
}; 

function exec1(input) {
  let result = 0;
  for(let i = 0; i < input.length; i++) {
    const next = i === input.length - 1 ? input[0] : input[i + 1];
    if (input[i] === next) {
      result += parseInt(input[i]);
    }
  }
  return result;
}

function exec2(input) {
  let result = 0;
  let step = input.length / 2;
  for(let i = 0; i < input.length; i++) {
    const nextIndex = (i + step) % input.length;
    if (input[i] === input[nextIndex]) {
      result += parseInt(input[i]);
    }
  }
  return result;
}