module.exports = {
  exec1,
  exec2
}; 

function exec1(input) {
  let result = 0;
  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(') {
      result++;
    }
    if(input[i] === ')') {
      result--;
    }
  }
  return result;
}

function exec2(input) {
  let result = 0;
  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(') {
      result++;
    }
    if(input[i] === ')') {
      result--;
    }

    if (result < 0) {
      return ++i;
    }
  }
  return 1;
}