const func = require('.');
const { makeGrid } = require('.');

describe('2015: Day 6 challange', () => {
  describe('Part 1', () => {
    describe('#makeGrid', () => {
      it('should return grid 1K x 1K', () => {
        const grid = func.makeGrid(1000, 1000);
        expect(grid.width).toEqual(1000);
        expect(grid.height).toEqual(1000);
      });
      it('should return all lights turned of by default', () => {
        const grid = func.makeGrid(10, 10);
        for (let x = 0; x < grid.width; x++) {
          for (let y = 0; y < grid.height; y++) {
            expect(grid.isOn(x, y)).toBeFalsy();
          }
        }
      });
      it('should return 0 as amount of lit lights', () => {
        const grid = func.makeGrid(1000, 1000);
        expect(grid.litCount()).toEqual(0);
      });
    });
    describe('#turnOn', () => {
      it('should turn on single cell', () => {
        const grid = func.makeGrid(1000, 1000);
        grid.turnOn({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.litCount()).toEqual(1);
        expect(grid.isOn(0, 0)).toBeTruthy();
      });
      it('should turn on one row', () => {
        const grid = func.makeGrid(10, 10);
        grid.turnOn({ x: 0, y: 0 }, { x: 0, y: 9 });
        expect(grid.litCount()).toEqual(10);
        for (let y = 0; y < grid.height; y++) {
          expect(grid.isOn(0, y)).toBeTruthy();
        }
      });
      it('should turn on whole grid', () => {
        const grid = func.makeGrid(10, 10);
        grid.turnOn({ x: 0, y: 0 }, { x: 9, y: 9 });
        expect(grid.litCount()).toEqual(100);
        for (let x = 0; x < grid.width; x++) {
          for (let y = 0; y < grid.height; y++) {
            expect(grid.isOn(x, y)).toBeTruthy();
          }
        }
      });
    });
    describe('#turnOff', () => {
      const makeOnGrid = () => {
        const grid = func.makeGrid(10, 10);
        grid.turnOn({ x: 0, y: 0 }, { x: 9, y: 9 });
        return grid;
      };
      it('should turn off single cell', () => {
        const grid = makeOnGrid();
        grid.turnOff({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.litCount()).toEqual(99);
        expect(grid.isOn(0, 0)).toBeFalsy();
      });
      it('should turn off one row', () => {
        const grid = makeOnGrid();
        grid.turnOff({ x: 0, y: 0 }, { x: 0, y: 9 });
        expect(grid.litCount()).toEqual(90);
        for (let y = 0; y < grid.height; y++) {
          expect(grid.isOn(0, y)).toBeFalsy();
        }
      });
      it('should turn off whole grid', () => {
        const grid = makeOnGrid();
        grid.turnOff({ x: 0, y: 0 }, { x: 9, y: 9 });
        expect(grid.litCount()).toEqual(0);
        for (let x = 0; x < grid.width; x++) {
          for (let y = 0; y < grid.height; y++) {
            expect(grid.isOn(x, y)).toBeFalsy();
          }
        }
      });
    });
    describe('#toggle', () => {
      it('should toggle single cell', () => {
        const grid = makeGrid(10, 10);
        grid.toggle({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.litCount()).toEqual(1);
        expect(grid.isOn(0, 0)).toBeTruthy();
        grid.toggle({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.litCount()).toEqual(0);
        expect(grid.isOn(0, 0)).toBeFalsy();
      });
      it('should toggle whole grid', () => {
        const grid = makeGrid(10, 10);
        grid.toggle({ x: 0, y: 0 }, { x: 9, y: 9 });
        expect(grid.litCount()).toEqual(100);
        grid.toggle({ x: 0, y: 0 }, { x: 9, y: 9 });
        expect(grid.litCount()).toEqual(0);
      });
    });
  });

  describe('Part 2', () => {});
});
