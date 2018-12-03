const os = require('os');
const { expect } = require('chai');

const func = require('./');

describe('Day 1 challange', () => {
  describe('Part 1', () => {
    it('should return 0 by default', () => {
      expect(func.exec1('')).to.be.equal(0);
    });
    it('should return positive number for (+)', () => {
      expect(func.exec1('+5')).to.be.equal(5);
    });

    it('should return negative number for (-)', () => {
      expect(func.exec1('-3')).to.be.equal(-3);
    });

    it('should calculate per line', () => {
      expect(func.exec1(`-3${os.EOL}+5${os.EOL}+1`)).to.be.equal(3);
    });
  });

  describe('Part 2', function () {
    
  });
});