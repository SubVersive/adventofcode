const func = require('.');

describe('Day 1 challange', () => {
  describe('Part 1', () => {
    it('should return 0 by default', () => {
      expect(func.exec1('')).toEqual(0);
    });

    it('should treat ( as one up', () => {
      expect(func.exec1('((')).toEqual(2);
    });

    it('should treat ) as one down', () => {
      expect(func.exec1('))')).toEqual(-2);
    });
  });

  describe('Part 2', () => {
    it('should return 1 by default', () => {
      expect(func.exec2('')).toEqual(1);
    });

    it('should 3 for first negative entrance', () => {
      expect(func.exec2('())')).toEqual(3);
    });
  });
});
