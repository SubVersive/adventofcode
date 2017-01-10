require('should');
const func = require('./');

describe('Day 5 challange', () => {
  describe('Part 1', () => {
    it('should return true if string contains at least 3 vowels', () => {
      func.isNice('asasas').should.be.false();
    });

    it('should return false if string doesnot contain at least 3 vowels', () => {
      func.isNice('sassas').should.be.false();
    });

    it('should return true if string has 3 vowels and double', () => {
      func.isNice('asaasas').should.be.true();
    });

    it('should return false if string contains exceptional substrings', () => {
      func.isNice('asaasasab').should.be.false();
    });

    it('should run all sample tests', () => {
      func.isNice('ugknbfddgicrmopn').should.be.true();
      func.isNice('aaa').should.be.true();
      func.isNice('jchzalrnumimnmhp').should.be.false();
      func.isNice('haegwjzuvuyypxyu').should.be.false();
      func.isNice('dvszwmarrgswjxmb').should.be.false();
    });
  });

  describe('Part 2', () => {
    it('should return hasSplittedDoubles true if string contain same letter with 1 between', () => {
      func.isEvenNicer('xyxa').hasSplittedDoubles.should.be.true();
    });

    it('should return hasSplittedDoubles false if string doesnot contain same letter with 1 between', () => {
      func.isEvenNicer('xyax').hasSplittedDoubles.should.be.false();
    });

    it('should return number of pairs', () => {
      func.isEvenNicer('xyabcxydefxy').pairs['ab'].count.should.be.equal(1);
      func.isEvenNicer('xyabcxydefxy').pairs['xy'].count.should.be.equal(3);
    });

    it('should not calculate overlapped pairs', () => {
      func.isEvenNicer('aaa').pairs['aa'].count.should.be.equal(1);
    });

    it('should run all sample tests', () => {
      func.isEvenNicer('qjhvhtzxzqqjkmpb').result.should.be.true();
      func.isEvenNicer('xxyxx').result.should.be.true();
      func.isEvenNicer('uurcxstgmygtbstg').result.should.be.false();
      func.isEvenNicer('ieodomkazucvgmuy').result.should.be.false();
    });
  });
});