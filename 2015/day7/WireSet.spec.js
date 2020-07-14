/* eslint-disable no-bitwise */

const WireSet = require('./WireSet');

describe('2015: Day 7 challange - WireSet spec', () => {
  it('should join simple number to a proper wire', () => {
    const set = new WireSet();
    set.add('123 -> x').add('456 -> y');
    expect(set.getSignal('x')).toEqual(123);
    expect(set.getSignal('y')).toEqual(456);
  });
  it('should bitwise *AND* multiple inputs in gate wire', () => {
    const set = new WireSet();
    set.add('123 -> x').add('456 -> y');
    set.add('x AND y -> d');
    expect(set.getSignal('d')).toEqual(123 & 456);
  });
  it('should bitwise *AND* static values in gate wire', () => {
    const set = new WireSet();
    set.add('1 AND 2 -> d');
    expect(set.getSignal('d')).toEqual(1 & 2);
  });
  it('should bitwise *OR* multiple inputs in gate wire', () => {
    const set = new WireSet();
    set.add('123 -> x').add('456 -> y');
    set.add('x OR y -> d');
    expect(set.getSignal('d')).toEqual(123 | 456);
  });
  it('should LSHIFT wire', () => {
    const set = new WireSet();
    set.add('123 -> x');
    set.add('x LSHIFT 2 -> d');
    expect(set.getSignal('d')).toEqual(123 << 2);
  });
  it('should RSHIFT wire', () => {
    const set = new WireSet();
    set.add('123 -> x');
    set.add('x RSHIFT 2 -> d');
    expect(set.getSignal('d')).toEqual(123 >> 2);
  });
  it('should connect *NOT* wire', () => {
    const set = new WireSet();
    set.add('123 -> x');
    set.add('NOT x -> d');
    expect(set.getSignal('d')).toEqual(~123 & 0xffff);
  });
  it('should work for given sample', () => {
    const set = new WireSet();
    set
      .add('123 -> x')
      .add('456 -> y')
      .add('x AND y -> d')
      .add('x OR y -> e')
      .add('x LSHIFT 2 -> f')
      .add('y RSHIFT 2 -> g')
      .add('NOT x -> h')
      .add('NOT y -> i');
    expect(set.getSignal('d')).toEqual(72);
    expect(set.getSignal('e')).toEqual(507);
    expect(set.getSignal('f')).toEqual(492);
    expect(set.getSignal('g')).toEqual(114);
    expect(set.getSignal('h')).toEqual(65412);
    expect(set.getSignal('i')).toEqual(65079);
    expect(set.getSignal('x')).toEqual(123);
    expect(set.getSignal('y')).toEqual(456);
  });
});
