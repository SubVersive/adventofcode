const os = require('os');
const func = require('./');

const seq = (...arr) => arr.join(os.EOL);

describe('2017 Day 5 challange', () => {
  describe('Part 1', () => {
    it('should return 1 for 1 jump outside', () => {
      func.exec1(seq(1)).should.equal(1);
    });
    it('should return 2 for single item equals zero', () => {
      func.exec1(seq(0)).should.equal(2);
    });
    it('should return 2 for two ones', () => {
      func.exec1(seq(1, 1)).should.equal(2);
    });
    it('should return 3 for two numbers with backward jump', () => {
      func.exec1(seq(1, -1)).should.equal(3);
    });
    it('should return 2 for two numbers with backward jump and out', () => {
      func.exec1(seq(1, -2)).should.equal(2);
    });
    it('should return 5 for sample case', () => {
      func.exec1(seq(0, 3, 0, 1, -3)).should.equal(5);
    });
  });

  describe('Part 2', function () {
    it('should return 5 for sample case', () => {
      func.exec2(seq(0, 3, 0, 1, -3)).should.equal(10);
    });
  });
});