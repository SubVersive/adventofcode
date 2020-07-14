/* eslint-disable no-bitwise */

const uint16 = (val) => val & 0xffff;

class WireSet {
  constructor() {
    this.set = {};
    this.commands = {
      SET: (...arg) => this.setValue(...arg),
      OR: (...arg) => this.connectBitwiseOr(...arg),
      AND: (...arg) => this.connectBitwiseAnd(...arg),
      NOT: (...arg) => this.connectNot(...arg),
      LSHIFT: (...arg) => this.connectLShift(...arg),
      RSHIFT: (...arg) => this.connectRShift(...arg),
    };
    this.commandKeys = Object.keys(this.commands);
  }

  add(desc) {
    const [cmd, wire] = desc.split(' -> ');
    this.set[wire] = {
      hasValue: false,
      cmd,
      wire,
    };
    return this;
  }

  connectLShift(value, wire) {
    const [left, right] = value.split(' LSHIFT ');
    this.set[wire] = {
      hasValue: true,
      value: this.getSignal(left) << parseInt(right, 10),
    };
    return this;
  }

  connectRShift(value, wire) {
    const [left, right] = value.split(' RSHIFT ');
    this.set[wire] = {
      hasValue: true,
      value: this.getSignal(left) >> parseInt(right, 10),
    };
    return this;
  }

  connectBitwiseAnd(value, wire) {
    const [left, right] = value.split(' AND ');
    this.set[wire] = {
      hasValue: true,
      value: this.getSignal(left) & this.getSignal(right),
    };
    return this;
  }

  setValue(value, wire) {
    const num = parseInt(value, 10);
    if (!Number.isNaN(num)) {
      this.set[wire] = {
        hasValue: true,
        value: num,
      };
    } else {
      this.set[wire] = {
        hasValue: true,
        value: this.getSignal(value),
      };
    }
    return this;
  }

  connectBitwiseOr(value, wire) {
    const [left, right] = value.split(' OR ');
    this.set[wire] = {
      hasValue: true,
      value: this.getSignal(left) | this.getSignal(right),
    };
    return this;
  }

  connectNot(value, wire) {
    const [, right] = value.split('NOT ');
    this.set[wire] = {
      hasValue: true,
      value: uint16(~this.getSignal(right)),
    };
    return this;
  }

  getSignal(wire) {
    const value = parseInt(wire, 10);
    if (!Number.isNaN(value)) {
      return value;
    }
    if (!this.set[wire].hasValue) {
      const { cmd } = this.set[wire];
      const command = this.commandKeys.find((key) => cmd.includes(key));
      this.commands[command || 'SET'](cmd, wire);
    }
    return this.set[wire].value;
  }
}

module.exports = WireSet;
