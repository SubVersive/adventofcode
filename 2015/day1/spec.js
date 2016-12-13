const func = require('./');

describe('Day 1 challange', () => {
  describe('Part 1', () => {
    it('should return 0 by default', () => {
      func.exec1('').should.equal(0);
    });

    it('should treat ( as one up', () => {
      func.exec1('((').should.equal(2);
    });

    it('should treat ) as one down', () => {
      func.exec1('))').should.equal(-2);
    });
  });

  describe('Part 2', function () {
    it('should return 1 by default', () => {
      func.exec2('').should.equal(1);
    });

    it('should 3 for first negative entrance', () => {
      func.exec2('())').should.equal(3);
    });
  });
});