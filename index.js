const chalk = require('chalk');
const fs = require('fs');

const year = process.argv[2];
const day = process.argv[3];

console.log(chalk.green(`... ${day} ...`));

try {
  const script = require(`./${year}/${day}`);
  const input1 = fs.readFileSync(`./${year}/${day}/input1.txt`, 'utf-8');
  const input2 = fs.readFileSync(`./${year}/${day}/input1.txt`, 'utf-8');
  const result1 = script.exec1(input1);
  console.log(chalk.blue(result1));
  const result2 = script.exec2(input2);
  console.log(chalk.blue(result2));
} catch(error) {
  console.log(chalk.red(error));
}

console.log(chalk.green('... done ...'));