const os = require('os');
const func = require('.');

const seq = (...arr) => arr.join(os.EOL);

describe('2017 Day 5 challange', () => {
  describe('Part 1', () => {
    it('should return 1 for 1 jump outside', () => {
      expect(func.exec1(seq(1))).toEqual(1);
    });
    it('should return 2 for single item equals zero', () => {
      expect(func.exec1(seq(0))).toEqual(2);
    });
    it('should return 2 for two ones', () => {
      expect(func.exec1(seq(1, 1))).toEqual(2);
    });
    it('should return 3 for two numbers with backward jump', () => {
      expect(func.exec1(seq(1, -1))).toEqual(3);
    });
    it('should return 2 for two numbers with backward jump and out', () => {
      expect(func.exec1(seq(1, -2))).toEqual(2);
    });
    it('should return 5 for sample case', () => {
      expect(func.exec1(seq(0, 3, 0, 1, -3))).toEqual(5);
    });
  });

  describe('Part 2', () => {
    it('should return 5 for sample case', () => {
      expect(func.exec2(seq(0, 3, 0, 1, -3))).toEqual(10);
    });
  });
});
