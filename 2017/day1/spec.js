const func = require('.');

describe('2017 Day 1 challange', () => {
  describe('Part 1', () => {
    it('should return 0 by default', () => {
      expect(func.exec1('')).toEqual(0);
    });
    it('should return 0 for 2 not matched values', () => {
      expect(func.exec1('12')).toEqual(0);
    });
    it('should return 1 for 2 ones in a row', () => {
      expect(func.exec1('211')).toEqual(1);
    });
    it('should return 4 for 3 twos in a row', () => {
      expect(func.exec1('12223')).toEqual(4);
    });
    it('should take into account cycle item', () => {
      expect(func.exec1('121')).toEqual(1);
    });
  });

  describe('Part 2', () => {
    it('should return 0 by default', () => {
      expect(func.exec2('')).toEqual(0);
    });
    it('should return 0 to 2 different item', () => {
      expect(func.exec2('12')).toEqual(0);
    });
    it('should return 2 to ones in a row', () => {
      expect(func.exec2('11')).toEqual(2);
    });
    it('given test cases should return valid result', () => {
      expect(func.exec2('1212')).toEqual(6);
      expect(func.exec2('1221')).toEqual(0);
      expect(func.exec2('123425')).toEqual(4);
      expect(func.exec2('123123')).toEqual(12);
      expect(func.exec2('12131415')).toEqual(4);
    });
  });
});
