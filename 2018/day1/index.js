const os = require('os');

module.exports = {
  exec1,
  exec2
}; 

function exec1(input) {
  console.log({
    input
  })
  let result = 0;
  if (!input) {
    return result;
  }

  const lines = input.split(os.EOL);

  lines.forEach(line => {
    if (line.startsWith('+')) {
      result += parseInt(line.substring(1));
    } else if (line.startsWith('-')) {
      result -= parseInt(line.substring(1));
    } else {
      throw new Error(`OOps ${line}`);
    }
  });
  return result;
}

function exec2(input) {
  
}