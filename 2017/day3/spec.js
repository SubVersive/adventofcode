const os = require('os');
const func = require('./');

describe('2017 Day 3 challange', () => {
  describe('Part 1', () => {
    it('should return 0 for 1', () => {
      func.exec1('1').should.equal(0);
    });
    describe('max ring value', () => {
      it('should return 2 for 9', () => {
        func.exec1('9').should.equal(2);
      });
      it('should return 4 for 25', () => {
        func.exec1('25').should.equal(4);
      });
      it('should return 6 for 49', () => {
        func.exec1('49').should.equal(6);
      });
    });
    it('should return valid numbers for first ring', () => {
      func.exec1('8').should.equal(1);
      func.exec1('7').should.equal(2);
      func.exec1('6').should.equal(1);
      func.exec1('5').should.equal(2);
      func.exec1('4').should.equal(1);
      func.exec1('3').should.equal(2);
      func.exec1('2').should.equal(1);
    });
    it('should return valid numbers for second ring', () => {
      func.exec1('10').should.equal(3);
      func.exec1('11').should.equal(2);
      func.exec1('12').should.equal(3);
      func.exec1('13').should.equal(4);
      func.exec1('14').should.equal(3);
      func.exec1('15').should.equal(2);
    });
    it('should return valid numbers for samples', () => {
      func.exec1('1').should.equal(0);
      func.exec1('12').should.equal(3);
      func.exec1('23').should.equal(2);
      func.exec1('1024').should.equal(31);
    });
  });

  describe.only('Part 2', function () {
    it('should return 0 for 1', () => {
      func.exec2('1').should.equal(0);
    });
  });
});