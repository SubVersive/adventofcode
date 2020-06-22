const os = require('os');
const func = require('.');

describe('2017 Day 4 challange', () => {
  describe('Part 1', () => {
    it('should return 1 for 1 valid phrase with onem word', () => {
      expect(func.exec1('aa')).toEqual(1);
    });
    it('should return 1 for 1 valid phrase with two diff words', () => {
      expect(func.exec1('aa bb')).toEqual(1);
    });
    it('should return 0 for 1 phrase with two same words', () => {
      expect(func.exec1('aa aa')).toEqual(0);
    });
    it('should return 2 for 2 valid phrase with one word', () => {
      expect(func.exec1(`aa${os.EOL}aa`)).toEqual(2);
    });
    it('should return 0 for 2 phrase with two same words', () => {
      expect(func.exec1(`aa aa${os.EOL}aa aa`)).toEqual(0);
    });
    it('should return 0 for 1 phrase with same words', () => {
      expect(func.exec1('aa bb cc aa')).toEqual(0);
    });
  });

  describe('Part 2', () => {
    it('should return 1 for 1 valid phrase with onem word', () => {
      expect(func.exec2('aa')).toEqual(1);
    });
    it('should return 1 for 1 valid phrase with two diff words', () => {
      expect(func.exec2('aa bb')).toEqual(1);
    });
    it('should return 0 for 1 phrase with two same words', () => {
      expect(func.exec2('aa aa')).toEqual(0);
    });
    it('should return 2 for 2 valid phrase with one word', () => {
      expect(func.exec2(`aa${os.EOL}aa`)).toEqual(2);
    });
    it('should return 0 for 2 phrase with two same words', () => {
      expect(func.exec2(`aa aa${os.EOL}aa aa`)).toEqual(0);
    });
    it('should return 0 for 1 phrase with same words', () => {
      expect(func.exec2('aa bb cc aa')).toEqual(0);
    });
    it('should return 0 for 1 phrase with anagrams words', () => {
      expect(func.exec2('aab bb baa')).toEqual(0);
    });
  });
});
