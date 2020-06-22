/* eslint-disable no-console */
const chalk = require('chalk');

const red = (...arg) => console.log(chalk.red(...arg));
const blue = (...arg) => console.log(chalk.blue(...arg));
const green = (...arg) => console.log(chalk.green(...arg));

module.exports = {
  red,
  blue,
  green,
};
