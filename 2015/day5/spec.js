const func = require('.');

describe('Day 5 challange', () => {
  describe('Part 1', () => {
    it('should return true if string contains at least 3 vowels', () => {
      expect(func.isNice('asasas')).toBeFalsy();
    });

    it('should return false if string doesnot contain at least 3 vowels', () => {
      expect(func.isNice('sassas')).toBeFalsy();
    });

    it('should return true if string has 3 vowels and double', () => {
      expect(func.isNice('asaasas')).toBeTruthy();
    });

    it('should return false if string contains exceptional substrings', () => {
      expect(func.isNice('asaasasab')).toBeFalsy();
    });

    it('should run all sample tests', () => {
      expect(func.isNice('ugknbfddgicrmopn')).toBeTruthy();
      expect(func.isNice('aaa')).toBeTruthy();
      expect(func.isNice('jchzalrnumimnmhp')).toBeFalsy();
      expect(func.isNice('haegwjzuvuyypxyu')).toBeFalsy();
      expect(func.isNice('dvszwmarrgswjxmb')).toBeFalsy();
    });
  });

  describe('Part 2', () => {
    it('should return hasSplittedDoubles true if string contain same letter with 1 between', () => {
      expect(func.isEvenNicer('xyxa').hasSplittedDoubles).toBeTruthy();
    });

    it('should return hasSplittedDoubles false if string doesnot contain same letter with 1 between', () => {
      expect(func.isEvenNicer('xyax').hasSplittedDoubles).toBeFalsy();
    });

    it('should return number of pairs', () => {
      expect(func.isEvenNicer('xyabcxydefxy').pairs.ab.count).toEqual(1);
      expect(func.isEvenNicer('xyabcxydefxy').pairs.xy.count).toEqual(3);
    });

    it('should not calculate overlapped pairs', () => {
      expect(func.isEvenNicer('aaabaaa').pairs.aa.count).toEqual(2);
    });

    it('should run all sample tests', () => {
      expect(func.isEvenNicer('qjhvhtzxzqqjkmpb').result).toBeTruthy();
      expect(func.isEvenNicer('xxyxx').result).toBeTruthy();
      expect(func.isEvenNicer('uurcxstgmygtbstg').result).toBeFalsy();
      expect(func.isEvenNicer('ieodomkazucvgmuy').result).toBeFalsy();
    });
  });
});
