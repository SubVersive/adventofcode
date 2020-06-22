const func = require('.');

describe('2017 Day 3 challange', () => {
  describe('Part 1', () => {
    it('should return 0 for 1', () => {
      expect(func.exec1('1')).toEqual(0);
    });
    describe('max ring value', () => {
      it('should return 2 for 9', () => {
        expect(func.exec1('9')).toEqual(2);
      });
      it('should return 4 for 25', () => {
        expect(func.exec1('25')).toEqual(4);
      });
      it('should return 6 for 49', () => {
        expect(func.exec1('49')).toEqual(6);
      });
    });
    it('should return valid numbers for first ring', () => {
      expect(func.exec1('8')).toEqual(1);
      expect(func.exec1('7')).toEqual(2);
      expect(func.exec1('6')).toEqual(1);
      expect(func.exec1('5')).toEqual(2);
      expect(func.exec1('4')).toEqual(1);
      expect(func.exec1('3')).toEqual(2);
      expect(func.exec1('2')).toEqual(1);
    });
    it('should return valid numbers for second ring', () => {
      expect(func.exec1('10')).toEqual(3);
      expect(func.exec1('11')).toEqual(2);
      expect(func.exec1('12')).toEqual(3);
      expect(func.exec1('13')).toEqual(4);
      expect(func.exec1('14')).toEqual(3);
      expect(func.exec1('15')).toEqual(2);
    });
    it('should return valid numbers for samples', () => {
      expect(func.exec1('1')).toEqual(0);
      expect(func.exec1('12')).toEqual(3);
      expect(func.exec1('23')).toEqual(2);
      expect(func.exec1('1024')).toEqual(31);
    });
  });
});
