const os = require('os');
const func = require('.');

describe('2017 Day 2 challange', () => {
  describe('Part 1', () => {
    it('should return 2 for single row', () => {
      expect(func.exec1('1\t3')).toEqual(2);
    });
    it('should return 4 for two rows', () => {
      expect(func.exec1(`1\t3${os.EOL}3\t1`)).toEqual(4);
    });
    it('should pass sample case', () => {
      expect(func.exec1(`5\t1\t9\t5${os.EOL}7\t5\t3${os.EOL}2\t4\t6\t8`)).toEqual(18);
    });
  });

  describe('Part 2', () => {
    it('should return result between to evenly divisible', () => {
      expect(func.exec2('5\t9\t2\t8')).toEqual(1);
    });
    it('should pass sample case', () => {
      expect(func.exec2(`5\t9\t2\t8${os.EOL}9\t4\t7\t3${os.EOL}3\t8\t6\t5`)).toEqual(3);
    });
  });
});
