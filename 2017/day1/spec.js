const func = require('./');

describe('2017 Day 1 challange', () => {
  describe('Part 1', () => {
    it('should return 0 by default', () => {
      func.exec1('').should.equal(0);
    });
    it('should return 0 for 2 not matched values', () => {
      func.exec1('12').should.equal(0);
    });
    it('should return 1 for 2 ones in a row', () => {
      func.exec1('211').should.equal(1);
    });
    it('should return 4 for 3 twos in a row', () => {
      func.exec1('12223').should.equal(4);
    });
    it('should take into account cycle item', () => {
      func.exec1('121').should.equal(1);
    });
  });

  describe('Part 2', function () {
    it('should return 0 by default', () => {
      func.exec2('').should.equal(0);
    });
    it('should return 0 to 2 different item', () => {
      func.exec2('12').should.equal(0);
    });
    it('should return 2 to ones in a row', () => {
      func.exec2('11').should.equal(2);
    });
    it('given test cases should return valid result', () => {
      func.exec2('1212').should.equal(6);
      func.exec2('1221').should.equal(0);
      func.exec2('123425').should.equal(4);
      func.exec2('123123').should.equal(12);
      func.exec2('12131415').should.equal(4);
    });
  });
});