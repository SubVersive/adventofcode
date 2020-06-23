const { makeGridV2 } = require('.');

describe('2015: Day 6 challange v2', () => {
  describe('Part 1', () => {
    describe('#makeGrid', () => {
      it('should return grid 1K x 1K', () => {
        const grid = makeGridV2(1000, 1000);
        expect(grid.width).toEqual(1000);
        expect(grid.height).toEqual(1000);
      });
      it('should return all lights turned of by default', () => {
        const grid = makeGridV2(10, 10);
        for (let x = 0; x < grid.width; x++) {
          for (let y = 0; y < grid.height; y++) {
            expect(grid.getValue(x, y)).toEqual(0);
          }
        }
      });
      it('should return 0 as amount of lit lights', () => {
        const grid = makeGridV2(1000, 1000);
        expect(grid.getBrightness()).toEqual(0);
      });
    });
    describe('#turnOn', () => {
      it('should turn on single cell', () => {
        const grid = makeGridV2(10, 10);
        grid.turnOn({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.getBrightness()).toEqual(1);
        expect(grid.getValue(0, 0)).toEqual(1);
      });
      it('should turn on single cell multiple times', () => {
        const grid = makeGridV2(10, 10);
        grid.turnOn({ x: 0, y: 0 }, { x: 0, y: 0 });
        grid.turnOn({ x: 0, y: 0 }, { x: 0, y: 0 });
        grid.turnOn({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.getBrightness()).toEqual(3);
        expect(grid.getValue(0, 0)).toEqual(3);
      });
      it('should turn on whole grid', () => {
        const grid = makeGridV2(10, 10);
        grid.turnOn({ x: 0, y: 0 }, { x: 9, y: 9 });
        expect(grid.getBrightness()).toEqual(100);
        for (let x = 0; x < grid.width; x++) {
          for (let y = 0; y < grid.height; y++) {
            expect(grid.getValue(x, y)).toEqual(1);
          }
        }
      });
    });
    describe('#turnOff', () => {
      const makeOnGrid = () => {
        const grid = makeGridV2(10, 10);
        grid.turnOn({ x: 0, y: 0 }, { x: 9, y: 9 });
        return grid;
      };
      it('should turn off single cell', () => {
        const grid = makeOnGrid();
        grid.turnOff({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.getBrightness()).toEqual(99);
        expect(grid.getValue(0, 0)).toEqual(0);
      });
      it('should turn off single cell multiple times', () => {
        const grid = makeOnGrid();
        grid.turnOff({ x: 0, y: 0 }, { x: 0, y: 0 });
        grid.turnOff({ x: 0, y: 0 }, { x: 0, y: 0 });
        grid.turnOff({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.getBrightness()).toEqual(99);
        expect(grid.getValue(0, 0)).toEqual(0);
      });
      it('should turn off one row', () => {
        const grid = makeOnGrid();
        grid.turnOff({ x: 0, y: 0 }, { x: 0, y: 9 });
        expect(grid.getBrightness()).toEqual(90);
        for (let y = 0; y < grid.height; y++) {
          expect(grid.getValue(0, y)).toEqual(0);
        }
      });
    });
    describe('#toggle', () => {
      it('should toggle single cell', () => {
        const grid = makeGridV2(10, 10);
        grid.toggle({ x: 0, y: 0 }, { x: 0, y: 0 });
        expect(grid.getBrightness()).toEqual(2);
        expect(grid.getValue(0, 0)).toEqual(2);
      });
      it('should toggle whole grid', () => {
        const grid = makeGridV2(10, 10);
        grid.toggle({ x: 0, y: 0 }, { x: 9, y: 9 });
        expect(grid.getBrightness()).toEqual(200);
      });
    });
  });
});
