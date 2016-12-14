const os = require('os');

module.exports = {
  exec1,
  exec2
}; 

function exec1(input) {
  const parts = input.split(os.EOL);
  return parts.reduce((prev, curr) => {
    return prev + singlePaper(curr);
  }, 0);
}

function singlePaper(str) {
  const [ l, w, h ] = str.split('x');
  const p1 = l*w;
  const p2 = w*h;
  const p3 = h*l;
  let min = p1;
  if (p2 < p1 || p3 < p1) {
    min = p3 < p2 ? p3 : p2;
  }
  return 2*p1 + 2*p2 + 2*p3 + min;
}

function exec2(input) {
  const parts = input.split(os.EOL);
  return parts.reduce((prev, curr) => {
    return prev + singleRibbon(curr);
  }, 0);
}

function singleRibbon(str) {
  const [ l, w, h ] = str.split('x').map((v) => parseInt(v));
  let min1, min2;
  if (l < w) {
    min1 = l;
    min2 = h < w ? h : w;
  } else {
    min1 = w;
    min2 = l < h ? l : h;
  }

  return l * w * h + 2 * min1 + 2 * min2;
}

