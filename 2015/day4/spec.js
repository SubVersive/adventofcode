const func = require('.');
const hashService = require('./hash.service');

describe('2015: Day 4 challange', () => {
  const input = '123';

  describe('Part 1', () => {
    let result;
    beforeEach(() => {
      hashService.generateHash = jest
        .fn()
        .mockReturnValueOnce('1')
        .mockReturnValueOnce('2')
        .mockReturnValueOnce('000001');
      result = func.exec1(input);
    });

    it('should pass incremented value with inout to hash service', () => {
      expect(hashService.generateHash).toHaveBeenCalledWith(input + 1);
      expect(hashService.generateHash).toHaveBeenCalledWith(input + 2);
      expect(hashService.generateHash).toHaveBeenCalledWith(input + 3);
    });

    it('should calls hashService while result is not started with five zeros', () => {
      expect(hashService.generateHash).toHaveBeenCalledTimes(3);
    });

    it('should return int number of calls', () => {
      expect(result).toEqual(3);
    });
  });

  describe('Part 2', () => {
    let result;
    beforeEach(() => {
      hashService.generateHash = jest
        .fn()
        .mockReturnValueOnce('1')
        .mockReturnValueOnce('2')
        .mockReturnValueOnce('0000001');
      result = func.exec2(input);
    });

    it('should pass incremented value with inout to hash service', () => {
      expect(hashService.generateHash).toHaveBeenCalledWith(input + 1);
      expect(hashService.generateHash).toHaveBeenCalledWith(input + 2);
      expect(hashService.generateHash).toHaveBeenCalledWith(input + 3);
    });

    it('should calls hashService while result is not started with five zeros', () => {
      expect(hashService.generateHash).toHaveBeenCalledTimes(3);
    });

    it('should return int number of calls', () => {
      expect(result).toEqual(3);
    });
  });
});
