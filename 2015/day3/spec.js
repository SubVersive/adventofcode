const func = require('.');

describe('Day 3 challange', () => {
  describe('Part 1', () => {
    it('for default - 0 [0] length 2', () => {
      const houses = func.visitedHouses('');
      const count = func.exec1('');

      expect(count).toEqual(1);
      expect(houses[0]).toEqual([0]);
    });

    it('for north - 2 houses length 2', () => {
      const houses = func.visitedHouses('^');
      const count = func.exec1('^');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0]);
      expect(houses[1]).toEqual([0]);
    });

    it('for south - 2 houses', () => {
      const houses = func.visitedHouses('v');
      const count = func.exec1('v');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0]);
      expect(houses[-1]).toEqual([0]);
    });

    it('for east - 2 houses in a row', () => {
      const houses = func.visitedHouses('>');
      const count = func.exec1('>');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0, 1]);
    });

    it('for west - 2 houses in a row', () => {
      const houses = func.visitedHouses('<');
      const count = func.exec1('<');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0, -1]);
    });

    it('should not track visited houses', () => {
      const houses = func.visitedHouses(`><><`);
      const count = func.exec1('<');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0, 1]);
    });
  });

  describe('Part 2', () => {
    it('for default - 0 [0] length 2', () => {
      const houses = func.visitedHousesRobo('');
      const count = func.exec2('');

      expect(count).toEqual(1);
      expect(houses[0]).toEqual([0]);
    });

    it('for north - 2 houses length 2', () => {
      const houses = func.visitedHousesRobo('^');
      const count = func.exec2('^');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0]);
      expect(houses[1]).toEqual([0]);
    });

    it('for south - 2 houses', () => {
      const houses = func.visitedHousesRobo('v');
      const count = func.exec2('v');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0]);
      expect(houses[-1]).toEqual([0]);
    });

    it('for east - 2 houses in a row', () => {
      const houses = func.visitedHousesRobo('>');
      const count = func.exec2('>');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0, 1]);
    });

    it('for west - 2 houses in a row', () => {
      const houses = func.visitedHousesRobo('<');
      const count = func.exec2('<');

      expect(count).toEqual(2);
      expect(houses[0]).toEqual([0, -1]);
    });

    it('should move santa and robo separetly', () => {
      const houses = func.visitedHousesRobo(`><`);
      const count = func.exec2('><');

      expect(count).toEqual(3);
      expect(houses[0]).toEqual([0, 1, -1]);
    });
  });
});
