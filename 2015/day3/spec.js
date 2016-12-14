const os = require("os");
const func = require('./');

describe('Day 3 challange', () => {
  describe('Part 1', () => {
    it('for default - 0 [0] length 2', () => {
      const houses = func.visitedHouses('');
      const count = func.exec1('');

      count.should.be.equal(1);
      houses[0].should.be.deepEqual([0]);
    });

    it('for north - 2 houses length 2', () => {
      const houses = func.visitedHouses('^');
      const count = func.exec1('^');

      count.should.be.equal(2);
      houses[0].should.be.deepEqual([0]);
      houses[1].should.be.deepEqual([0]);
    });

    it('for south - 2 houses', () => {
      const houses = func.visitedHouses('v');
      const count = func.exec1('v');

      count.should.be.equal(2);
      houses[0].should.be.deepEqual([0]);
      houses[-1].should.be.deepEqual([0]);
    });

    it('for east - 2 houses in a row', () => {
      const houses = func.visitedHouses('>');
      const count = func.exec1('>');

      count.should.be.equal(2);
      houses[0].should.be.deepEqual([0, 1]);
    });

    it('for west - 2 houses in a row', () => {
      const houses = func.visitedHouses('<');
      const count = func.exec1('<');

      count.should.be.equal(2);
      houses[0].should.be.deepEqual([0, -1]);
    });

    it('should not track visited houses', () => {
      const houses = func.visitedHouses(`><><`);
      const count = func.exec1('<');

      count.should.be.equal(2);
      houses[0].should.be.deepEqual([0, 1]);
    });
  });

  describe('Part 2', () => {
    
  });
});