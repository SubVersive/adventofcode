const chalk = require('chalk');
const fs = require('fs');

const year = process.argv[2];
const day = process.argv[3];

console.log(chalk.green(`... ${day} ...`));

try {
  const script = require(`./${year}/${day}`);
  const input = fs.readFileSync(`./${year}/${day}/input.txt`, 'utf-8');
  const result1 = script.exec1(input);
  console.log(chalk.blue(`part1: ${result1}`));
  const result2 = script.exec2(input);
  console.log(chalk.blue(`part2: ${result2}`));
} catch(error) {
  console.log(chalk.red(error));
}

console.log(chalk.green('... done ...'));