const os = require('os');
const func = require('./');

describe('2017 Day 4 challange', () => {
  describe('Part 1', () => {
    it('should return 1 for 1 valid phrase with onem word', () => {
      func.exec1('aa').should.equal(1);
    });
    it('should return 1 for 1 valid phrase with two diff words', () => {
      func.exec1('aa bb').should.equal(1);
    });
    it('should return 0 for 1 phrase with two same words', () => {
      func.exec1('aa aa').should.equal(0);
    });
    it('should return 2 for 2 valid phrase with one word', () => {
      func.exec1(`aa${os.EOL}aa`).should.equal(2);
    });
    it('should return 0 for 2 phrase with two same words', () => {
      func.exec1(`aa aa${os.EOL}aa aa`).should.equal(0);
    });
    it('should return 0 for 1 phrase with same words', () => {
      func.exec1('aa bb cc aa').should.equal(0);
    });
  });

  describe('Part 2', function () {
    it('should return 1 for 1 valid phrase with onem word', () => {
      func.exec2('aa').should.equal(1);
    });
    it('should return 1 for 1 valid phrase with two diff words', () => {
      func.exec2('aa bb').should.equal(1);
    });
    it('should return 0 for 1 phrase with two same words', () => {
      func.exec2('aa aa').should.equal(0);
    });
    it('should return 2 for 2 valid phrase with one word', () => {
      func.exec2(`aa${os.EOL}aa`).should.equal(2);
    });
    it('should return 0 for 2 phrase with two same words', () => {
      func.exec2(`aa aa${os.EOL}aa aa`).should.equal(0);
    });
    it('should return 0 for 1 phrase with same words', () => {
      func.exec2('aa bb cc aa').should.equal(0);
    });
    it('should return 0 for 1 phrase with anagrams words', () => {
      func.exec2('aab bb baa').should.equal(0);
    });
  });
});