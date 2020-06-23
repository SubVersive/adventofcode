class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = [];
    for (let x = 0; x < this.width; x++) {
      this.cells.push([]);
      for (let y = 0; y < this.height; y++) {
        this.cells[x].push(0);
      }
    }
  }

  getValue(x, y) {
    return this.cells[x][y];
  }

  getBrightness() {
    let count = 0;
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        count += this.getValue(x, y);
      }
    }

    return count;
  }

  everyCell(from, to, fn) {
    for (let { x } = from; x <= to.x; x++) {
      for (let { y } = from; y <= to.y; y++) {
        this.cells[x][y] = fn(this.cells[x][y]);
      }
    }
  }

  turnOn(from, to) {
    this.everyCell(from, to, (value) => value + 1);
  }

  turnOff(from, to) {
    this.everyCell(from, to, (value) => Math.max(value - 1, 0));
  }

  toggle(from, to) {
    this.everyCell(from, to, (value) => value + 2);
  }
}

const makeGrid = (width, height) => {
  const grid = new Grid(width, height);
  return grid;
};

module.exports = makeGrid;
