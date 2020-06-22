const os = require('os');

const func = require('.');

describe('Day 1 challange', () => {
  describe('Part 1', () => {
    it('should return 0 by default', () => {
      expect(func.exec1('')).toEqual(0);
    });
    it('should return positive number for (+)', () => {
      expect(func.exec1('+5')).toEqual(5);
    });

    it('should return negative number for (-)', () => {
      expect(func.exec1('-3')).toEqual(-3);
    });

    it('should calculate per line', () => {
      expect(func.exec1(`-3${os.EOL}+5${os.EOL}+1`)).toEqual(3);
    });
  });
});
