const sut = require('.');

describe('Day 1 challange', () => {
  describe('Part 1', () => {
    it('should throw when lists have different size', () => {
      expect(() => sut.findDistance([1], [1, 2])).toThrow();
    });

    it('should throw when one of params is missing', () => {
      expect(() => sut.findDistance(null, [1, 2])).toThrow();
      expect(() => sut.findDistance([1, 2], null)).toThrow();
      expect(() => sut.findDistance(null, null)).toThrow();
    });

    it('should return 0 for empty input', () => {
      expect(sut.findDistance([], [])).toEqual(0);
    });

    it('should return 0 for same lists', () => {
      expect(sut.findDistance([1, 2], [1, 2])).toEqual(0);
    });

    it('should return 0 for same lists in different order', () => {
      expect(sut.findDistance([1, 2], [2, 1])).toEqual(0);
    });

    it('should return 1 for when diff is 1', () => {
      expect(sut.findDistance([2], [1])).toEqual(1);
    });

    it('should return proper diff', () => {
      expect(sut.findDistance([2, 6], [1, 15])).toEqual(10);
    });
  });

  describe('Part 2', () => {
    it('should return 0 if no elements are matched', () => {
      expect(sut.findSimilarityScore([1], [2])).toEqual(0);
    });
    it('should return times * element for matched one', () => {
      expect(sut.findSimilarityScore([1, 3], [1, 2, 1])).toEqual(2);
    });
  });
});
