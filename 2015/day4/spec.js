const os = require("os");
const func = require('./');
const hashService = require('./hash.service');
const sinon = require('sinon');

describe.skip('Day 4 challange', () => {
  let sandbox;
  const input = '123';
  beforeEach(() => { sandbox = sinon.sandbox.create(); });
  afterEach(() => sandbox.restore());

  describe('Part 1', () => {

    let result;
    beforeEach(() => {
      sandbox.stub(hashService, 'generateHash')
        .onFirstCall().returns('1')
        .onSecondCall().returns('2')
        .onThirdCall().returns('000001');
      result = func.exec1(input);
    });

    it('should pass incremented value with inout to hash service', () => {
      hashService.generateHash.should.be.calledWith(input + 1);
      hashService.generateHash.should.be.calledWith(input + 2);
      hashService.generateHash.should.be.calledWith(input + 3);
    });

    it('should calls hashService while result is not started with five zeros', () => {
      hashService.generateHash.callCount.should.be.equal(3);
    });

    it('should return int number of calls', () => {
      result.should.be.equal(3);
    });
  });

  describe('Part 2', () => {
    let result;
    beforeEach(() => {
      sandbox.stub(hashService, 'generateHash')
        .onFirstCall().returns('1')
        .onSecondCall().returns('2')
        .onThirdCall().returns('0000001');
      result = func.exec2(input);
    });

    it('should pass incremented value with inout to hash service', () => {
      hashService.generateHash.should.be.calledWith(input + 1);
      hashService.generateHash.should.be.calledWith(input + 2);
      hashService.generateHash.should.be.calledWith(input + 3);
    });

    it('should calls hashService while result is not started with five zeros', () => {
      hashService.generateHash.callCount.should.be.equal(3);
    });

    it('should return int number of calls', () => {
      result.should.be.equal(3);
    });
  });
});