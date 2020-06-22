const os = require('os');
const func = require('.');

describe('Day 2 challange', () => {
  describe('Part 1', () => {
    it('for box 1x1x1) should return 43', () => {
      const input = `1x1x10`;
      expect(func.exec1(input)).toEqual(43);
    });

    it('for box 2x3x4 should return 58', () => {
      const input = `2x3x4`;
      expect(func.exec1(input)).toEqual(58);
    });
  });

  describe('Part 2', () => {
    it('for box 2x3x4 cubic should be 34', () => {
      const input = `2x3x4`;
      expect(func.exec2(input)).toEqual(34);
    });

    it('for box 1x1x10 cubic should be 14', () => {
      const input = `1x1x10`;
      expect(func.exec2(input)).toEqual(14);
    });

    it('for box both cubic should be 48', () => {
      const input = `1x1x10${os.EOL}2x3x4`;
      expect(func.exec2(input)).toEqual(48);
    });
  });
});
