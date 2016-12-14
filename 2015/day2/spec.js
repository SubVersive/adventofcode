const os = require("os");
const func = require('./');

describe('Day 2 challange', () => {
  describe('Part 1', () => {
    it('for box 1x1x1) should return 43', () => {
      const input = `1x1x10`;
      func.exec1(input).should.equal(43);
    });

    it('for box 2x3x4 should return 58', () => {
      const input = `2x3x4`;
      func.exec1(input).should.equal(58);
    });
  });

  describe('Part 2', () => {
    
  });
});