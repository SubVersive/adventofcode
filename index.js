/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const logger = require('./logger');

const year = process.argv[2];
const day = process.argv[3];

logger.green(`... ${day} ...`);

try {
  const script = require(`./${year}/${day}`);
  const input = fs.readFileSync(`./${year}/${day}/input.txt`, 'utf-8');
  const result1 = script.exec1(input);
  logger.blue(`part1: ${result1}`);
  const result2 = script.exec2(input);
  logger.blue(`part2: ${result2}`);
} catch (error) {
  logger.red(error);
}

logger.green('... done ...');
